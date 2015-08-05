#!/bin/sh

if ! expr "$1" : '^https:' >/dev/null; then
    echo "ERROR: Invalid URL. Use HTTPS."
    exit 1
fi

if expr "$1" : ".*releases" >/dev/null; then
	# Releases and betas
	# https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/
	fname=$(echo "$1"|sed -rn 's~.*/releases/([^/]+)/([^/]+)/([^/]+)/.*((\.exe)|(\.tar\.bz2)|(\.zip))~firefox_\1_\2_\3\4~p')
elif expr "$1" : ".*[0-9]-candidates" >/dev/null; then
	# RC's (39.0-candidates) and prebetas (39.0b7-candidates)
	# https://ftp.mozilla.org/pub/mozilla.org/firefox/candidates/
	fname=$(echo "$1"|sed -rn 's~.*/candidates/([^/]+)s/build([0-9]+)/([^/]+)/([^/]+)/.*((\.exe)|(\.tar\.bz2)|(\.zip))~firefox_\1\2_\3_\4\5~p')
elif expr "$1" : ".*nightly" >/dev/null; then
	# Auroras and Nightlies
	# https://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/2015/08/
	fname=$(echo "$1"|sed -rn 's~.*nightly/[0-9]+/[0-9]+/([0-9-]+)-mozilla-(aurora|central)/firefox-([0-9]+\.[0-9]+a[0-9])\.([^\.]+)\.([^\.]+)\..*(exe|tar\.bz2|zip)~firefox_\3-\2-\1_\4_\5.\6~p')
fi

if [ "$fname" = "" ]; then
    echo "ERROR: Couldn't parse URL."
    exit 1
fi

wget -O "$fname" "$1"
