// ==UserScript==
// @name         Articlemode for Dynalist
// @namespace    https://wineroses.github.io/
// @version      1
// @description  Dynalistのアーティクルビューの行間を狭める
// @author       wineroses
// @match        https://dynalist.io/d/*
// @grant        none
// ==/UserScript==

document.body.appendChild(document.createElement("style")).innerHTML=".Node-self{padding-top:0px !important;padding-bottom:3px !important;}";
p=0;
document.ontouchstart=function(e){p=e.touches[0].pageX;};
document.ontouchmove = function(e){
  x = e.touches[0].pageX;
  if(x-p>4 || p-x>4){
    e.preventDefault();
    d = document.getSelection();
    m = (e.touches.length==2 || d.toString().length)? "extend":"move";
    d.modify(m,(p>x)? "left":"right","character");
    p = x;
  }
}

