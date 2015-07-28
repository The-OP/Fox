#!/bin/sh

FOXES="3800 3900"

for f in prefs/prefs_*.meta.js; do
    for FX in $FOXES; do
        cpp -DFX=$FX -undef -Wundef -std=c99 -nostdinc -Wtrigraphs -fdollars-in-identifiers -C "$f" | sed -r 's/^#.*//; s/^[ \t]+//' | cat -s > "${f%meta.js}fx$FX.js"
    done
done
