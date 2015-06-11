BEST.scene('mike.xia:grid-view', {
    behaviors: {
        '$self' : {
        },
        '.item' : {
          'position' : function(dimension, $index) {
            var row = Math.floor($index/dimension[0]);
            // var sizeIndex = (direction === 'horizontal' ? 0 : 1);
            // console.log(sizeIndex);
            // var position = [0, 0, 0];
            // for(var i=0; i<$index; i++) {
            //   var itemSize = itemSizes[i];
            //   position[sizeIndex] += itemSize ? itemSize[sizeIndex] : 0;
            // }
            // console.log(direction, position);
            // return position;
          },
          '$yield' : '.grid-view-item'
        }
    },
    events: {
        $public : {
          'dimension' : '[[setter]]',
           
        }
    },
    states: {
      'dimension' : [4, 4]
    },
    tree: 'grid-view.jade'
});
