FamousFramework.scene('mike.xia:grid-view', {
    behaviors: {
        '$self' : {
            size : '[[identity|gridSize]]'
        },
        '.item' : {
          'position' : function(dimension, itemSize, $index) {
            var row = Math.floor($index/dimension[0]);
            var column = $index%dimension[0];
            return [column * itemSize[0], row * itemSize[1], 0];
          },
          '$yield' : '.grid-view-item'
        }
    },
    events: {
        $public : {
          'dimension' : '[[setter]]',
          'grid-size' : '[[setter|camel]]',
          'item-size' : '[[setter|camel]]'
        },
        '$self' : {
            'size-change' : function($state, $payload) {
                console.log($payload);
            }
        }
    },
    states: {
      'dimension' : [0, 0],
      'itemSize' : [0, 0],
      'gridSize' : [0, 0]
    },
    tree : `<node class="item"></node>`
});