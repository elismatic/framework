'use strict';

FamousFramework.scene('famous-tests:include-css', {
    tree: '\n        <h1 id="my-h1">Testing that CSS is included via includes correctly</h1>\n        <h2>You should see a blug background, white large header text, and three orange underlined ahoys.</h2>\n        <p class="p">Ahoy</p>\n        <p class="p">Ahoy</p>\n        <p class="p">Ahoy</p>\n    '
}).config({
    includes: ['a.css', 'b.css', 'c.css', 'd.css', 'e.css']
});