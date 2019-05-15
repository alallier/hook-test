#!/usr/bin/env node

console.log('Pre-commit hook running')
console.log('\n')

var fs = require('fs')

console.log(process.argv)

var patternFromArgs = process.argv[2]
var errorMessageFromArgs = process.argv[3]
var commitTempFile = process.argv[4]

var regexPattern = RegExp(patternFromArgs)

var results = fs.readFileSync(commitTempFile)

if (regexPattern.test(results)) {
  console.log('Valid commit message')
  process.exit(0)
} else {
  console.error('Invalid commit message')
  console.error(errorMessageFromArgs)
  console.error(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/  /&&&&(. /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@( %&&&&&&&&&&&&&&&& &@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@(,@&&&&&&&&&&&&&&&&&&&&&.#@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ @&&&&&&&&&&&&&&&&&&&&&&&&&& @@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@ @&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@ &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& @@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@%#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& @@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@ &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@,@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& @@@@@@@@@@@@@@@@@@@
*  .,@@@@@@@@@@ &&&&&&&&&&&..*(&&&&&&&&&@.**,&&&&&&&&&&,@@@@@@@@@@@@@@.**,/
 **, @@@@@@@@@@.&&&&&&&&&&&&***,&&&&&&&,***%(&&&&&&&&&&%(@@@@@@@@@@@@.***,@
@@,****@@@@@@@@(&&&&&&&&&&&&**** &&&&&,***%&&&&&&&&&&&&@ @@@@@@@@@ /** @@@@
@@@,/**/.@@@@@%&&&&&&&&&&&&&*****@&&&,****&&&&&&&&&&&&&& @@@@@@/***/ @@@@@@
@@@@@.**** @@@.&&&&&&&&&&&&&**.**#&&&**.**&&&&&&&&&&&&&&(@@@& ****(@@@@@@@@
@@@@@@(****/ &,&&&&&&&&&&&&&**@#*.&&**&,*.&&&&&&&&&&&&&&&../***,* @@@@@@@@@
@@@@@@ * ***** @&&&&&&&/&&%  *%@,****@@,* /#&&(&&&&&&&&%,****./,@@@@@@@@@@@
@@@@@@@@,/,**.** @&&&&&,.&  *(( *.,@,,  &*&& *@&&&@ .**./,* @@@@@@@@@@@@@
@@@@@@@@@*/ **,//. @@ .. ****.&&&&&&&&&&(**.# ... %.*,.**** @@@@@@@@@@@@@@@
@@@@@@@@@@@,*  **.*,.. *****&&&&&&&&&&&&&&****  . ,**,/,*%&&(#@@@@@@@@@@@@@
@@@@@@@@@@#&&**/.*,*(.******,&&&&&&&&&&&&,*****.&&,.,.&/&&& @@@@@@@@@@@@@
@@@@@@@@@@&&/.&&&,*.**********,&&&&&&%.********* &*/#&&///&(@@@@@@@@@@@@@
@@@@@@@@@@&%&*.&&&./.******* .%# /&&  ..,*******. //*&&/&&@ @@@@@@@@@@@@@@@
@@@@@@@@@@@@@,@ &&& ,******...%/%(&&& . *******.*,&%,& #@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@.. &*****, ..&&,..... ,&*..********.&&*@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@./,.*****  ................,*****.,*/..@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@.***.****,................. ********..%@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@/// ***** .@, ........... ,,@ ***** @@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@ ****,%@@  ,, /    ,%& ,,  @ #*****@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@(, ***,*@ ,,,. .%,,,,,,&. .,,,.@@.***(@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@ ***%@@.,,,,, ,, ,/(* ,,,,,,,,,@@@..*.@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@.* .@@@.,,,,,,,, . */..,,,,,,,,,.@@@@@@..@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@, %@@@@@@@ ,,,,,,.@@@@@@@@*.,,,,.&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@%  . ,, @@@@@@@@@@   (   %@@@@@@@@@@@@@@@@@@@@@@@@@@@`)

  console.log('\n')
  console.error('Invalid commit message')
  console.error(errorMessageFromArgs)
  process.exit(1)
}
