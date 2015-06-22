'use strict';

FamousFramework.scene('famous-tests:component-targeting:child', {
    behaviors: {
        '#child': {
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'size': '[[identity|mySize]]',
            'style': {
                'background': 'whitesmoke'
            }
        }
    },
    events: {
        '$public': {
            'my-size': '[[setter|camel]]'
        }
    },
    states: {
        'mySize': [100, 100]
    },
    tree: '\n        <node id="child"></node>\n    '
});