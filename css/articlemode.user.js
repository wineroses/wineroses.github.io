// ==UserScript==
// @name         Articlmode for Dynalist
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Dynalistのアーティクルビューの行間を狭める
// @author       wineroses
// @match        https://dynalist.io/d/*
// @grant        none
// ==/UserScript==

Css = document.createElement('style');
Css.innerText = ".is-compactDensity.is-article-view .Node-self, .is-cozyDensity.is-article-view .Node-self,
 .is-comfortableDensity.is-article-view .Node-self{padding-top:0px;padding-bottom:3px;}";
document.head.appendChild(Css);
