// ==UserScript==
// @name         MB Picard Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds my own link to open the album in MusicBrainz Picard.
// @author       Artemis Lunanite
// @match        https://musicbrainz.org/release/*
// @grant        GM_addStyle
// @grant		 GM_getResourceText
// @resource	 html https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/musicbrainz/mb_picard_buttons/template.html
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/musicbrainz/mb_picard_buttons/mb_picard_buttons.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/musicbrainz/mb_picard_buttons/mb_picard_buttons.js
// ==/UserScript==


GM_addStyle('.kc_button {width: 45px;height: 15px;}');

(function() {
    function addButtons(callback) {
		var mainDiv = $('.releaseheader');
		var containerElement = mainDiv.children('h1');
		containerElement.append(GM_getResourceText(('html')));
		//callback();
	}
	//Callback function to add click listeners.
	function addOnClickListener() {
		//Opens the popup.
		$('#kc_button').click(function() {
			if ($('#kc_popup').hasClass('hide')) {
				$('#kc_popup').removeClass('hide');
			}
			else {
				$('#kc_popup').addClass('hide');
			}
			return false;
		});	
		
		//Closes the popup.
		$('body').click(function(evt){    
			if(evt.target.id == "kc_popup") {
				return;
			}
			//For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
			if($(evt.target).closest('#kc_popup').length) {
				return;             
			}
			//Do processing of click event here for every element except with id menu_content
			if ($('#kc_popup').hasClass('hide')) {}
			else {
				$('#kc_popup').addClass('hide');
			}
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				if ($('#kc_popup').hasClass('hide')) {}
				else {
					$('#kc_popup').addClass('hide');
				}
				return false;
			}
		});
	}
    addButtons(addOnClickListener);
})();
