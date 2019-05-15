#!/usr/bin/env node

var fs = require('fs')

var patternFromArgs = process.argv[2]
var commitTempFile = process.argv[3]

var regexPattern = RegExp(patternFromArgs)

console.log('Pre-commit hook running')

console.log(process.argv)

var results = fs.readFileSync(commitTempFile)

if (regexPattern.test(results)) {
  console.log('Valid commit message')
  process.exit(0)
} else {
  console.error('INVALID commit message')
  process.exit(1)
}
