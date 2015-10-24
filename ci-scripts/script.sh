#!/bin/bash
set -ev

if [ "${BUILD}" = "static" ]; then
	./ci-scripts/script-static.sh
fi
