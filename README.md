# vile-jshint

A [vile](http://vile.io) plugin for [jshint](http://jshint.com).

**NOTICE**

This project is not actively maintained. If you want to
help maintain the project, or if you have a better
alternative to switch to, please open an issue and ask!

## Installation

    npm install vile-jshint

## Config

Plugin config goes in your `.vile.yml`:

```yml
jshint:
  config: filepath or object
  ignore: filepath or array
```

### Defaults

`vile.ignore` is used as a base ignore,
and if no config is specified, `.jshintrc` will
be used.

### Custom Paths

You can specify custom paths for your `.jshintignore` and
`.jshintrc` files:

```yml
jshint:
  config: some/other/.jshintrc
  ignore: some/other/.jshintignore
```

### Inline Config Example

```yml
jshint:
  config:
    asi: true
    globals:
      Promise: true

  ignore: [
      "node_modules",
      "foo/**/node_modules",
      "somewhere/else/**"
    ]
```
