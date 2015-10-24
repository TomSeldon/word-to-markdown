#!/bin/bash
set -ev

# Update coveralls if this was a unit test build
if [ "${BUILD}" = "static-no-linting" ]; then
	node_modules/.bin/gulp coveralls
fi
