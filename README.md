#cw-log

[![Build Status](https://travis-ci.org/armorik83/cw-log.svg)](https://travis-ci.org/armorik83/cw-log)

`cw-log` is a simple and level controllable logger.

```
$npm install cw-log --save
```

## Example

For node.

```js
var log = require('cw-log').logger(6);
```

For a browser. (use `/lib/log.js`)

```html
<script src="/path/to/log.js"></script>
```

```js
var log = cwlog.logger(6);
```

Usage.

```js
log.trace('the message');
log.fatal('a serious notice');

log.trace(cwlog.t(), 'with a timestamp', 42, {key: 'multiple arguments'});
```

## API

**static cwlog**
- `logger(level: number\[0-6\])`: Logger instance
- `t()`: string - The ISO timestamp

**Logger instance**
- `trace(...args)`
- `debug(...args)`
- `info(...args)`
- `warn(...args)`
- `error(...args)`
- `fatal(...args)`
- `t()`: string - an alias of static `t()` 

## Logging level
such as [Log4j](http://logging.apache.org/log4j/2.x/).

- 0: OFF
- 1: FATAL
- 2: ERROR
- 3: WARN
- 4: INFO
- 5: DEBUG
- 6: TRACE

## for TypeScript
When you use [dtsm](https://github.com/vvakame/dtsm), you can paste the following to `dtsm.json` and edit `ref`.

```
"cw-log/cw-log.d.ts": {
  "repo": "https://github.com/armorik83/cw-log.git",
  "ref": [latest commit hash],
  "path": "cw-log.d.ts"
}
```

## Author
- [OKUNOKENTARO](https://github.com/armorik83) aka armorik83

## License
MIT