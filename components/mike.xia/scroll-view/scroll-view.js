FamousFramework.scene('mike.xia:scroll-view', {
    behaviors: {
        '$self' : {
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
              position[sizeIndex] += itemSizes[i] ? itemSizes[i][sizeIndex] : 0;
            }
            return position;
          },
          '$yield' : '.scroll-view-item'
        }
    },
    events: {
        $public : {
          'direction' : '[[setter]]',
          'item-sizes' : '[[setter|camel]]',
          'item-height' : '[[setter|camel]]'
        },
        '.item' : {
          'size-change' : function($state, $payload, $index) {
            //BUG $index is always max index.
            console.log('scroll-view got item size-change', $index, $payload)
            // $state.set(['itemSizes', $index], $payload)
          }
        }
    },
    states: {
      'direction' : 'horizontal',
      'itemSizes' : []
    },
    tree: `<node class="item"></node>`
});
