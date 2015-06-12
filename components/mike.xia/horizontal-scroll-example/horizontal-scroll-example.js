FamousFramework.scene('mike.xia:horizontal-scroll-example', {
    behaviors: {
        '$self': {
        },
        '.scroll-view' : {
            'direction' : 'vertical',
            'item-sizes' : function(tweetCount, tweetSize) {
                var sizes = [];
                for(var i=0; i<tweetCount; i++) {
                    sizes.push(tweetSize);
                }
                return sizes;
            }
        },
        '.scroll-view-item' : {
            style: {
                'border' : '1px solid black',
                'backgroundColor' : 'white',
                'font-family' : 'Lato',
                'font-size' : '30px'
            },
            '$repeat' : function(tweetCount, tweetSize) {
                var stuff = []; 
                for(var i=0; i<tweetCount; i++) {
                    stuff.push({
                        'square-size' : tweetSize,
                        'square-mount-point' : [0, 0],
                        'square-align' : [0, 0]
                    });
                }
                return stuff;
            }
        }
    },
    events: {
    },
    states: {
        tweetCount : 50,
        tweetSize : [400, 100]
    }, 
    tree: 'horizontal-scroll-example.jade'
})
.config({
    imports: {
        'mike.xia' : ['scroll-view'],
        'famous-demos' : ['clickable-square']
    }
});
