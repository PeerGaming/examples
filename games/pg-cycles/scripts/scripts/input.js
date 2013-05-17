
  /**
   *  Logic - Action
   */

  var commands = {

    left: function(){

    },

    top: function(){

    },

    right: function(){


    },

    bottom: function(){

    }
  };

  /**
   *  Input
   */

  var keyCodes = {

      // arrow - keys
      37: 'left',
      38: 'top',
      39: 'right',
      40: 'bottom',

      // WASD
      65: 'left',
      87: 'top',
      68: 'right',
      83: 'bottom'
    },

    actionQueue = [];


  document.addEventListener('keyup', function ( e ) {

    var action = keyCodes[ e.which ];

    actionQueue.push( commands[ action ] );
  });
