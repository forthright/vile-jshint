# vile-jshint;w

A [vile](https://vile.io) plugin for [jshint](http://jshint.com).

**NOTICE**

This project is not actively maintained. If you want to
help maintain the project, or if you have a better
alternative to switch to, please open an issue and ask!

## Installation

    npm i @forthright/vile --save-dev
    npm i @forthright/vile-jshint --save-dev

## Config

Plugin config goes in your `.vile.yml`:

```yaml
jshint:
  config: filepath or object
  ignore: filepath or array
```

### Defaults

If no config path is specified, `.jshintrc` will be used.

### Custom Paths

You can specify custom paths for your `.jshintignore` and
`.jshintrc` files:

```yaml
jshint:
  config: some/other/.jshintrc
  ignore: some/other/.jshintignore
```

You can also set ignore/allow behaviour via `allow` and `ignore` lists.

```yaml
jshint:
  allow:
    - src
  ignore:
    - /lib
```

### Inline Config Example

You can also write config inline.

```yaml
jshint:
  config:
    asi: true
    globals:
      Promise: true
```
