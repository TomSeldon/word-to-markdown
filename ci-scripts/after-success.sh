#!/bin/bash
set -ev

# Update coveralls if this was not a pull request build
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
	node_modules/.bin/gulp coveralls
fi
