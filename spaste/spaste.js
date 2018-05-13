// ==UserScript==
// @name         SPaste Kill Inline CSS
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes the retarded inline CSS.
// @author       CrunchyHotDogs
// @match        http://www.spaste.com/p/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/spaste/spaste.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/spaste/spaste.js
// ==/UserScript==

(function() {
    'use strict';
	var inputs = document.getElementsByTagName('a');

	for(var i = 0; i < inputs.length; i++) {
		inputs[i].style.removeProperty('color');
	}
})();
