// ==UserScript==
// @name         Goodreads Scroll Fix
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  When you edit a record in your Goodreads shelf, usually it scrolls back to the top of the page. This makes it so the page stays in the same place.
// @author       CrunchyHotDogs
// @match        https://www.goodreads.com/review/list/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/goodreads/scroll_fix.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/goodreads/scroll_fix.js
// ==/UserScript==

(function() {
    'use strict';
    function fixScroll() {
        var mainTable = document.getElementById('booksBody');
        jQuery(mainTable).children('tr').each(function() {
            var record = jQuery(this);
            var recordId = '#' + this.id;
			jQuery(record).children('td.date_started,td.date_read').each(function() {
                jQuery(this).click(function() {
                    console.log(recordId);
                    jQuery('html, body').animate({
                        scrollTop: jQuery(recordId).offset().top - 100
                    }, 10);
                });
            });
        });
    }
    fixScroll();
})();
