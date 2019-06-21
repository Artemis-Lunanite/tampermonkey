// ==UserScript==
// @name         IBB Album Download
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Downloads a whole IBB album with one click.
// @author       You
// @match        https://ibb.co/album/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.0/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.0.2/jszip-utils.min.js
// @require      https://cdn.jsdelivr.net/npm/file-saver@2.0.1/dist/FileSaver.min.js
// @downloadUrl  https://raw.githubusercontent.com/Artemis-Lunarly/tampermonkey/master/ibb/album_download.js
// @updateUrl	 https://raw.githubusercontent.com/Artemis-Lunarly/tampermonkey/master/ibb/album_download.js
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var zip = new JSZip();

    function loadImageIntoZip(url, title) {
        $.ajaxSetup({async: false});
        $.get(url, function(imagePage) {
            var imageUrl = $(imagePage).find('#image-viewer-container').children().attr('src');
            if (imageUrl.indexOf(".jpg") >= 0) title = title + '.jpg';
            if (imageUrl.indexOf(".png") >= 0) title = title + '.png';
            zip.file(title, urlToPromise(imageUrl), {binary:true});
        }, 'html');

    }

    function gatherImages() {
        var listOfImages = $('[data-content="image-link"]');
        var albumName = $('[data-text="album-name"]').first().text();

        var x = listOfImages.length;
        listOfImages.each(function (i, value) {
            var url = $(value).attr('href');
            var title = $(value).text();
            loadImageIntoZip(url, title);
            if (i+1 === x) saveZip(albumName);
        });
    }

    function saveZip(zipTitle) {
        $.ajaxSetup({async: true});
        zip.generateAsync({type:"blob"}).then(function callback(blob) {
            saveAs(blob, zipTitle + '.zip');
        });
    }

    function urlToPromise(url) {
        return new Promise(function(resolve, reject) {
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }


    function buildButton(callback) {
        var html = '<li><a id="kc_downloadAlbum">Download Album</a></li>';
        $('.content-tabs').append(html);
        callback();
    }
    function addOnClick() {
        $('#kc_downloadAlbum').click(function() {
            gatherImages();
        });
    }

    buildButton(addOnClick);
})();
