var
_ = require("lodash"),
fs = require("fs"),
path = require("path"),
jshint = require("jshint"),
vile = require("@forthright/vile"),
hint = jshint.JSHINT,
DEFAULT_JSHINT_CONFIG_PATH = ".jshintrc",
IS_JS = /\.js$/

function allowed(ignore) {
  return function (file, is_dir) {
    return (is_dir || IS_JS.test(file)) &&
            !vile.ignored(file, ignore)
  }
}

function jshint_config(config_path) {
  if (!config_path) config_path = DEFAULT_JSHINT_CONFIG_PATH
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
  var ignore = _.get(user_config, "ignore")

  if (typeof config == "string" || !config) {
    config = jshint_config(config)
  }

  return vile.promise_each(
    process.cwd(),
    allowed(ignore),
    into_issues(config)
  )
}

module.exports = {
  punish: punish
}
