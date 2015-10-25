# vile-jshint

A [vile](http://vile.io) plugin for [jshint](http://jshint.com).

## Installation

    npm install vile-jshint

## Config

Plugin config goes in your `.vile.yml`:

```yml
jshint:
  config: filepath or object
  ignore: filepath or object
```

### JSHint Default Example

```yml
jshint:
  config: .jshintrc
  ignore: .jshintignore
```

### Inline Config

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

### Ignore Matching

Ignore checking uses [ignore-file](https://github.com/mafintosh/ignore-file),
so inline or `.jshintignore` matching may not be exactly the same as the `jshint` CLI.
