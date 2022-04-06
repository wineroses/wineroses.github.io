// ==UserScript==
// @name        Articlemode for Dynalist
// @namespace   wineroses
// @description article-mode
// @include     https://dynalist.io/*
// @version     1
// @grant       none
// ==/UserScript==

  Css=document.createElement('style');
  Css.innerText=".is-compactDensity.is-article-view .Node-self, .is-cozyDensity.is-article-view .Node-self,
 .is-comfortableDensity.is-article-view .Node-self{padding-top:0px;padding-bottom:3px;}";
  document.head.appendChild(Css);
