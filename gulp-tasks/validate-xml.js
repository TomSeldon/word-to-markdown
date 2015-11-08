var gulp = require('gulp');
var fs = require('fs');

gulp.task('validate-xml', function() {
  var xmllint = require('xmllint');
  var chalk = require('chalk');
  var minimist = require('minimist');
  var options = minimist(process.argv.slice(2));
  var xsd = fs.readFileSync('./manifest.xsd');
  var xmlFilePath = options.xmlfile || './manifest.xml';
  var resultsAsJson = options.json || false;
  var xml = fs.readFileSync(xmlFilePath);

  if (!resultsAsJson) {
    console.log('\nValidating ' + chalk.blue(xmlFilePath.substring(xmlFilePath.lastIndexOf('/') + 1)) + ':');
  }
  var result = xmllint.validateXML({
    xml: xml,
    schema: xsd
  });

  validateHighResolutionIconUrl(xml, result);

  if (resultsAsJson) {
    console.log(JSON.stringify(result));
  } else if (result.errors === null) {
    console.log(chalk.green('Valid'));
  } else {
    console.log(chalk.red('Invalid'));
    result.errors.forEach(function(e) {
      console.log(chalk.red(e));
    });
  }
});

/**
 * @param {*} xml - XML content of manifest
 * @param {*} result - Result object
 * @returns {undefined}
 */
function validateHighResolutionIconUrl(xml, result) {
  if (xml && result) {
    if (xml.indexOf('<HighResolutionIconUrl ') > -1 &&
      xml.indexOf('<HighResolutionIconUrl DefaultValue="https://') < 0) {
      if (result.errors === null) {
        result.errors = [];
      }

      result.errors.push('The value of the HighResolutionIconUrl attribute contains an unsupported URL. You can only use https:// URLs.');
    }
  }
}
