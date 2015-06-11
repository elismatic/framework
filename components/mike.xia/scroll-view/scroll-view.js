BEST.scene('mike.xia:scroll-view', {
    behaviors: {
        '$self' : {
          size : '[[identity|scrollViewSize]]',
          style : function(direction) {
            return {
              'overflow-x' : (direction === 'horizontal' ? 'scroll' : 'hidden'),
              'overflow-y' : (direction === 'vertical' ? 'scroll' : 'hidden')
            }
          }
        },
        '.item' : {
          'position' : function(direction, $index, itemSizes) {
            var sizeIndex = (direction === 'horizontal' ? 0 : 1);

            var position = [0, 0, 0];
            for(var i=0; i<$index; i++) {
              var itemSize = itemSizes[i];
              position[sizeIndex] += itemSize ? itemSize[sizeIndex] : 0;
            }
            return position;
          },
          '$yield' : '.scroll-view-item'
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function($state) {
            }
        },
        $public : {
          'direction' : '[[setter]]',
          'item-sizes' : '[[setter|camel]]',
          'item-height' : '[[setter|camel]]',
          'scroll-view-size' : '[[setter|camel]]'
        },
        '.item' : {
          'size-change' : function($state, $payload, $index) {
            console.log($payload, $index);
          }
        }
    },
    states: {
      'direction' : 'horizontal',
      'scrollViewSize' : [400, 800],
      'itemSizes' : []
    },
    tree: 'scroll-view.jade'
});
