# dmnlint-utils

[![Build Status](https://travis-ci.com/bpmn-io/dmnlint-utils.svg?branch=master)](https://travis-ci.com/bpmn-io/dmnlint-utils)

Utilities for creating dmnlint rules.

## Usage

```javascript
import {
  is,
  isAny
} from 'dmnlint-utils';

is(moddleElement, 'dmn:InputData'); // true || false
isAny(moddleElement, [ 'dmn:Decision', 'dmn:InputData' ]); // true || false
```

## Credits

The project is based on [`bpmnlint-utils`](https://github.com/bpmn-io/bpmnlint-utils) built by [nikku](https://github.com/nikku).

## License

MIT
