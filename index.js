#!/usr/bin/env node

var fs = require('fs')

console.log(process.argv)

console.log('Pre-commit hook running')

var results = fs.readFileSync(process.argv[2])

console.log(results.toString())

process.exit(1)
