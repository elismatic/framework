BEST.module('mike.xia:carousel-item', {
    behaviors: {
        '#container' : {
          size : '[[identity|containerSize]]',
          style : {
            overflow : 'hidden',
            backgroundImage : 'url(https://tedcdnpi-a.akamaihd.net/r/images.ted.com/images/ted/9479c4b2b5b202d0fa1b11e9d3e80ff934f883c0_2880x1620.jpg?w=580&quality=90)'
          }
        },
        '#title' : {
          content : '[[identity|itemTitle]]',
          position : '[[identity|itemTitlePosition]]'
        },
        '#speaker-name' : {
          content : '[[identity|itemSpeakerName]]',
          position : '[[identity|itemSpeakerNamePosition]]'
        },
        '#description' : {
          content : '[[identity|itemDescription]]',
          position : '[[identity|itemDescriptionPosition]]'
        },
        '#detail' : {
          content : '[[identity|itemDetail]]',
          position : '[[identity|itemDetailPosition]]'
        }
    },
    events: {
        $public : {
          itemTitle : '[[setter]]',
          itemDescription : '[[setter]]',
          itemSpeakerName : '[[setter]]',
          itemDetail : '[[setter]]',
          containerSize : '[[setter]]',
          itemSpeakerNamePosition : '[[setter]]',
          itemTitlePosition : '[[setter]]',
          itemDetailPosition : '[[setter]]',
          itemDescriptionPosition : '[[setter]]'
        },
        '#title' : {
          'size-change' : function($state, $payload) {
                console.log('title size', $payload);
          }
        }
    },
    states: {
      //content
      itemSpeakerName : 'Suki Kim',
      itemTitle : 'This is what it\'s like to teach in North Korea',
      itemDetail : '12:32 - 42K views - Jun 2015',
      itemDescription : 'Subtle motion happens around us all the time, including tiny vibrations caused by sound. New technology shows that we can pick up on these vibrations and actually re-create sound and conversations just from a video of a seemingly still object. But now Abe Davis takes it one step further: Watch him demo software that lets anyone interact with these hidden properties, just from a simple video.',
      //positions
      itemSpeakerNamePosition : [30, 60],
      itemTitlePosition : [30, 80],
      itemDetailPosition : [30, 190],
      itemDescriptionPosition : [30, 220],

      containerSize : [716, 401]
    },
    tree: 'carousel-item.jade'
})
.config({
    includes: ['carousel-item.css']
});
