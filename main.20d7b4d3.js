parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu__aside"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var t=document.querySelectorAll(".scroll-link");t.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var s=t.getAttribute("href"),c=document.querySelector(s);c&&c.scrollIntoView({behavior:"smooth"})})});var e=document.querySelector(".sliders__button-left"),s=document.querySelector(".sliders__button-right"),c=1;function o(t){l(c+=t)}function l(t){var e,s=document.getElementsByClassName("sliders__content-photo");for(t>s.length&&(c=1),t<1&&(c=s.length),e=0;e<s.length;e++)s[e].style.display="none";s[c-1].style.display="block"}l(c),e.addEventListener("click",function(){return o(-1)}),s.addEventListener("click",function(){return o(1)});var i=document.querySelector(".switcher__logo"),r=document.querySelector(".header"),n=document.querySelector(".info__button"),_=document.querySelectorAll(".block__images"),g=document.querySelector(".service__block-001"),a=document.querySelector(".service__block-002"),u=document.querySelector(".service__block-003"),d=document.querySelector(".service__block-004"),h=document.querySelectorAll(".block__link"),w=document.querySelectorAll(".service__block-number"),L=document.querySelectorAll(".block__design-rec"),y=document.querySelectorAll(".sliders__content-photo"),m=document.querySelectorAll(".testimonials__block-icon"),b=document.querySelector(".apply"),q=document.querySelector(".apply__button"),S=document.querySelector(".contact__wrapper"),v=document.querySelector(".contact__rows--button"),f=document.querySelector(".contact__rows--description"),k=document.querySelectorAll(".contact__rows--input"),p=document.querySelector(".footer"),A=document.querySelectorAll(".nav__link"),E=document.querySelector(".menu__aside"),B=document.querySelector(".switcher__logo"),C=document.querySelector(".contact__data--facebook"),D=document.querySelector(".contact__data--twitter");i.addEventListener("click",function(){r.classList.toggle("header__switch"),n.classList.toggle("switch__button"),n.classList.toggle("switch__button-hover"),g.classList.toggle("switch-shadow-blue"),a.classList.toggle("switch-shadow-yellow"),u.classList.toggle("switch-shadow-green"),d.classList.toggle("switch-shadow-red"),w[0].classList.toggle("switch-blue-number"),w[1].classList.toggle("switch-yellow-number"),w[2].classList.toggle("switch-green-number"),w[3].classList.toggle("switch-red-number"),h[0].classList.toggle("switch-shadow-blue"),h[0].classList.toggle("switch-blue"),h[1].classList.toggle("switch-yellow"),h[1].classList.toggle("switch-shadow-yellow"),h[2].classList.toggle("switch-green"),h[2].classList.toggle("switch-shadow-green"),h[3].classList.toggle("switch-red"),h[3].classList.toggle("switch-shadow-red"),L[0].classList.toggle("switch__rec-blue"),L[1].classList.toggle("switch__rec-blue"),L[2].classList.toggle("switch__rec-yellow"),L[3].classList.toggle("switch__rec-yellow"),L[4].classList.toggle("switch__rec-red"),L[5].classList.toggle("switch__rec-red"),m[0].classList.toggle("switch__icon-blue"),m[1].classList.toggle("switch__icon-yellow"),m[2].classList.toggle("switch__icon-red"),b.classList.toggle("switch__apply"),q.classList.toggle("switch__button"),q.classList.toggle("switch__button-hover"),S.classList.toggle("contact__switch"),v.classList.toggle("switch__button"),v.classList.toggle("switch__button-hover"),p.classList.toggle("footer__switch"),E.classList.toggle("switch__aside"),B.classList.toggle("switch__logo-bar"),f.classList.toggle("switch__input-color"),C.classList.toggle("switch__facebook"),D.classList.toggle("switch__twitter");for(var t=0;t<k.length;t++)k[t].classList.toggle("switch__input-color");for(var e=0;e<A.length;e++)A[e].classList.toggle("switch__link");for(var s=0;s<_.length;s++)_[s].classList.toggle("shadow__switch");for(var c=0;c<y.length;c++)y[c].classList.toggle("switch__slider")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.20d7b4d3.js.map