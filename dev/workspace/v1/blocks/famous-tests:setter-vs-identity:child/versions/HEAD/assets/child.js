'use strict';

FamousFramework.scene('famous-tests:setter-vs-identity:child', {
    behaviors: {
        '#square': {
            'size': '[[identity|squareSize]]', // try changing this to '[[setter|squareSize]]'
            'style': { 'background': 'whitesmoke' }
        }
    },
    events: {
        '$public': {
            'childSize': '[[setter|squareSize]]' // try changing this to '[[identity|squareSize]]'
        }
    },
    states: {
        'squareSize': [200, 200]
    },
    tree: '\n        <node id="square"></node>\n    '
});