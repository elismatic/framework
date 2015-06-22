'use strict';

FamousFramework.scene('famous-tests:dispatcher:broadcasting', {
    behaviors: {
        '#parent': {
            'size': [window.innerWidth, window.innerHeight]
        }
    },
    events: {
        '#parent': {
            'click': function ($dispatcher) {
                $dispatcher.broadcast('set-child-size', [600, 600]);
            }
        }
    },
    states: {},
    tree: '\n        <node id="parent">\n            <child id="child"></child>\n        </node>\n    '
}).config({
    imports: {
        'famous-tests:dispatcher:broadcasting': ['child']
    }
});