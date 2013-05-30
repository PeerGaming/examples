// server address
// pg.config({

//   socketConfig: { server: 'ws://peergaming.dev:61125' }
// });


// define channel handler
pg.channel( function ( channel ) {

  channel.on( 'enter', function ( user ) {

    currentlist.innerHTML += peerTemplate( user.id, user.account.name );
  });


  channel.on( 'leave', function ( peer ) {

    var el = document.getElementById( peer.id );

    el.parentNode.removeChild(el);
  });

});


// chat
pg.player.on( 'message', function ( msg ) {

  msg = JSON.parse( msg );

  var name = pg.peers[ msg.local ].account.name,

      text = msg.data.msg;

  showMessage( name, text );

});
