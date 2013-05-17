

var Game = (function(){


    function init(){


        requestAnimationFrame( render );
    }






    function render(){

        //


        // update
        // draw
    }




    return {  init: init };

})();





(function(){









  /**
   *  Rendering
   */

  // function loop(){

  //  update();
  //  draw();

  //  if ( !end ) loop();
  // }


  // var elements = [];


// update/rendinger
//
// 1.) update/rendering allways all elements, iterate over every entry || call if 'visible' (not pool)
// 2.) just update the changed elements... || espically in network - as old data remain the same...
//  || game dev handling - just assume that he will access the changed data somehow !





})();

// var forAll = function ( collection, method, delta ) {

//         var l = collection.length;

//         do {

//      el = collection[l];

//      if ( el && el.visible ) { // undefined.()

//        el[method]( delta );
//      }

//         } while ( l-- );
//  };


//      forAll( this.playerList, 'update', delta );

//      forAll( this.obstaclePool.list, 'update', delta );

//      this.background.update( delta );
//      this.grid.update( delta );


//      this.screen.clear();

//      this.background.draw();

//      forAll( this.obstaclePool.list, 'draw' );

//      forAll( this.playerList, 'draw' );

//      this.statusManager.draw();

//      this.screen.ctx.restore();


//             if ( this.runningGame ) {

//                 requestAnimationFrame( loop.bind(this) );

//             } else {

//                 this.screen.clear();
//             }






  var Game = (function(){



    function update(){


    }

    return {

      update: update

    };

  })();
