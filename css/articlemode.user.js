// ==UserScript==
// @name         Articlemode for Dynalist
// @namespace    https://wineroses.github.io/
// @version      1
// @description  Dynalistのアーティクルビューの行間を狭める
// @author       wineroses
// @match        https://dynalist.io/d/*
// @grant        none
// ==/UserScript==

css = ".is-compactDensity.is-article-view .Node-self, .is-cozyDensity.is-article-view .Node-self, .is-comfortableDensity.is-article-view .Node-self{padding-top:0px;padding-bottom:3px;}";
GM_addStyle(css);
