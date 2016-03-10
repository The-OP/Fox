#!/usr/bin/env phantomjs
'use strict';

var fs = require('fs');
var sys = require('system');
var webPage = require('webpage');

function qs(arg) {
    return typeof(arg) === 'string' ? '"' + arg + '"' : arg;
}

(function main() {
	if (sys.args.length !== 3) {
		console.log("ERROR: Specify two folders containing Firefox prefs (created by fx-unpack-prefs) to compare.");
		phantom.exit(1);
	}

	var scriptDir = fs.absolute(sys.args[0]).replace(sys.args[0].split('/').pop(), '');

	// Prefs in browser/* override prefs in greprefs.js, so they should be parsed afterwards.
	var files = fs.read(scriptDir + 'fx-pref-files.txt').split('\n').filter(function(v) {return v;});
	var prefs = [];
	var page = webPage.create();

	page.navigationLocked = true;
	page.settings.localToRemoteUrlAccessEnabled = false;
	page.onResourceRequested = function(data, request) {console.log('WARNING: Page tried to request ' + data.url); request.abort();};
	for (var i = 0; i < 2; i++) {
		var text = '';
		var dirName = sys.args[i+1];
		for (var j = 0; j < files.length; j++) {
			var optional = false;
			var fileName = files[j];
			if (fileName.charAt(0) === '?') {
				optional = true;
				fileName = fileName.substr(1);
			}
			fileName = dirName + '/firefox/' + fileName.replace(':', '/');
			if (!fs.exists(fileName)) {
			    if (!optional) {
				console.log('ERROR: Required file ' + files[j] + ' was not found in ' + dirName + '.');
				phantom.exit(2);
			    }
			} else {
				text += fs.read(fileName) + '\n';
			}
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

	phantom.exit(0);
})();
