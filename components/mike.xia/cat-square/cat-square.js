FamousFramework.scene('mike.xia:cat-square', {
    behaviors: {
        '$self': {
            'size': '[[identity|squareSize]]',
            'align': '[[identity|squareAlign]]',
            'origin': '[[identity|squareOrigin]]',
            'mount-point' : '[[identity|squareMountPoint]]',
            'rotation-z' : '[[identity|angle]]',
            'style': function(squareSize) {
                console.log(squareSize[0] + 'px ' + squareSize[1] + 'px');
                return {
                    'background-size': squareSize[0] + 'px ' + squareSize[1] + 'px',
                    'background-repeat': 'no-repeat',
                    'overflow': 'hidden',
                    'background-image' : 'url(http://thecatapi.com/api/images/get?format=src&type=gif)'
                }
            },
            'unselectable': true
        }
    },
    events: {
        '$lifecycle' : {
            'post-load' : function($state) {
                //load cat image!
            }
        },
        $public : {
            'square-size' : '[[setter|camel]]',
            'square-mount-point' : '[[setter|camel]]',
            'square-align' : '[[setter|camel]]'
        },
        '$self': {
            'click': function($state) {
                $state.set('numberOfClicks', 1 + $state.get('numberOfClicks'));
                $state.set('angle', $state.get('angle') + Math.PI/2, {
                    duration: 500,
                    curve: 'outBounce'
                });
            }
        }
    },
    states: {
        catUrl : '',
        squareSize : [400, 400],
        squareAlign : [0.5, 0.5],
        squareOrigin : [0.5, 0.5],
        squareMountPoint : [0.5, 0.5],
        angle: 0
    },
    tree: `<div></div>`
});


