document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-7b3b9889' );
});
window.addEventListener( 'load', function() {
	UAGBTabs.init( '.uagb-block-83562651' );
	UAGBTabs.anchorTabId( '.uagb-block-83562651' );
});
window.addEventListener( 'hashchange', function() {
	UAGBTabs.anchorTabId( '.uagb-block-83562651' );
}, false );
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-38955e24' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-2394611d' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-e358c731' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-e2f14d28' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-ab76f1f1' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-b794a15b' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-c04c65fd' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-04030644' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-77ae29be' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-0ea11c23' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-c526fe29' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-25c1b2c6' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-a9fc189a' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-93032301' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-e370ceb8' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-877c2109' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-a5c4debf' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-e6d8c583' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-32a4eac9' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-06824398' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-575bd8e6' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-d0ed08c0' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-36a35265' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-415c58e0' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-ecb55d5d' );
});
	window.addEventListener( 'DOMContentLoaded', function() {
		UAGBModal.init( '.uagb-block-d6c411ee' );
	});
var ssLinksParent = document.querySelector( '.uagb-block-db9a8a55' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
 });