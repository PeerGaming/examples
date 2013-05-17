

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



// lobby specific

// cross browser event
window.transitionEnd = (function(){

	var prefix = {

			'WebkitTransition'	: 'webkitTransitionEnd',
			'MozTransition'		: 'transitionend',
			'MSTransition'		: 'msTransitionEnd',
			'OTransition'		: 'oTransitionEnd',
			'transition'		: 'transitionEnd'
		},

		temp = document.createElement('div'),
		keys = Object.keys( prefix ),

		i, l; // iterator

	for ( i = 0, l = keys.length; i < l; i++ ) {

		if ( temp.style[ keys[i] ] !== undefined ) return prefix[ keys[i] ];
	}

	console.log('TransitionEnd - is not supported');

})();
