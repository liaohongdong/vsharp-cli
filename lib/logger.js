var chalk = require('chalk')
var format = require('util').format

var prefix = '   vsharp-cli'
var sep = chalk.gray('.')

exports.log = function () {
    var msg = format.apply(format, arguments)
    console.log(chalk.white(prefix), sep, msg)
}

exports.fatal = function (message) {
    if (message instanceof Error) message = message.message.trim()
    var msg = format.apply(format, arguments)
    console.error(chalk.red(prefix), sep, msg)
    process.exit(1)
}

exports.success = function () {
    var msg = format.apply(format, arguments)
    console.log(chalk.white(prefix), sep, msg)
    process.exit(0)
}
