const $ = require('shelljs')
const fs = require('fs')
const path = require('path')

$.config.fatal = true
const rootDir = __dirname

console.log('# Build Express app'); {
    $.cd(rootDir)

    console.log('## Restore packages')
    $.exec('npm install')

    console.log('## Build app')
    $.exec('npm run "build:prod"')
}

console.log('# Build React app'); {
    $.cd(rootDir + '/client')

    console.log('## Restore packages')
    $.exec('npm install')

    console.log('## Build app')
    $.exec('npm run build')

    console.log('## Copy react app')
    $.cp('-R', rootDir + '/client/build', rootDir + '/dist/public')
}

$.cd(rootDir)