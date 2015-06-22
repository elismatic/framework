'use strict';

FamousFramework.scene('famous-tests:dispatcher:emit', {
    behaviors: {
        '#label': {
            position: [100, 20],
            size: [600, 25],
            content: 'Click on square, $index/$repeatPayload should be logged from dispatched event.',
            style: {
                color: 'white',
                'font-family': 'Lato'
            }
        },
        'child': {
            '$repeat': function (count) {
                var result = [];
                for (var i = 0; i < count; i++) {
                    result.push({
                        content: 'Item ' + i,
                        position: [100 + i * 150, 100]
                    });
                }
                return result;
            }
        }
    },
    events: {
        'child': {
            'custom-event': function ($payload, $index, $repeatPayload, $event) {
                console.log('Custom Event captured by parent:');
                console.log('event: ', $event);
                console.log('payload: ', $payload);
                console.log('$index: ', $index);
                console.log('$repeatPayload: ', $repeatPayload);
                console.log('----------------------------\n\n\n');
            }
        }
    },
    states: {
        count: 5
    },
    tree: '\n        <node id=\'label\'></node>\n        <child></child>\n    '
}).config({
    imports: {
        'famous-tests:dispatcher:emit': ['child']
    }
});