var layouts = [
    [{size:3,startPos:[0,0]},{size:2,startPos:[3,0]},{size:1,startPos:[3,2]},{size:1,startPos:[0,3]},{size:1,startPos:[1,3]},{size:1,startPos:[2,3]},{size:2,startPos:[3,3]}],
    // [{size:3,startPos:[0,0]},{size:2,startPos:[3,1]},{size:1,startPos:[3,0]},{size:1,startPos:[0,3]},{size:1,startPos:[3,3]},{size:1,startPos:[3,4]},{size:2,startPos:[1,3]}],
    // [{size:3,startPos:[2,0]},{size:2,startPos:[0,1]},{size:1,startPos:[0,3]},{size:1,startPos:[0,4]},{size:1,startPos:[3,3]},{size:1,startPos:[4,3]},{size:2,startPos:[1,3]}]
];

BEST.module('creative:carousel', 'HEAD', {
    behaviors: {
        '.element': {
            '$repeat': function (layouts, paddingSize, gridSize) {
                var result = [];

                for (let l = 0; l < layouts.length; l++) {
                    for (let i = 0; i < layouts[l].length; i++) {
                        result.push({
                            'align': [layouts[l][i].startPos[0] / gridSize[0], layouts[l][i].startPos[1] / gridSize[1]],
                            'size-proportional': [layouts[l][i].size / gridSize[0], layouts[l][i].size / gridSize[1]],
                            'size-differential': [-paddingSize, -paddingSize],
                        });
                    }
                }

                return result;
            },
            style: function($index) {
                return {
                    'background-size': 'cover',
                    'background-position': '50% 50%',
                    'background-image': 'url(@{CDN_PATH}images/' + $index + '.jpg)'
                }
            },
            position : function($index, offsets) {
                return [offsets[$index], 0];
            }
        },
    },
    events: {
        '#app': {
            'click': function($state) {
                var offsets = $state.get('offsets');
                for(var i=0; i<offsets.length; i++) {
                    var oldVal = offsets[i];
                    $state
                        .set(['offsets', i], oldVal, { duration : i * 50 })
                        .thenSet(['offsets', i], oldVal + 300, { duration : 800, curve : 'outBack' });
                }
            }
        }
    },
    states: {
        offsets: [0, 0, 0, 0, 0, 0, 0],
        unusedArr : [0, 0, 0, 0, 0, 0, 0],
        layouts: layouts,
        gridSize: [5, 5],
        paddingSize: 10,
        depthDistance: 1500
    },
    tree: 'carousel.jade'
})
.config({
    includes: ['carousel.css'],
    // imports: {
    //     'creative:carousel' : ['carousel-item']
    // }
});

// document.addEventListener('keydown', function(e) {
//     console.log('yolo'); // keyevents only seem to work when adding them straight to the window
// });