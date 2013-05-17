


// ============================= //



var Person = function(){

    this.id = 0;
};


Person.prototype.move = function(){


};


Person.prototype.draw = function(){

};


var Player = function(){

    // defines the fields -> as the fields will handle the drawing, not drawing itself but just paint
    // the rects !

    // navigate - define position in the array !

    // this.pos = 11;

    this.x  = 1;
    this.y  = 1;

    this.vx = 0;    // -1, 0, +1
    this.vy = 0;    // -1, 0, +1
};

Player.prototype = Object.create( Person.prototype );

// Player.prototype.move = function(){

    // array....

    // per steps - moves on fields forward

// };

// queue the inputs - as handling edg curves etc.




// ============================= //





Grid.init();





// where should be the check ? in the the game, fiel, or the player ?

// keyinput + rendering loop


// player who are destroy removes all his fields... opens the space for new ones !

// defines if one has lost and therefore turns


// one game
// one grid
// multiple fields
// multiple player      || one you // new




// general: pixel art...
// http://rufus89.hubpages.com/hub/Isometric-Pixel-Art



// in the input module ->
// add touch detection, test with peak then !


//





// ::demos::

// pg-volley        - a blobby volley clone for (2 Players)
// pg-cycle         - a light cycle racing clone (2-4 Players)




// bloby volley as a simple  2 player game... || in addition to fleur etc.

// field
// Ball
// player
// net

// realtime communication - here also ball movement, which is determine by the NPC world....



// codename: .... - ... //
//
//
//
//



// var Volley = function(){


// };

// var Blobby = function(){



// };


// var
