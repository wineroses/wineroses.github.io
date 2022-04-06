if(/https:\/\/dynalist\/.io/.test(location.href)){
  Css=document.createElement('style');
  Css.innerText=".is-compactDensity.is-article-view .Node-self, .is-cozyDensity.is-article-view .Node-self,
 .is-comfortableDensity.is-article-view .Node-self{padding-top:0px;padding-bottom:3px;}";
  document.head.appendChild(Css);
}
