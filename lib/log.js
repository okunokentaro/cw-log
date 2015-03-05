/**
 * cw-log
 *
 * @copyright © 2015 OKUNOKENTARO
 * @since cw-log v 0.1.0 (Mar 5, 2015)
 */
'use strict';
var cw;
(function (cw) {
    var Log = (function () {
        function Log(level) {
            this.level = level;
            this.trace = this.logging(6);
            this.debug = this.logging(5);
            this.info = this.logging(4);
            this.warn = this.logging(3);
            this.error = this.logging(2);
            this.fatal = this.logging(1);
            //
        }
        Log.prototype.logging = function (level) {
            if (this.level === 0) {
                return function () {
                };
            }
            if (level === 6 && level <= this.level) {
                return console.log.bind(console);
            }
            if (level === 5 && level <= this.level) {
                return console.log.bind(console);
            }
            if (level === 4 && level <= this.level) {
                return console.info.bind(console);
            }
            if (level === 3 && level <= this.level) {
                return console.warn.bind(console);
            }
            if (level === 2 && level <= this.level) {
                return console.error.bind(console);
            }
            if (level === 1 && level <= this.level) {
                return console.error.bind(console, '[FATAL]');
            }
            return function () {
            };
        };
        Log.prototype.t = function () {
            return Log.t();
        };
        Log.t = function () {
            return new Date().toISOString() + ' |';
        };
        Log.logger = function (level) {
            return new Log(level);
        };
        return Log;
    })();
    cw.Log = Log;
})(cw || (cw = {}));
this.cwlog = cw.Log;
if (typeof module === 'object' && module.exports) {
    module.exports = cw.Log;
}
else if (typeof define === 'function' && define.amd) {
    define(function () {
        return cw.Log;
    });
}
