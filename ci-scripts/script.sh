#!/bin/bash
set -ev

if [ "${BUILD}" = "static-no-linting" ]; then
	./ci-scripts/script-static-no-linting.sh
fi

if [ "${BUILD}" = "static-only-linting" ]; then
	./ci-scripts/script-static-only-linting.sh
fi
