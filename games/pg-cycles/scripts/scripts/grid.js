

var Grid = (function(){

    function init(){

        while ( FIELD_WIDTH%ELEMENT_SIZE !== 0 ) FIELD_WIDTH--;
        while ( FIELD_HEIGHT%ELEMENT_SIZE !== 0 ) FIELD_HEIGHT--;

        var numColumns  = FIELD_WIDTH/ELEMENT_SIZE,
            numRows     = FIELD_HEIGHT/ELEMENT_SIZE;

        // additional pixel for grid border
        FIELD_WIDTH++; FIELD_HEIGHT++;

        var columns = new Array( numColumns ),
            rows    = new Array( numRows );


        // filling grid with new fields
        while ( --numRows      ) rows[numRows]       = 0;
        while ( --numColumns   ) columns[numColumns] = 0;


        var cvs = document.createElement('canvas'),
            ctx = cvs.getContext('2d');

        // should be the same size as for intercal calculcations...
        cvs.width   = FIELD_WIDTH;
        cvs.height  = FIELD_HEIGHT;

        // drawGrid( ctx );

        document.body.appendChild( cvs );

// http://gamedev.stackexchange.com/questions/14770/is-there-a-simple-way-to-do-true-isometric-projection-with-an-html5-canvas#14775
// http://stackoverflow.com/questions/6668834/true-isometric-projection-with-html5-canvas
//
// http://gamedev.stackexchange.com/questions/48423/basic-isometric-projection-in-javascript

// projections matrix.....
        // using then a schräge 2projekction, for depgth..... later on

        // - each entryes is 0, just as someonte enters -> receives the number of the player,
        // and will therefore be tainted !
    }


    // fill with tiles - probaly better....

    // element_size -> tile.size ||




    function drawGrid ( ctx ) {

        var yM = FIELD_HEIGHT,
            xM = FIELD_WIDTH,
            y, x;

        for ( y = 0; y < yM; y += ELEMENT_SIZE ) {

            ctx.moveTo( y, 0 );
            ctx.lineTo( y, xM );

            for ( x = 0; x < xM; x += ELEMENT_SIZE ) {

                ctx.moveTo( 0,  x );
                ctx.lineTo( yM, x );
            }
        }

        ctx.stroke();
    }




    function update(){


    }



    function draw(){



    }

    return {

        init: init,
        update: update,
        draw: draw
    };

})();





    var Display = (function(){

        var Display;



        return  {


        };

    })();



// scaling canvas


// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'white';
// ctx.font = 'bold 40px Monospace';
// ctx.textBaseline = 'top';
// ctx.fillText('hello', 10, 10);

// function resize() {
//  // Our canvas must cover full height of screen
//  // regardless of the resolution
//  var height = window.innerHeight;

//  // So we need to calculate the proper scaled width
//  // that should work well with every resolution
//  var ratio = canvas.width/canvas.height;
//  var width = height * ratio;

//  canvas.style.width = width+'px';
//  canvas.style.height = height+'px';
// }

// window.addEventListener('load', resize, false);
// window.addEventListener('resize', resize, false);
