/**
 *  pg-catch
 *  ========
 *
 *  A simple game to show the usage of PeerGaming.
 */


var Game = (function(){

  /**
   *  Constants
   */

  var friction =    0.5,

      size     =     60,

      radius   = size/4,


      users    =     [],

      player   =     {},

      cookies  =     [];


  // --------------------------------------------------- //


  function init()  {

    setup();        // canvas

    create();       // player

    start();        // rendering

    random( true ); // cookies
  }


  // --------------------------------------------------- //

  /**
   *  Internal
   */

  var ctx, width, height;

  // creates the game field
  function setup(){

    document.body.innerHTML = '';

    var cvs = document.createElement('canvas');

    ctx = cvs.getContext('2d');

    cvs.width  = width  = window.innerWidth;
    cvs.height = height = window.innerHeight;

    document.body.appendChild( cvs );

    ctx.font = '30px Helvetica';
  }

  // window.addEventListener( 'resize', create );

  // --------------------------------------------------- //

  function create(){

    player  = pg.player.data;                                          // || (1)

    users   = pg.data;                                                 // || (2)

    extend( player, {

       x : Math.random() * width ,  // position     - x
       y : Math.random() * height,  // position     - y

      vx :  0,                      // velocity     - x
      vy :  0,                      // velocity     - y
      ax :  0,                      // acceleration - x
      ay :  0,                      // acceleration - y

       w : size,                    // width
       h : size,                    // height

       s :  0,                      // score
       c : randomColor()            // color
    });

    // users.push( player );                                          // || (2.5)

    input();
  }



  // enable player input
  function input(){

    document.addEventListener( 'keydown', function ( e ) {

      e.preventDefault();
      e.stopPropagation();

      var keyCode = e.which;

      if ( keyCode == 39 || keyCode == 68 ) player.ax =  1;
      if ( keyCode == 37 || keyCode == 65 ) player.ax = -1;
      if ( keyCode == 38 || keyCode == 87 ) player.ay = -1;
      if ( keyCode == 40 || keyCode == 83 ) player.ay =  1;
    });


    document.addEventListener( 'mousedown', function ( e ) {

      e.preventDefault();

      e.stopPropagation();

      document.addEventListener( 'mousemove', pressed );
    });


    function pressed ( e ) {

      var x = e.pageX,
          y = e.pageY;

      if ( x > player.x ) player.ax =  0.5;
      if ( x < player.x ) player.ax = -0.5;
      if ( y < player.y ) player.ay = -0.5;
      if ( y > player.y ) player.ay =  0.5;
    }



    document.addEventListener( 'mouseup', function ( e ) {

      player.ax = player.ay = 0;

      document.removeEventListener( 'mousemove', pressed );
    });

    document.addEventListener( 'keyup', function ( e ) { player.ax = player.ay = 0; });
  }


  // --------------------------------------------------- //

  // start the game | resets properties
  function start(){

    pg.loop( render );                                             // || (3)
    // requestAnimationFrame( render );
  }


  // updates & draws users
  function render ( dt ) {

    update();

    draw();

    // requestAnimationFrame( render );
  }


    // calculates values for the models
    function update(){

      move();

      collision();
    }



    function move(){

      // velocity
      player.vx += player.ax;
      player.vy += player.ay;

      var speed    = Math.sqrt( player.vx * player.vx + player.vy * player.vy ),
          newSpeed = Math.max( 0, speed - friction ),
          modifier = newSpeed / speed || 0;

      player.vx *= modifier;
      player.vy *= modifier;


      // position
      player.x += player.vx;
      player.y += player.vy;

      // restriction

      if ( player.x <=                 0 ) { player.x = 0;                 bounce( 'x',  0.5 ); }
      if ( player.x >= width  - player.w ) { player.x = width - player.w;  bounce( 'x', -0.5 ); }

      if ( player.y <=                 0 ) { player.y = 0;                 bounce( 'y',  0.5 ); }
      if ( player.y >= height - player.h ) { player.y = height - player.h; bounce( 'y', -0.5 ); }
    }


    function bounce ( dir, step ) {

      // player[ 'a' + dir ] = step;

      // setTimeout(function(){

      //   player[ 'a' + dir ] = 0;

      // }, 200 );
    }


    // check collision -> scores
    function collision(){

      var cookies = pg.sync.cookies;                                 // || (4)

      var centerX = player.x + player.w/2,
          centerY = player.y + player.h/2,

          curr;

      for ( var i = 0, l = cookies.length; i < l; i++ ) {

        curr = cookies[i];

        var distX    = ( curr.x - centerX ) * ( curr.x - centerX ),
            distY    = ( curr.y - centerY ) * ( curr.y - centerY ),

            distance = Math.sqrt( distX + distY );

        if ( distance > (player.w/2 + curr.r/2) ) continue;

        cookies.splice( i , 1 );
        player.s++;
        random();
      }
    }


  // --------------------------------------------------- //

    // paints users
    function draw(){

      ctx.clearRect( 0, 0, width, height );

      var cookies = pg.sync.cookies;                                 // (5)

      var curr;



      // draw cookies
      ctx.fillStyle = 'red';

      for ( var i = 0, l = cookies.length; i < l; i++ ) {

        curr = cookies[i];

        ctx.beginPath();
        ctx.arc( curr.x, curr.y, curr.r, 0, Math.PI * 2, true );
        ctx.closePath();
        ctx.fill();
      }


      // draw users
      for ( i = 0, l = users.length; i < l; i++ ) {

        curr = users[i];

        ctx.fillStyle = curr.c;
        ctx.fillRect( curr.x, curr.y, curr.w, curr.h );

        ctx.fillStyle = '#000';
        ctx.fillText( curr.s, curr.x + curr.w/2 - 7,
                              curr.y + curr.h/2 + 7 );
      }
    }



  // --------------------------------------------------- //


  function random ( timing ) {

    var posX  = Math.random() * width,
        posY  = Math.random() * height;


    if ( !pg.sync.cookies ) pg.sync.cookies = [];                      // || (6)

    pg.sync.cookies.push({ x: posX, y: posY, r: radius });                        // || (7)
  }


  // --------------------------------------------------- //

  /**
   *  Helper
   */

  function extend ( target ) {

    var source, key;

    for ( var i = 1, length = arguments.length; i < length; i++ ) {

      source = arguments[i];

      for ( key in source ) if ( source.hasOwnProperty(key) ) target[key] = source[key];
    }

    return target;
  }

  function randomColor(){

    return [ 'rgb(', Math.random() * 255 |0, ',' ,
                     Math.random() * 255 |0, ',' ,
                     Math.random() * 255 |0, ')' ].join('');
  }

  // --------------------------------------------------- //

  return { init: init };

})();
