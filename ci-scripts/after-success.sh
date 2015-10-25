#!/bin/bash
set -ev

# Update coveralls if this was a static test build
if [ "${BUILD}" = "static" ]; then
	node_modules/.bin/gulp coveralls
fi
