// ==UserScript==
// @name         tightrope AutoClicker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Autoclicks the "Next" buttons on tightrope
// @author       Ryan Schwartz
// @match        https://cloud.scorm.com/ScormEngineInterface/defaultui/player/*
// @grant        none
// ==/UserScript==


const elements = document.querySelectorAll('[aria-label="Close"]');

setInterval(function(){ elements[0].click() }, 400)
