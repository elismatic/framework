BEST.scene('mike.xia:scroll-view', 'HEAD', {
    behaviors: {
        '#scroll-container' : {
          size : function(containerSize) {
            return containerSize;
          },
          overflow : function(direction) {
            return direction === 'horizontal' ? 'scroll-x' : 'scroll-y';
          },
        },
        '#scroll-item' : {
          'position' : function($index) {
            console.log($index);
            return [0, 0, 0]
          },
          '$yield' : '.scroll-item'
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function($state) {
              console.log('LOADED SCROLL-VIEW')
            }
        },
        $public : {
          // size : '[[setter|container-size]]',
          'size' : function($state, $payload) {
            $state.set('containerSize', $payload);
          }
        }
    },
    states: {
      'direction' : 'vertical',
      'containerSize' : [100, 500],
      'itemHeight' : 200
    },
    tree: 'scroll-view.jade'
});
