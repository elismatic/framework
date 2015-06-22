'use strict';

FamousFramework.scene('famous-tests:timeline-example', {
    behaviors: {
        '#circle': {
            'size': [200, 200],
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'origin': [0.5, 0.5],
            'style': {
                'background': 'whitesmoke',
                'border-radius': '50%'
            }
        },
        '#play': { 'position': [-100, 250] },
        '#pause': { 'position': [0, 250] },
        '#rewind': { 'position': [100, 250] },
        '.button': {
            'size': [100, 25],
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'style': {
                'background': 'whitesmoke',
                'color': '#222',
                'font-size': '20px',
                'font-weight': 'bold',
                'line-height': '1.2',
                'text-align': 'center',
                'cursor': 'pointer',
                'font-family': 'Lato'
            }
        }
    },
    events: {
        '#play': {
            'click': function ($timelines) {
                $timelines.get('scale-animation').start({ duration: 2000 });
            }
        },
        '#pause': {
            'click': function ($timelines) {
                var scaleTimeline = $timelines.get('scale-animation');

                if (scaleTimeline.isPaused()) scaleTimeline.resume();else scaleTimeline.halt();
            }
        },
        '#rewind': {
            'click': function ($timelines) {
                $timelines.get('scale-animation').rewind();
            }
        }
    },
    states: {},
    tree: '\n        <node id="circle"></node>\n\n        <node id="play" class="button"> <div>Play</div> </node>\n        <node id="pause" class="button"> <div>Pause</div> </node>\n        <node id="rewind" class="button"> <div>Rewind</div> </node>\n    '
}).timelines({
    'scale-animation': {
        '#circle': {
            'scale': {
                '0%': { value: [1, 1], curve: 'outBack' },
                '50%': { value: [2, 2], curve: 'outBack' },
                '100%': { value: [1, 1], curve: 'outBack' }
            },
            'position': {
                '0%': { value: [0, 0], curve: 'outBack' },
                '50%': { value: [0, -200], curve: 'outBack' },
                '100%': { value: [0, 0], curve: 'outBack' }
            }
        }
    }
});