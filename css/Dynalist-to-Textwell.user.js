// ==UserScript==
// @name         Dynalist to Textwell
// @version      1
// @description  DynalistをTextwellに出力
// @author       wineroses
// @namespace    https://wineroses.hatenablog.com/
// @match        https://dynalist.io/d/*
// ==/UserScript==

e = document.createElement("div");
e.id = "Textwell";
e.innerHTML = "■";
e.style.cssText = "position:fixed; top:68px; right:20px; color:darkred;";
document.body.appendChild(e);

Textwell.onclick = function(){
  p = document.querySelectorAll(".Node .is-parent,.is-currentRoot .Node-content");
  s = "";
  for(i=0; i<p.length; i++){
    if(p[i].classList.contains("is-parent")){
      s+= "\n";
    }else{
      if(p[i].style.display!="none") s+= p[i].innerText;
    }
  }
  s = s.replace(/^\n+/, "");
  s = encodeURIComponent(s);
  url = "textwell://replace?text=" + s;
  window.open(url);
}
