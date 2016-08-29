#!/bin/bash
git ls-files | grep "\.json" | xargs cat | grep "\"en\"" | sed -E 's/^\s+"en": //' | sort | uniq -u