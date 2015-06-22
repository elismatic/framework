'use strict';

FamousFramework.scene('famous-tests:does-behavior-void:child', {
    behaviors: {
        '#child': {
            'size': [200, 200],
            'style': {
                'background': 'whitesmoke'
            }
        }
    },
    events: {},
    states: {},
    tree: '\n        <node id="child"></node>\n    '
});