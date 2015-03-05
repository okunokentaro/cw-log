/**
 * cw-log
 *
 * @copyright © 2015 OKUNOKENTARO
 * @since cw-log v 0.1.0 (Mar 5, 2015)
 */
'use strict';

module cw {
  export class Log {
    constructor(private level: number) {
      //
    }

    private logging(level: number): Function {
      if (this.level === 0) {return () => {}}

      if (level === 6 && level <= this.level) {return console.log  .bind(console)}
      if (level === 5 && level <= this.level) {return console.log  .bind(console)}
      if (level === 4 && level <= this.level) {return console.info .bind(console)}
      if (level === 3 && level <= this.level) {return console.warn .bind(console)}
      if (level === 2 && level <= this.level) {return console.error.bind(console)}
      if (level === 1 && level <= this.level) {return console.error.bind(console, '[FATAL]')}
      return () => {};
    }

    trace = this.logging(6);
    debug = this.logging(5);
    info  = this.logging(4);
    warn  = this.logging(3);
    error = this.logging(2);
    fatal = this.logging(1);

    t() {
      return Log.t();
    }

    static t() {
      return new Date().toISOString() + ' |';
    }

    static logger(level: number) {
      return new Log(level);
    }
  }
}

this.cwlog = cw.Log;

declare var module;
declare var define;

if (typeof module === 'object' && module.exports) {
  module.exports = cw.Log;
} else if (typeof define === 'function' && define.amd) {
  define(function(){return cw.Log});
}