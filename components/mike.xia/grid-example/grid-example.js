FamousFramework.scene('mike.xia:grid-example', {
    behaviors: {
        '$self': {
        },
        '.grid-view' : {
            'align' : [0.5, 0.5],
            'mount-point' : [0.5, 0.5],
            'grid-size' : '[[identity|gridSize]]',
            'item-size' : '[[identity|itemSize]]',
            'dimension' : function(itemCount) {
                return [4, Math.ceil(itemCount / 4)]
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
        gridSize : [320, 320],
        itemCount : 16,
        itemSize : [80, 80]
    }, 
    tree: `
        <grid-view class="grid-view">
            <clickable-square class="grid-view-item">
        </grid-view>
    `
})
.config({
    imports: {
        'mike.xia' : ['grid-view', 'scroll-view', 'carousel-item', 'cat-square'],
        'famous-demos' : ['clickable-square']
    }
});
