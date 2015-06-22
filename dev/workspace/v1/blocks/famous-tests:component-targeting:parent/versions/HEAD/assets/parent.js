'use strict';

FamousFramework.scene('famous-tests:component-targeting:parent', {
    behaviors: {
        'child': {
            'my-size': [400, 400]
        }
    },
    events: {},
    states: {},
    tree: '\n        <child></child>\n    '
}).config({
    imports: {
        'famous-tests:component-targeting': ['child']
    }

});