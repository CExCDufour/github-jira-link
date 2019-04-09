// ==UserScript==
// @name         Jira Ticket link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a link to the jira ticket next to your PR title. You may need to refresh the page for it to appear
// @author       Chris Dufour
// @match        https://github.com/!!!!/*/pull/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

// HOW TO USE: 
// Add as new script to tapermonkey
// Replace "!!!!" with your org's jira id
(function() {
    'use strict';
    let re = /([a-zA-Z])+[-" "](\d)+/g;
    let tagHeader = $('.gh-header-title');
    let tagTitle = tagHeader.find('.js-issue-title');

    tagTitle.each((tag) =>{
        for(let tag of tagTitle[0].innerText.match(re)){
            tag = tag.replace(/\s/g, '-');
            var a = '<a href="https://!!!!.atlassian.net/browse/' + tag +'" target="_blank">' + tag + '</a>&nbsp';
            tagHeader.append(a);
        }
    });
})();