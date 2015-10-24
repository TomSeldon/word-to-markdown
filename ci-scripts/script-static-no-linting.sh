#!/bin/bash
set -ev

# Run unit tests
node_modules/.bin/gulp karma:ci

# Validate manifest XML
node_modules/.bin/gulp validate-xml
