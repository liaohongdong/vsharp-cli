var async = requires('async')

/**
 * Metalsmith ask plugin.
 *
 * @param options
 * @param prompt
 */

function ask(options, prompt) {
    return function (files, metalsmith, done) {
        var opts = options(metalsmith._directory + '/..')

        var prompts = Object.keys(opts.schema)
        var metalsmithMetadata = metalsmith.metadata()

        async.eachSeries(prompts, run, done)

        function run(key, done) {
            prompt(metalsmithMetadata, key, opts.schema[key], done)
        }
    }
}

module.exports = function (options, prompt) {
    return ask(options, prompt)
}