// ==UserScript==
// @name         RMZ 1080p
// @namespace    http://tampermonkey.net/
// @version      1.376
// @description  Hides all releases from rmz.cr that are not 1080p.
// @author       CrunchyHotDogs
// @match        *://rmz.cr/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/rapidmoviez/1080p.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/rapidmoviez/1080p.js
// ==/UserScript==

(function() {
    'use strict';
    function save1080p() {
        var ep = $('#episodes li');
		ep.each(function(i, div) {
            var li = $(this);
			var item = li.find('a').text();
            console.log(i + search(item,'1080p'));
			if (search(item,'1080p') && search(item,'HEVC')) {
                //li.hide();
            }
        });
    }

	function search(text, searchTerm) {
		if (text.indexOf(searchTerm) >= 0) {
			return true;
		}
		else {
			return false;
		}
	}
    save1080p();
})();
