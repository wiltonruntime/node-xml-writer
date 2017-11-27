define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

var XMLWriter = require('xml-writer/');
exports['setUp'] = function (callback) {
	this.xw = new XMLWriter;
	callback();
};
exports['t01'] = function (test) {
	this.xw.startPI('php');
	this.xw.endPI();
	test.equal(this.xw.toString(), '<?php?>');
	test.done();

};
exports['t02'] = function (test) {
	this.xw.startPI('php');
	this.xw.text(' echo');
	this.xw.text(' __FILE__; ');
	this.xw.endPI();
	test.equal(this.xw.toString(), '<?php echo __FILE__; ?>');
    test.done();
};
exports['t03'] = function (test) {
	this.xw.startPI('xml-stylesheet');
	this.xw.startAttribute('type');
	this.xw.text('text/xml');
	this.xw.endAttribute();
	this.xw.startAttribute('href');
	this.xw.text('style.xsl');
	this.xw.endAttribute();
	this.xw.endPI();
	test.equal(this.xw.toString(), '<?xml-stylesheet type="text/xml" href="style.xsl"?>');
	test.done();
};
exports['t04'] = function (test) {
    test.done();
};
exports['t05'] = function (test) {
	this.xw.writePI('php', ' var_dump(__FILE__); ');
	test.equal(this.xw.toString(), '<?php var_dump(__FILE__); ?>');
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
