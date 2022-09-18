/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/dataStructure.js
var DStr={topbar:{searchInput:".topBar__controls-inputText",seachLeftIcon:".topBar__controls-inputText-searchIcon",seachLeftIconActive:".topBar__controls-inputText-searchIcon--active",mic:".topBar__controls-mic",camera:".topBar__addVideo",bell:".topBar__news"}};
;// CONCATENATED MODULE: ./src/scripts/uiController.ts
var UIController=/** @class */function(){function a(){}return a.prototype.searchInputOnFocus=function(){var a=document.querySelector(DStr.topbar.seachLeftIcon),b=document.querySelector(DStr.topbar.searchInput);b.addEventListener("focus",function(){a.classList.add(DStr.topbar.seachLeftIconActive.slice(1))}),b.addEventListener("blur",function(){a.classList.remove(DStr.topbar.seachLeftIconActive.slice(1))})},a}(),a=new UIController;a.searchInputOnFocus();
;// CONCATENATED MODULE: ./src/scripts/app.js

/******/ })()
;