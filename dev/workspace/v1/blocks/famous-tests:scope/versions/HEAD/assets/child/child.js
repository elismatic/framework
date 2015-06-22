'use strict';

FamousFramework.module('famous-tests:scope:child', {
    behaviors: {
        '#node': {
            style: {
                'background-color': 'gray'
            },
            size: [100, 100]
        }
    },
    tree: '\n        <node id=\'node\'></node>\n    '
});