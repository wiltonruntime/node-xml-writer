define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var XMLWriter = require('xml-writer/');
exports['setUp'] = function (callback) {
	this.xw = new XMLWriter;
	callback();
};
exports['t01'] = function (test) {
	this.xw.startDocument();
	test.equal(this.xw.toString(), '<?xml version="1.0"?>\n');
    test.done();
};
exports['t02'] = function (test) {
	this.xw.startDocument('1.0', 'utf-8');
	test.equal(this.xw.toString(), '<?xml version="1.0" encoding="utf-8"?>\n');
	test.done();
};
exports['t03'] = function (test) {
	this.xw.startDocument('1.0', 'utf-8', true);
	test.equal(this.xw.toString(), '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n');
	test.done();
};
exports['t04'] = function (test) {
	this.xw.startDocument();
	this.xw.endDocument();
	test.equal(this.xw.toString(), '<?xml version="1.0"?>\n');
    test.done();
};

var assert = require("assert");
var forOwn = require("lodash/forOwn");
var testobj = function() {};
testobj.equal = assert.equal;
testobj.throws = assert.throws;
testobj.done = function() {};

forOwn(exports, function(fun, key) {
    print("test: " + key);
    var obj = {};
    exports.setUp.call(obj, testobj);
    fun.call(obj, testobj);
});

return module.exports;});
