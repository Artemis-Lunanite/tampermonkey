// ==UserScript==
// @name         DC Desire2Learn Add Misc Buttons
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds menu in Desire2Learn that contains useful links.
// @author       CrunchyHotDogs
// @match        https://durhamcollege.desire2learn.com/*
// @grant        GM_addStyle
// @grant		 GM_getResourceText
// @resource	 html https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/misc_buttons/template.html
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/misc_buttons/misc_buttons.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/misc_buttons/misc_buttons.js
// ==/UserScript==


GM_addStyle('body{background:#a0a0a0;padding:45px 45px 45px 300px;height:500px}.kc_header_container{display:inline-block;position:relative;height:100%;margin:0 15px}.kc_header_button{align-items:center;border:none;color:#565a5c;cursor:pointer;display:flex;font-family:inherit;font-size:.7rem;height:90px;margin:0;overflow:visible;padding:0;position:relative;background-color:#fff}.kc_header_button .kc_hover_indicator,.kc_hover{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.kc_header_button:hover .kc_hover_indicator{display:block}.kc_header_button:hover .kc_no_hover_image{display:none}.kc_header_button:hover .kc_hover_image{display:inline-block}.kc_header_button .kc_hover_image{display:none}.kc_header_button .kc_hover_indicator{position:absolute;display:none;top:0;height:4px;width:30px;background-color:#005694}.kc_hover,.kc_triangle{top:-15px;position:absolute}.kc_header_button img{width:30px;height:30px}.kc_hover{width:40px;height:10px;background:#005694}.kc_triangle{width:0;height:0;left:75px;background-color:transparent;border-bottom:15px solid #e6e6e6;border-left:15px solid transparent;border-right:15px solid transparent}.kc_popup_container{position:absolute;left:-75px;width:190px;padding-top:5px;background-color:#f3f3f3;box-sizing:border-box;color:#565a5c;z-index:1000;border:3px solid #e6e6e6;border-radius:5px;text-align:center}.kc_popup_container .kc_menu_button{display:inline-block;margin:5px;padding:5px;border-radius:5px;width:30px;height:30px;}.kc_popup_container .kc_menu_button:hover{background-color:#d8e5f2}.hide{display:none!important}');

(function() {
    function addButtons(callback) {
		var mainDiv = $('.d2l-navigation-s-header-actions');
		var lastDiv = mainDiv.children().last();
		lastDiv.before(GM_getResourceText(('html')));
		callback();
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
	}
    addButtons(addOnClickListener);
})();
