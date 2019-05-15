#!/usr/bin/env node

var fs = require('fs')

var regexPattern = RegExp('[A-Z][A-Z_0-9]+-[0-9]+')

console.log(process.argv)

console.log('Pre-commit hook running')

var results = fs.readFileSync(process.argv[2])

if (regexPattern.test(results)) {
  console.log('Valid commit message')
  process.exit(0)
} else {
  console.error('INVALID commit message')
  process.exit(1)
}
