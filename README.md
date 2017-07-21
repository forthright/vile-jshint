# vile-jshint

A [Vile](https://vile.io) plugin for identifying common style and
maintainability issues in your JavaScript code (via [JSHint](http://jshint.com)).

**NOTICE**

This project is not actively maintained. If you want to
help maintain the project, or if you have a better
alternative to switch to, please open an issue and ask!

## Installation

    npm i -D vile vile-jshint

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

## Versioning

This project uses [Semver](http://semver.org).

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-jshint/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-jshint/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-jshint/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).
