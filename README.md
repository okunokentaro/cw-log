#cw-log

[![Build Status](https://travis-ci.org/armorik83/cw-log.svg)](https://travis-ci.org/armorik83/cw-log)

`cw-log` is a simple and level controllable logger.

```
$npm install cw-log --save
```

## Example

For node.

```
var log = require('cw-log').logger(6);
```

For a browser.

```
var log = cwlog.logger(6);
```

Usage.

```
log.trace('the message');
log.fatal('a serious notice');

log.trace(cwlog.t(), 'with a timestamp', 42, {key: 'multiple arguments'});
```

## API

**static cwlog**
- logger(level: number\[0-6\]): Logger instance
- t(): string - The ISO timestamp

**Logger instance**
- trace(...args)
- debug(...args)
- info(...args)
- warn(...args)
- error(...args)
- fatal(...args)

## Logging level
such as Log4J.

- 0: OFF
- 1: FATAL
- 2: ERROR
- 3: WARN
- 4: INFO
- 5: DEBUG
- 6: TRACE

## Author
- [OKUNOKENTARO](https://github.com/armorik83) aka armorik83

## License
MIT