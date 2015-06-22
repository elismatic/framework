'use strict';

FamousFramework.module('famous-tests:opacity', {
    behaviors: {
        '$self': {
            size: [800, 50]
        },
        '#node1': {
            position: [0, 50]
        },
        '#node2': {
            position: [0, 300],
            opacity: 0.2
        },
        '#node3label': {
            content: 'Opacity of 0% applied to the node beneath this label',
            style: {
                color: 'white'
            },
            size: [200, 25],
            position: [0, 550]
        },
        '#node3': {
            position: [0, 600],
            opacity: 0
        },
        '.block': {
            style: '[[identity|myStyle]]',
            size: [200, 200]
        },

        '#child1': {
            position: [300, 300]
        },
        '#child2': {
            position: [600, 50],
            opacity: 0
        },
        '#child3': {
            position: [600, 50],
            opacity: 1
        }
    },
    events: {},
    states: {
        myStyle: {
            'background-color': 'white',
            'text-align': 'center',
            'line-height': '200px',
            'color': 'black',
            'cursor': 'pointer'
        }
    },
    tree: '\n        <h1 style="color:white;">You should see two squares, one opaque, and the other semi-transparent. You should also see one logo.</h1>\n\n        <node id=\'node1\' class=\'block\'>\n            <node>\n                <node>\n                    <div>Opacity: 100%</div>\n                </node>\n            </node>\n        </node>\n\n        <node id=\'node2\' class=\'block\'>\n            <node>\n                <node>\n                    <div>Opacity: 20%</div>\n                </node>\n            </node>\n        </node>\n\n        <node id=\'node3label\'></node>\n        <node id=\'node3\' class=\'block\'>\n            <node>\n                <node>\n                    <div>Opacity: 0%</div>\n                </node>\n            </node>\n        </node>\n\n        <famous-tests:opacity:child id="child1"></famous-tests:opacity:child>\n        <famous-tests:opacity:child id="child2"></famous-tests:opacity:child>\n        <famous-tests:opacity:child id="child3"></famous-tests:opacity:child>\n    '
});