// ==UserScript==
// @name No Indexed DB
// @description Allows some websites to continue to work with disabled Indexed DB (dom.indexedDB.enabled = false).
// @include https://mega.nz/*
// @include https://drive.google.com/*
// @include https://twitter.com/*
// @run-at document-start
// @grant none
// ==/UserScript==
Object.defineProperty(window, 'indexedDB', {value: null});
