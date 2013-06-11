// config
// pg.config({

//   socketConfig: { server: 'ws://peergaming.dev:61125' }
// });



// default route
var route = '/test/42/';// + ( window.location.search.substr(1) ||42);

pg.routes( route );


// handler
pg.game( function ( game ) {

  game.on( 'enter', function ( user ) {

    console.log('[JOINED] : ' + user.id );

    game.start( Game.init );

  });

  game.on( 'leave', function ( peer ) {

    console.log('[LEFT] : ' + peer.id );
  });

});

// message
pg.player.on('message', function ( msg ) {

  console.log('[MESSAGE] : ' + JSON.parse(msg).data.msg );
});




setTimeout(function(){

  // Game.init
  pg.login( 'RealProGamer' );

}, 1000 );
