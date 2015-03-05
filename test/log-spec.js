'use strict';
var rewire = require('rewire');
var assert = require('assert');
var index  = require('../');
var cwlog = rewire('../lib/log');

var virtualLog = [];
function virtualLogging() {
  virtualLog.push(arguments);
}

cwlog.__set__({
  console: {
    log:   virtualLogging,
    info:  virtualLogging,
    warn:  virtualLogging,
    error: virtualLogging
  }
});

function loggingAll(logger) {
  logger.trace('trace');
  logger.debug('debug');
  logger.info ('info');
  logger.warn ('warn');
  logger.error('error');
  logger.fatal('fatal');
}

describe('cw.Log', function() {
  it ('successfully loaded', function() {
    assert(!!index);
  });

  describe('level TRACE', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(6);
      loggingAll(logger);
    });

    it('should output log of the trace level', function() {
      assert(virtualLog[0][0] === 'trace');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 6);
    });
  });

  describe('level DEBUG', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(5);
      loggingAll(logger);
    });

    it('should output log of the debug level', function() {
      assert(virtualLog[0][0] === 'debug');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 5);
    });
  });

  describe('level INFO', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(4);
      loggingAll(logger);
    });

    it('should output log of the info level', function() {
      assert(virtualLog[0][0] === 'info');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 4);
    });
  });

  describe('level WARN', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(3);
      loggingAll(logger);
    });

    it('should output log of the warn level', function() {
      assert(virtualLog[0][0] === 'warn');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 3);
    });
  });

  describe('level ERROR', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(2);
      loggingAll(logger);
    });

    it('should output log of the error level', function() {
      assert(virtualLog[0][0] === 'error');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 2);
    });
  });

  describe('level FATAL', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(1);
      loggingAll(logger);
    });

    it('should output log, and the fatal log has a prefix [FATAL]', function() {
      assert(virtualLog[virtualLog.length - 1][0] === '[FATAL]');
    });

    it('should output log of the fatal level', function() {
      assert(virtualLog[0][1] === 'fatal');
    });

    it('should become a correct log length', function() {
      assert(virtualLog.length === 1);
    });
  });

  describe('level OFF', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(0);
      loggingAll(logger);
    });

    it('should output the empty log', function() {
      assert(virtualLog.length === 0);
    });
  });

  describe('timestamp', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(5);
      logger.debug(logger.t());
    });

    it('should output a timestamp', function() {
      var timestamp = virtualLog[0][0];
      assert(timestamp.slice(0, 1) === '2'); // the 1st letter of 20XX
      assert(timestamp.slice(timestamp.length - 3) === 'Z |');
    });
  });

  describe('static timestamp', function() {
    beforeEach(function () {
      virtualLog = [];
      var logger = cwlog.logger(5);
      logger.debug(cwlog.t());
    });

    it('should output a timestamp', function() {
      var timestamp = virtualLog[0][0];
      assert(timestamp.slice(0, 1) === '2'); // the 1st letter of 20XX
      assert(timestamp.slice(timestamp.length - 3) === 'Z |');
    });
  });
});
