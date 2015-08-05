#!/bin/sh
die() { echo "$1"; exit 1; }

test -e "$1" || die "ERROR: Specify a Firefox distro downloaded by fx-get-dist."

fxext="${1##*.}"
if [ "$fxext" = "zip" ]; then
	dest_dir=./${1%.zip}
	subdir=firefox
	unzip -d "$dest_dir" "$1" "$subdir/omni.ja" "$subdir/browser/omni.ja" "$subdir/webapprt/omni.ja"
elif [ "$fxext" = "bz2" ]; then
	dest_dir=./${1%.tar.bz2}
	subdir=firefox
	mkdir -p "$dest_dir"
	tar -C "$dest_dir" -xaf "$1" "$subdir/omni.ja" "$subdir/browser/omni.ja" "$subdir/webapprt/omni.ja"
elif [ "$fxext" = "exe" ]; then
	dest_dir=./${1%.exe}
	subdir=core
	7z x -o"$dest_dir" "$1" "$subdir/omni.ja" "$subdir/browser/omni.ja" "$subdir/webapprt/omni.ja"
else
	die "ERROR: Unknown extension ($fxext)."
fi

test $? -eq 0 || die "ERROR: Unpacking has failed."

unzip -d "$dest_dir" "$dest_dir/$subdir/omni.ja" greprefs.js defaults/pref/services-sync.js
rm "$dest_dir/$subdir/omni.ja"

unzip -d "$dest_dir/browser" "$dest_dir/$subdir/browser/omni.ja" defaults/preferences/firefox.js defaults/preferences/firefox-branding.js defaults/preferences/firefox-l10n.js defaults/preferences/webide-prefs.js
rm "$dest_dir/$subdir/browser/omni.ja"

unzip -d "$dest_dir/webapprt" "$dest_dir/$subdir/webapprt/omni.ja" defaults/preferences/prefs.js
rm "$dest_dir/$subdir/webapprt/omni.ja"
