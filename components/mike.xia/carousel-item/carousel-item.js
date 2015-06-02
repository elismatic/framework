BEST.scene('mike.xia:carousel-item', 'HEAD', {
    behaviors: {
        '#container' : {
          position : [100, 100],
          size : function(containerSize) {
            return containerSize;
          },
          overflow : 'hidden'
        },
        '#title' : {
          content : 'hello',
          position : [-10, 0],
          style : {
            backgroundColor : 'green'
          }
        }
    },
    events: {
        $public : {
          // size : '[[setter|container-size]]',
          'set-size' : function($state, $payload) {
            $state.set('containerSize', $payload);
          }
        }
    },
    states: {
        'containerSize' : [100, 100]
    },
    tree: 'carousel-item.jade'
});
