#!/usr/bin/env node

console.log('Pre-commit hook running')

var fs = require('fs')

var patternFromArgs = process.argv[2]
var commitTempFile = process.argv[3]

var regexPattern = RegExp(patternFromArgs)

var results = fs.readFileSync(commitTempFile)

if (regexPattern.test(results)) {
  console.log('Valid commit message')
  process.exit(0)
} else {
  console.error('Invalid commit message')
  console.error('The JIRA issue number is probably not added to the beginning of this commit message')
  console.error(`                                 .#@&(....*%@&.
                             %@,................@(
                          @/...................... @
                       ,@.........................../(
                      @ ............................. #
                    *(.................................%
                   %...................................,/
                  .,....................................&
                  @..................................... (
                 & ......................................@
                 %.......................................*,
                %........................................ @
                @..........%*/*..............(............@               .&(%@
(@%##,          &.........../%##&.........%##%............(.             (@##(@
.####/         ,*............##% ......###% .............#           (%##((
  ##%*       %.............%####@.....%###(..............@         @(##%*
    ####     @ ............####....###...............@      %###(@
     /(####&   &.............@##%##...####...............*   ,##(&
      .@#####@( .............@#& &.,##,##%................@@(######.
      .#######(@..........*.@@%%  ##%  @@(..#.........(#####&(#.
        @(@##((&........(&.@@#& @%%%& %#@@.#/.(*..... ##&(@#%,
         ,#(#(%%..@@&@%####%.....*....(##&,#&&&&*.%######&&
           #%@(#%##@&@@####%..............%###@&@&&#%((..,(
          ,  %(%((%%.######%..............######*.,###&*.(#...&
          @..&%..%((&.#########%........,########/.%#*...%&.. @
          .(.&&....&%#######&&....,,...@#########%.#((#*& ...&
            (* &@%%@(#####%&&&&,,...*/&&&######%##%...# @#
               .@#..@#######&&&...&&&...&&%#######*..,.
                  #.######%@&&&&&&&&&&&&&&%&######&(###@.
                &(##@#####@&&&&&&&&&&&&&&&&&&@######@#%(&
                #######&&&@&&&&&&&&&&&&&&@%######@(
                 (@####   @%%&&&&&&&&&&@%%%/ #%####&
                 ,%####&* *@%@%%#/....,#*@%%@%@ .*####(
                  %###/( @%%%%&@&(&%%%%&.&&@%%%%#  ##%
                 %##&   @%%%%%%@%%%%&&%%%@%%%%%%%@    /#%
               @#@%    *%%%%%%%%%@/    /@%%%%%%%%%        %(
             @@*        &%%%%%%&          @%%%%%,
                        @@@@@%%           @@@@@@@@   `)
  console.error('Invalid commit message')
  console.error('The JIRA issue number is probably not added to the beginning of this commit message')
  process.exit(1)
}
