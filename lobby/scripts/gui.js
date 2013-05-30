function el ( id ) { return document.getElementById(id); }

// elements

var intro			= el('intro'),

	form				= el('form'),
	userName		= el('user-name'),
	profileName = el('profile-name'),
	list				= el('friendlist'),

	header			= el('header'),

	buttonOpen	= el('button-open'),
	barTop			= el('bar-top'),
	barBottom		= el('bar-bottom'),
	container		= el('container'),
	gateLeft		= el('gate-left'),
	gateRight		= el('gate-right'),
	panelLobby	= el('panel-lobby'),
	panelInfo		= el('panel-info'),
	currentList	= el('currentlist'),

	chatform		= el('chatform'),
	chatname		= el('chatname'),
	chatinput		= el('chatinput'),
	chatframe		= el('chatframe');




form.addEventListener('submit', function ( e ) {

	e.preventDefault();
	e.stopPropagation();

	var name = userName.value;

	login( name );
});


var peerTemplate = function ( id, name ) {

	var tmpl = '<li class="peer" data-id="' + id + '" id="'+ id +'">\
		\
		<div class="peer-menu">\
			<div class="part-add"></div>\
			<div class="part-invite"></div>\
			<div class="part-msg"></div>\
			<div class="mask"></div>\
			<div class="peer-holder"></div>\
		</div>\
		\
		<div class="peer-name">' + name + '</div>\
	</li>';

	return tmpl;
};


function login ( name ) {

	init( name );

	pg.login( name );
}



function init ( name ) {

	profileName.textContent = name;
	chatname.textContent = name + ':';

	function close(){

		form.removeEventListener( transitionEnd, close );


		function remove(){	// else still possible to use keys (see FF) + layer above prevent click

			gateRight.removeEventListener( transitionEnd, close );

			header.parentNode.removeChild( header );
			intro.parentNode.removeChild( intro );
		}


		gateRight.addEventListener( transitionEnd, remove );

		gateLeft.classList.add('gate-opened');
		gateRight.classList.add('gate-opened');


		addHandler();
	}

	form.addEventListener( transitionEnd, close );
	form.classList.add('fadeOut');

	header.classList.add('fadeOut');

	container.classList.add('resize-h80');
	barTop.classList.add('bar-enabled');
	barBottom.classList.add('bar-enabled');

	var childs = container.children,
		length = childs.length;

	while ( length-- ) childs[length].classList.add('resize-h80');
}




function addHandler(){

	addInfoHandler();

	addChatHandler();
}


function addInfoHandler(){

	currentList.addEventListener('click', function ( e ) {

		var trg = e.target.classList;

		// show menu
		if ( trg.contains('peer') || trg.contains('peer-name') ) {

			trg = ( e.target.children[1] || e.target ).previousElementSibling;

			trg.classList.toggle('active');
			return;
		}

		// menu
		if ( trg.contains('part-add') || trg.contains('part-invite') || trg.contains('part-msg') ) {

			var action = trg[0].split('-')[1],

				id = e.target.parentNode.parentNode.dataset.id;

			console.log( id, action );

			return;
		}
	});

}

// chatbar would perhaps better be a form - sending messages etc.

function addChatHandler(){

	chatform.addEventListener( 'submit', function ( e ) {

		e.preventDefault();
		e.stopPropagation();

		if ( chatinput.value ) {

			sendChat( chatinput.value );

			chatinput.value = '';
		}

	});

}

// error occurs on sending the message etc.

function sendChat ( msg ) {

	var player = pg.player;

	player.send( msg );

	showMessage( player.account.name, msg );
}


function showMessage ( name, msg ) {

	chatframe.innerHTML += [ '<p class="user-text">', name, ': ', msg, '</p>' ].join('');
}

