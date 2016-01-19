var
_ = require("lodash"),
fs = require("fs"),
path = require("path"),
ignore = require("ignore-file"),
jshint = require("jshint"),
vile = require("@brentlintner/vile"),
hint = jshint.JSHINT,
IS_JS = /\.js$/

function allowed(ignore_config) {
  var ignored

  // TODO: attempt to auto detect .jshintignore if no config
  if (ignore_config) {
    ignored = typeof ignore_config == "string" ?
      ignore.sync(ignore_config) :
      // TODO: make sure works on windows
      ignore.compile(ignore_config.join("\n"))
  } else {
    ignored = function () { return false }
  }

  return function (file) {
    return IS_JS.test(file) && !ignored(file)
  }
}

function jshint_config(config_path) {
  if (!config_path) config_path = ".jshintrc"
  try {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), config_path), "utf-8")
    )
  } catch(e) {
    console.warn("could not find " + config_path)
  }
}

function lint(fileData, config) {
  if (!config) config = {}
  hint(fileData, config, config.globals)
  var data = jshint.JSHINT.data()
  return data
}

// TODO: better
function into_issues(config) {
  return function (filepath, data) {
    var
      results = lint(data, config),
      errors = results.errors || [];

    return errors.map(function (result) {
      if (!result) result = {}

      return vile.issue({
        type: vile.STYL,
        path: filepath,
        title: result.reason,
        message: result.reason,
        signature: "jshint::" + result.code,
        where: {
          start: {
            line: result.line, character: result.character
          }
        }
      })
    })
  }
}

function punish(user_config) {
  var config = _.get(user_config, "config")
  var ignore_config = _.get(user_config, "ignore")
  var parsed_config

  if (typeof config == "string") {
    parsed_config = jshint_config(config)
  }

  return vile.promise_each(
    process.cwd(),
    allowed(ignore_config),
    into_issues(parsed_config)
  )
}

module.exports = {
  punish: punish
}
