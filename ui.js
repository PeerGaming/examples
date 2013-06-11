var win = window;

if ( !win.setImmediate ) {

  win.setImmediate = (function () {

    var callbacks = [];

    win.addEventListener( 'message', handle, true );

    function handle() { callbacks.shift()(); }

    return function ( fn ) {

      if ( typeof fn !== 'function' ) throw Error('Invalid Argument');

      callbacks.push( fn );

      win.postMessage( 'setImmediate', '*' );
    };

  })();
}

var transitionEnd = (function(){

  var prefix = {

      'WebkitTransition'  : 'webkitTransitionEnd',
      'MozTransition'     : 'transitionend',
      'MSTransition'      : 'msTransitionEnd',
      'OTransition'       : 'oTransitionEnd',
      'transition'        : 'transitionEnd'
    },

    temp = document.createElement('div'),
    keys = Object.keys( prefix ),

    i, l; // iterator

  for ( i = 0, l = keys.length; i < l; i++ ) {

    if ( temp.style[ keys[i] ] !== undefined ) return prefix[ keys[i] ];
  }

  console.log('TransitionEnd - is not supported');

})();



(function(){


  var example = 'pg-catch', //

      modes   = document.getElementById('modes'),
      local   = document.getElementById('form-local'),
      remote  = document.getElementById('form-remote'),

      select  = ('ontouch' in window) ? 'touchstart' : 'click';

  // document.getElementById('form').dispatchEvent( new Event('submit') );

  local.addEventListener( 'submit', function ( e ) {

    e.preventDefault();
    e.stopPropagation();

    clear('local');
  });


  remote.addEventListener( 'submit', function ( e ) {

    e.preventDefault();
    e.stopPropagation();

    var channel = document.getElementById('channel-input');

    if ( !channel ) {

      // problems - firefox triggers on click, submit isn't accessible and won't be focused...

      document.getElementById('pre-remote').innerHTML ='\
        <label class="channel-label">Channel ID:</label>\
        <input class="channel-input" type="text" autofocus="true"\
         placeholder="..." id="channel-input"/>';

      return;
    }

    var value = channel.value;

    clear('remote', value );
  });



  function clear ( type, value ) {

    modes.classList.add('fade-out');

    modes.addEventListener( transitionEnd, function fade(){

      modes.removeEventListener( transitionEnd, fade );

      if ( type === 'remote' ) return insertGame();

      // local
      var time = Date.now();
      insertGame( time, 0 );
      insertGame( time, 1 );
    });
  }



  function insertGame ( time, no ) {

    var main = document.getElementById('main');

    main.innerHTML += '\
    <div class="js-iframe-wrap">\
      <iframe seamless height="0" width="0" frameborder="0" scrolling="no"\
       src="games/pg-catch/index.html?' + (time || '') + '"></iframe>\
    </div>';

    setImmediate(function(){

      var wrap = document.querySelectorAll('.js-iframe-wrap')[ no || 0 ].children[0];

      if ( !time ) {

        wrap.classList.add('frame-center');

        return setImmediate(function(){ wrap.classList.add('enlarge-height'); });
      }

      if ( no === 0 ) wrap.classList.add('frame-right');
      if ( no === 1 ) wrap.classList.add('frame-left');

      // enlarge also on the iframe !
      wrap.classList.add('enlarge-width');
    });
  }


})();








// zoom-effect: http://lea.verou.me/more-css-secrets/#lightbox



// #504E4E - header & footer


  // function close(){

  //   form.removeEventListener( transitionEnd, close );


  //   function remove(){  // else still possible to use keys (see FF) + layer above prevent click

  //     gateRight.removeEventListener( transitionEnd, close );

  //     header.parentNode.removeChild( header );
  //     intro.parentNode.removeChild( intro );
  //   }


  //   gateRight.addEventListener( transitionEnd, remove );

  //   gateLeft.classList.add('gate-opened');
  //   gateRight.classList.add('gate-opened');


  //   addHandler();
  // }

  // form.addEventListener( transitionEnd, close );
  // form.classList.add('fadeOut');

  // header.classList.add('fadeOut');

  // container.classList.add('resize-h80');
  // barTop.classList.add('bar-enabled');
  // barBottom.classList.add('bar-enabled');




    // one popup opens - asks for lokal multiplayer or multiple !
    // open 2 "split" - for lokal multiplayer || for exchange -

    // num: amount of players (can - be setup / default is 2 | just split in half !)

    // blocks as openen more than one popup with a click !

    // already setup the


// join -> provided via url request ! ( see question mark query ) - use timestamp !

// wiki setup  for simple QA + references


// check link + ' list size' // curssor fulfill
