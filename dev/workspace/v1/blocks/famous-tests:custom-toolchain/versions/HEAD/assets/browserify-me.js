'use strict';

var qs = require('qs');

console.log(qs.parse('a=c'));

FamousFramework.scene('famous-tests:custom-toolchain', {
    tree: '\n        <h1 style="color:white;">You should see the console log something</h1>\n        <node><p>Foo</p></node>\n    '
});