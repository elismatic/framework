'use strict';

FamousFramework.module('famous-tests:scope', {
    behaviors: {
        '#node': {
            'content': 'This square should be blue. \n\n The other square should be gray.',
            'position': [100, 100],
            style: {
                'background-color': 'blue',
                'color': 'white'
            },
            size: [200, 200]
        },
        '#child': {
            position: [350, 100]
        }
    },
    tree: '\n        <node id="node"></node>\n        <child id=\'child\'></child>\n    '
}).config({
    imports: {
        'famous-tests:scope': ['child']
    }
});