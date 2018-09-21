// ==UserScript==
// @name         DC Desire2Learn Increase Quiz Size
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a fullscreen button on the quiz page.
// @author       CrunchyHotDogs
// @match        https://durhamcollege.desire2learn.com/d2l/le/content/123643/viewContent*
// @grant        GM_addStyle
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/quiz_window/quiz_window.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/quiz_window/quiz_window.js
// ==/UserScript==


GM_addStyle('.kc_fullscreenImage{width:30px;height:30px;cursor:pointer;}.kc_iFrame{height:90% !important;position:absolute;top:20px;background:#fff;width:80%;left:10%;padding:10px;border-radius:25px;border:4px solid #000}');

// Styles to remove stupid document viewing error.
GM_addStyle('#outerContainer{ position:initial; }');


(function() {
    function addFullsceenButton(callback) {
		var image = 'https://img.freepik.com/free-icon/switch-to-full-screen-button_318-76446.jpg';
		var fullscreenDiv = $('.d2l-page-header');
		//var fullscreenDiv = $('.d2l-quiz-heading');
		fullscreenDiv.append('<img id="kc_fullScreenButton" class="kc_fullscreenImage" src="' + image + '" />');
		callback();
	}
	//Callback function to add click listeners.
	function onClickFullscreen() {

		//Opens the popup.
		$('#kc_fullScreenButton').click(function() {
		console.log('here');
			var containerDiv = $('#QuizContentViewPlaceHolder');
			var iFrame = containerDiv.children().eq(1);
			if (iFrame.hasClass('kc_iFrame')) {
				iFrame.removeClass('kc_iFrame');
			}
			else {
				iFrame.addClass('kc_iFrame');
			}
			return false;
		});

	}
    addFullsceenButton(onClickFullscreen);
})();
