#!/bin/sh

grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' prefs/*.js
