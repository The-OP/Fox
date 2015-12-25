// ==UserScript==
// @name Disable window.getSelection()
// @description Prevents websites from detecting what text user has selected. Some sites also append extra text to selection (e.g. link to the site itself) via hidden element, so when user copies selection to the clipboard it comes with unwanted content.
// @include *
// @grant none
// @run-at document-start
// ==/UserScript==

Object.defineProperty(window, 'getSelection', {value: function() { return {};}});

