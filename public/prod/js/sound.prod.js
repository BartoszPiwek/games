"use strict";var _createClass=function(){function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}!function i(u,a,f){function c(r,e){if(!a[r]){if(!u[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(l)return l(r,!0);var t=new Error("Cannot find module '"+r+"'");throw t.code="MODULE_NOT_FOUND",t}var o=a[r]={exports:{}};u[r][0].call(o.exports,function(e){return c(u[r][1][e]||e)},o,o.exports,i,u,a,f)}return a[r].exports}for(var l="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,r,n){Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function r(e){_classCallCheck(this,r),this.file=new Audio("/audio/"+e+".mp3")}return _createClass(r,[{key:"play",value:function(){this.file.play()}}]),r}();n.Sound=t},{}]},{},[1]);