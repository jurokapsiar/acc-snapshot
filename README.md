# acc-snapshot

Creates accessibility snapshot from DOM and AOM.

## Requirements

`acc-snapshot` requires AOM to be enabled in the browser. See http://wicg.github.io/aom/caniuse.html for instructions.

## Usage

The package exports:
- main class `AccessibilitySnapshot`
- reporter class `TextReporter`
- extractor classes `domProps` and `focusProps`

These can be used to extract AOM information:

```js
let body = document.querySelector("body")
let snapshot = new AccessibilitySnapshot(body)
let reporter = new TextReporter(console.log, [focusProps, domProps])
await snapshot.process(reporter)
```

## License

[MIT](LICENSE).