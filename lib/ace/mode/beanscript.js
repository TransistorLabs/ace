define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var BeanScriptHighlightRules = require("./beanscript_highlight_rules").BeanScriptHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = BeanScriptHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = "";
    this.$id = "ace/mode/beanscript";
}).call(Mode.prototype);

exports.Mode = Mode;
});