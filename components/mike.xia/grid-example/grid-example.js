FamousFramework.scene('mike.xia:grid-example', {
    behaviors: {
        '$self': {
        },
        '.scroll-view' : {
            'mount-point' : [0.5, 0.5],
            'align' : [0.5, 0.5],
            'direction' : 'vertical',
            'size' : '[[identity|scrollViewSize]]',
            'item-sizes' : function(gridCount, gridSize) {
                var sizes = [];
                for(var i=0; i<gridCount; i++) {
                    sizes.push(gridSize);
                }
                return sizes;
            }
        },
        '.grid-view' : {
            'grid-size' : '[[identity|gridSize]]',
            '$repeat' : function(gridCount, itemSize, itemCount) {
                var grids = [];
                for(var i=0; i<gridCount; i++) {
                    grids.push({
                        'dimension' : [4, Math.ceil(itemCount / 4)],
                        'item-size' : itemSize
                    });
                }
                return grids;
            }
        },
        '.grid-view-item' : {
            style: {
                'backgroundColor' : 'white',
                'font-family' : 'Lato',
            },
            '$repeat' : function(itemCount, itemSize) {
                var stuff = []; 
                for(var i=0; i<itemCount; i++) {
                    stuff.push({
                        'square-size' : itemSize,
                        'square-mount-point' : [0, 0],
                        'square-align' : [0, 0]
                    });
                }
                return stuff;
            }
        }
    },
    events: {
        '$lifecycle' : {
            'pre-load' : function() {

            }
        }
    },
    states: {
        gridCount : 5,
        scrollViewSize : [320, 568],
        gridSize : [320, 320],
        itemCount : 16,
        itemSize : [80, 80]
    }, 
    tree: `
        <scroll-view class="scroll-view">
            <grid-view class="grid-view scroll-view-item">
                <clickable-square class="grid-view-item">
            </grid-view>
        </scroll-view>
    `
})
.config({
    imports: {
        'mike.xia' : ['grid-view', 'scroll-view', 'carousel-item'],
        'famous-demos' : ['clickable-square']
    }
});
