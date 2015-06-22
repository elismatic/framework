'use strict';

FamousFramework.scene('famous-tests:engine-integration', {
    tree: '\n        <h1 style="color:white;">You should see a red box. That box is controlled by raw platform code.</h1>\n        <node id="ctx"></node>\n    ',
    behaviors: {
        '#ctx': {
            'position': [100, 100]
        }
    }
}).config({
    includes: ['my-famous.js', 'foo.css']
});