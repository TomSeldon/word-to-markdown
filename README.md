# Word to Markdown [![Build Status](https://travis-ci.org/TomSeldon/word-to-markdown.svg?branch=master)](https://travis-ci.org/TomSeldon/word-to-markdown) [![Coverage Status](https://coveralls.io/repos/TomSeldon/word-to-markdown/badge.svg?branch=master&service=github)](https://coveralls.io/github/TomSeldon/word-to-markdown?branch=master)

> A [Prize Winning](http://angularconnect2015.devpost.com/submissions) Office plugin for converting Microsoft Word documents to Markdown

## Why?

When markdown content is needed, perhaps for a blogging system that uses Markdown as input (e.g. Ghost) or for writing project documentation
that will live on GitHub, BitBucket or similar, the content author may prefer to work with a tool they're more familiar with rather
than learning Markdown syntax.

If that preferred tool happens to be Microsoft Word, you can use this add-in to convert the Word document to Markdown.

## Development

1. Check out repository
1. `npm install` will install all dependencies and build the application

To view the add-in in a browser, run `npm run gulp serve-static` and visit https://localhost:8443

In another terminal, run `npm run gulp watch` for your changes to be automatically applied. You can then reload your page to see the changes.
