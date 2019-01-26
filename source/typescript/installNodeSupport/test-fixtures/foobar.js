"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("bar/function");
var function_2 = require("foo/function");
function foobar() {
    return function_2.foo() + function_1.bar();
}
exports.foobar = foobar;
//# sourceMappingURL=foobar.js.map