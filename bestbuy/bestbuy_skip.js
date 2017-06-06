// ==UserScript==
// @name         BestBuy Sweepstake Skip
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Once you enter your BestBuy codes on the receipt skip the rest of the survey.
// @author       CrunchyHotDogs
// @match        https://survey.confirmit.com/wix/0/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/bestbuy/bestbuy_skip.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/bestbuy/bestbuy_skip.js
// ==/UserScript==

(function() {
    'use strict';
    /*VARIABLES*/
    var personalDetails = false;
    sessionStorage.starting = (sessionStorage.getItem('starting') === null) ? 'N' : 'Y';

    function createSessionVar() {
        if (personalDetails) {
            alert('None of the information you enter will be stored after your session.');
            sessionStorage.firstName = prompt("Enter your first name.");
            sessionStorage.lastName = prompt("Enter your last name.");
            sessionStorage.address = prompt("Enter your address.");
            sessionStorage.appartment = prompt("Enter your appartment number (if applicable).");
            sessionStorage.city = prompt("Enter your city.");
            sessionStorage.province = prompt("Enter your province.");
            sessionStorage.postal = prompt("Enter your postal code (X0X-0X0).");
            sessionStorage.phone = prompt("Enter your phone number (000-000-0000).");
            sessionStorage.email = prompt("Enter your email.");
        }
        sessionStorage.groupA = prompt("Enter the Group A number.");
        sessionStorage.groupB = prompt("Enter the Group B number.");
        sessionStorage.groupC = prompt("Enter the Group C number.");
        sessionStorage.rating = '5';
        sessionStorage.pageOne = 'N';
        sessionStorage.pageTwo = 'N';
        sessionStorage.pageThree = 'N';
        sessionStorage.pageFour = 'N';
        sessionStorage.pageFive = 'N';
        sessionStorage.pageSix = 'N';
        sessionStorage.pageSeven = 'N';
        sessionStorage.pageEight = 'N';
        sessionStorage.pageNine = 'N';
        sessionStorage.pageTen = 'N';
        sessionStorage.pageEleven = 'N';
        sessionStorage.pageTwelve = 'N';
        sessionStorage.pageThirteen = 'N';
        sessionStorage.pageFourteen = 'N';
    }

    function goForwardPageOne() {
        sessionStorage.pageOne = 'Y';
        var forwardBut = document.getElementById('forwardbutton');
        forwardBut.click();
    }
    function goForwardPageTwo() {
        sessionStorage.pageTwo = 'Y';
        var englishRadio = document.getElementById('l_9');
        var forwardBut = document.getElementById('forwardbutton');
        englishRadio.checked = true;
        forwardBut.click();
    }
    function goForwardPageThree() {
        sessionStorage.pageThree = 'Y';
        var groupAText = document.getElementById('RTcode_1');
        var groupBText = document.getElementById('RTcode_2');
        var groupCText = document.getElementById('RTcode_3');
        var forwardBut = document.getElementById('forwardbutton');
        groupAText.value = sessionStorage.groupA;
        groupBText.value = sessionStorage.groupB;
        groupCText.value = sessionStorage.groupC;
        forwardBut.click();
    }
    function goForwardPageFour() {
        sessionStorage.pageFour = 'Y';
        var rateRecommend = document.querySelector("[data-answer='LTR_1'][data-value='" + sessionStorage.rating + "']");
        var forwardBut = document.getElementById('forwardbutton');
        rateRecommend.click();
        forwardBut.click();
    }
    function goForwardPageFive() {
        sessionStorage.pageFive = 'Y';
        var movieRadio = document.getElementById('Category_12');
        var forwardBut = document.getElementById('forwardbutton');
        movieRadio.checked = true;
        forwardBut.click();
    }
    function goForwardPageSix() {
        sessionStorage.pageSix = 'Y';
        var bluRayCheck = document.getElementById('Movies_2');
        var bluRay3DCheck = document.getElementById('Movies_3');
        var forwardBut = document.getElementById('forwardbutton');
        bluRayCheck.checked = true;
        bluRay3DCheck.checked = true;
        forwardBut.click();
    }
    function goForwardPageSeven() {
        sessionStorage.pageSeven = 'Y';
        var rateAvailabilty = document.querySelector("[data-answer='Assoc_Availability_1'][data-value='" + sessionStorage.rating + "']");
        var forwardBut = document.getElementById('forwardbutton');
        rateAvailabilty.click();
        forwardBut.click();
    }
    function goForwardPageEight() {
        sessionStorage.pageEight = 'Y';
        var noHelpRadio = document.getElementById('Assoc_Interaction_2');
        var forwardBut = document.getElementById('forwardbutton');
        noHelpRadio.checked = true;
        forwardBut.click();
    }
    function goForwardPageNine() {
        sessionStorage.pageNine = 'Y';
        var rateAppearance = document.querySelector("[data-answer='Attributes_appearance'][data-value='" + sessionStorage.rating + "']");
        var rateInStock = document.querySelector("[data-answer='Attributes_instock'][data-value='" + sessionStorage.rating + "']");
        var ratePrice = document.querySelector("[data-answer='Attributes_price'][data-value='" + sessionStorage.rating + "']");
        var rateFriendliness = document.querySelector("[data-answer='Attributes_friendliness'][data-value='" + sessionStorage.rating + "']");
        var rateDemos = document.querySelector("[data-answer='Attributes_demos'][data-value='" + sessionStorage.rating + "']");
        var rateEase = document.querySelector("[data-answer='Attributes_ease'][data-value='" + sessionStorage.rating + "']");
        var rateVariety = document.querySelector("[data-answer='Attributes_variety'][data-value='" + sessionStorage.rating + "']");
        var forwardBut = document.getElementById('forwardbutton');
        rateAppearance.click();
        rateInStock.click();
        ratePrice.click();
        rateFriendliness.click();
        rateDemos.click();
        rateEase.click();
        rateVariety.click();
        forwardBut.click();
    }
    function goForwardPageTen() {
        sessionStorage.pageTen = 'Y';
        var rateSatisfaction = document.querySelector("[data-answer='SAT_1'][data-value='" + sessionStorage.rating + "']");
        var forwardBut = document.getElementById('forwardbutton');
        rateSatisfaction.click();
        forwardBut.click();
    }
    function goForwardPageEleven() {
        sessionStorage.pageEleven = 'Y';
        var noContactRadio = document.getElementById('CB_Screener_2');
        var forwardBut = document.getElementById('forwardbutton');
        noContactRadio.checked = true;
        forwardBut.click();
    }
    function goForwardPageTwelve() {
        sessionStorage.pageTwelve = 'Y';
        var rewardZoneRadio = document.getElementById('Demo_RewardZoneGamesClub_4');
        var genderRadio = document.getElementById('Demo_Gender_3');
        var ageSelect = document.getElementById('Demo_Age_YearSelect');
        var forwardBut = document.getElementById('forwardbutton');
        rewardZoneRadio.checked = true;
        genderRadio.checked = true;
        ageSelect.value = '9999';
        forwardBut.click();
    }
    function goForwardPageThirteen() {
        sessionStorage.pageThirteen = 'Y';
        var forwardBut = document.getElementById('forwardbutton');
        forwardBut.click();
    }
    function goForwardPageFourteen() {
        sessionStorage.pageFourteen = 'Y';
        var sweepstakeRadio = document.getElementById('Sweeps_Participant_1_label');
        var firstText = document.getElementById('comSWP2_firstname');
        var lastText = document.getElementById('comSWP2_lastname');
        var addressText = document.getElementById('comSWP2_add1');
        var apartmentText = document.getElementById('comSWP2_add2');
        var cityText = document.getElementById('comSWP2_city');
        var provinceText = document.getElementById('comSWP2_state');
        var postalText = document.getElementById('comSWP2_zip');
        var phoneText = document.getElementById('comSWP2_phone');
        var emailText = document.getElementById('comSWP2_email');
        var forwardBut = document.getElementById('forwardbutton');
        sweepstakeRadio.click();
        firstText.text = sessionStorage.first;
        lastText.text = sessionStorage.last;
        addressText.text = sessionStorage.address;
        apartmentText.text = sessionStorage.appartment;
        cityText.text = sessionStorage.city;
        provinceText.text = sessionStorage.province;
        postalText.text = sessionStorage.postal;
        phoneText.text = sessionStorage.phone;
        emailText.text = sessionStorage.email;
        forwardBut.click();
    }

    $(document).ready(function() {
        if (sessionStorage.starting === 'N') {
            createSessionVar();
        }
        if (sessionStorage.pageOne === 'N') {
            goForwardPageOne();
        } else if (sessionStorage.pageTwo === 'N') {
            goForwardPageTwo();
        }
        else if (sessionStorage.pageThree === 'N') {
            goForwardPageThree();
        }
        else if (sessionStorage.pageFour === 'N') {
            goForwardPageFour();
        }
        else if (sessionStorage.pageFive === 'N') {
            goForwardPageFive();
        }
        else if (sessionStorage.pageSix === 'N') {
            goForwardPageSix();
        }
        else if (sessionStorage.pageSeven === 'N') {
            goForwardPageSeven();
        }
        else if (sessionStorage.pageEight === 'N') {
            goForwardPageEight();
        }
        else if (sessionStorage.pageNine === 'N') {
            goForwardPageNine();
        }
        else if (sessionStorage.pageTen === 'N') {
            goForwardPageTen();
        }
        else if (sessionStorage.pageEleven === 'N') {
            goForwardPageEleven();
        }
        else if (sessionStorage.pageTwelve === 'N') {
            goForwardPageTwelve();
        }
        else if (sessionStorage.pageThirteen === 'N') {
            goForwardPageThirteen();
        }
        else if (sessionStorage.pageFourteen === 'N') {
            goForwardPageFourteen();
        }
    });
})();
