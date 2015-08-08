#!/usr/bin/env phantomjs

var fs = require('fs');
var sys = require('system');
var webPage = require('webpage');

function qs(arg) {
    return typeof(arg) === 'string' ? '"' + arg + '"' : arg;
}

(function main() {
	if (sys.args.length != 3) {
		console.log("ERROR: Specify two folders containing Firefox prefs (created by fx-unpack-prefs) to compare.");
		phantom.exit();
	}

	// Prefs in browser/* override prefs in greprefs.js
	var files = ['greprefs.js',
		'defaults/pref/services-sync.js', 
		'browser/defaults/preferences/firefox.js',
		'browser/defaults/preferences/firefox-branding.js',
		'browser/defaults/preferences/firefox-l10n.js',
		'browser/defaults/preferences/webide-prefs.js',
		'webapprt/defaults/preferences/prefs.js'];
	var prefs = [];
	var page = webPage.create();

	page.navigationLocked = true;
	page.settings.localToRemoteUrlAccessEnabled = false;
	page.onResourceRequested = function(data, request) {console.log('WARNING: Page tried to request ' + data.url); request.abort();};
	for (var i = 0; i < 2; i++) {
		var text = '';
		for (var j = 0; j < files.length; j++) {
			text += fs.read(sys.args[i+1] + '/' + files[j]) + '\n';
		}
		prefs[i] = page.evaluate(function(text) {
			var prefs = {};
			function pref(name, value) {prefs[name] = value;}
			function sticky_pref(name, value) {prefs[name] = value;}
			eval(text);
			return prefs;
		}, text);
	}
	page.close();

	console.log('Difference between default prefs of ' + sys.args[1] + ' and ' + sys.args[2]);
	var prefsOld = prefs[0];
	var prefsNew = prefs[1];

	var namesNew = Object.getOwnPropertyNames(prefsNew);
	for (var i = 0; i < namesNew.length; i++) {
		if (!prefsOld.hasOwnProperty(namesNew[i])) {
			console.log('+++ ' + namesNew[i] + ': ' + qs(prefsNew[namesNew[i]]));
		} else if (prefsOld[namesNew[i]] !== prefsNew[namesNew[i]]) {
			console.log('*** ' + namesNew[i] + ': ' + qs(prefsOld[namesNew[i]]) + ' -> ' + qs(prefsNew[namesNew[i]]));
		}
	}

	var namesOld = Object.getOwnPropertyNames(prefsOld);
	for (var i = 0; i < namesOld.length; i++) {
		if (!prefsNew.hasOwnProperty(namesOld[i])) {
			console.log('--- ' + namesOld[i]);
		}
	}

	phantom.exit();
})();

