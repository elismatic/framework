BEST.scene('mike.xia:carousel-item', 'HEAD', {
    behaviors: {
        '#container' : {
          size : '[[identity|containerSize]]',
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
          itemContent : '[[setter]]',
          itemDescription : '[[setter]]',
          itemSpeakerName : '[[setter]]',
          containerSize : '[[setter]]'
        }
    },
    states: {
      itemContent : 'content here',
      itemDescription : 'description here',
      itemSpeakerName : 'speaker here',
      containerSize : [100, 100]
    },
    tree: 'carousel-item.jade'
});
