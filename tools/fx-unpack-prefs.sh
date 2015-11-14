#!/bin/sh
die() { echo "$1"; exit 1; }

test -e "$1" || die "ERROR: Specify a Firefox distro downloaded by fx-get-dist."

fxname=$(basename "$1")
fxext="${fxname##*.}"
if [ "$fxext" = "zip" ]; then
	dest_dir=./${fxname%.zip}
	subdir=firefox
	unzip -d "$dest_dir" "$1" "$subdir/omni.ja" "$subdir/browser/omni.ja" "$subdir/webapprt/omni.ja"
elif [ "$fxext" = "bz2" ]; then
	dest_dir=./${fxname%.tar.bz2}
	subdir=firefox
	mkdir -p "$dest_dir"
	tar -C "$dest_dir" -xjf "$1" "$subdir/omni.ja" "$subdir/browser/omni.ja" "$subdir/webapprt/omni.ja"
elif [ "$fxext" = "exe" ]; then
	dest_dir=./${fxname%.exe}
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
