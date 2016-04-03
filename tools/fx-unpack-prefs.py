#!/usr/bin/env python3
import sys, subprocess, re, shutil
from pathlib import Path

if len(sys.argv) != 2:
    print('ERROR: Specify a Firefox distro downloaded by fx-get-dist.');
    sys.exit(1)

script_path = Path(sys.argv[0]).resolve();
distr_path = Path(sys.argv[1])
if not distr_path.exists():
    print('ERROR: File was not found: ' + sys.argv[1] + '.')
    sys.exit(2)

dest_dir = Path(re.sub('(\.tar\.bz2|\.exe|\.zip)$', '', distr_path.name))
unp_distr_dir = dest_dir / Path('__tmp__')
if dest_dir.exists():
    print('ERROR: Destination directory ' + str(dest_dir) + ' already exists, not overwriting.')
    sys.exit(3)

if distr_path.suffix == '.bz2':
    subdir = 'firefox'
    unpacker = ['tar', '-C', str(unp_distr_dir), '-xjf', str(distr_path)]
elif distr_path.suffix == '.exe':
    subdir = 'core'
    unpacker = ['7z', 'x', '-o' + str(unp_distr_dir), str(distr_path)]
elif distr_path.suffix == '.zip':
    subdir = 'firefox'
    unpacker = ['unzip', '-d', str(unp_distr_dir), str(distr_path)]
else:
    print('ERROR: Unknown extension: ' + distr_path.suffix + '.')
    sys.exit(4)

unp_distr_subdir = unp_distr_dir / Path(subdir)
print(unpacker)

try: unp_distr_dir.mkdir(parents=True)
except FileExistsError: pass
rc = subprocess.call(unpacker, stdout=subprocess.DEVNULL)
if rc != 0:
    print('ERROR: Failure while unpacking distro (' + str(rc) + ').')
    sys.exit(5)


with open(str(script_path.with_name('fx-pref-files.txt')), 'r') as f:
    pref_file_loc = f.read().split('\n')

for loc in pref_file_loc:
    if not loc: continue
    (jar, pfile) = loc.split(':')
    # Some archives are marked optional, so their presence is not required (e.g. Hello prefs are
    # in separate archive only on Firefox 45+ - that archive doesn't exist on older versions).
    if jar[0] == '?':
        optional_jar = True
        jar = jar[1:]
    else:
        optional_jar = False

    if pfile[0] == '?':
        optional_pfile = True
        pfile = pfile[1:]
    else:
        optional_pfile = False

    jar_path = unp_distr_subdir / Path(jar)
    unp_jar_dir = Path(dest_dir) / Path('firefox') / Path(jar)
    try: unp_jar_dir.mkdir(parents=True)
    except FileExistsError: pass

    rc = subprocess.call(['unzip', '-o', '-d', str(unp_jar_dir), str(jar_path), pfile], stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL)
    if rc != 0 and rc != 2: # Unzip returns 2 for JARs/XPIs, but extracts them successfully
        if rc == 9:
            if optional_jar:
                print('Skipping non-existent optional JAR: ' + jar + '.')
            else:
                print('ERROR: Required JAR was not found: ' + jar + '.')
                sys.exit(6)
        elif rc == 11:
            if optional_pfile:
                print('Skipping non-existent optional pref file: ' + jar + ':' + pfile + '.')
            else:
                print('ERROR: Required pref file was not found: ' + jar + ':' + pfile + '.')
                sys.exit(7)
        else:
            print('ERROR: Failure while unpacking prefs (' + str(rc) + ').')
            sys.exit(8)


print('Removing temporary directory: ' + str(unp_distr_dir))
shutil.rmtree(str(unp_distr_dir))
