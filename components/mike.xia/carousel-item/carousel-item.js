BEST.module('mike.xia:carousel-item', {
    behaviors: {
        '#container' : {
          size : '[[identity|containerSize]]',
          style : {
            overflow : 'hidden',
            backgroundImage : 'url(https://tedcdnpi-a.akamaihd.net/r/images.ted.com/images/ted/9479c4b2b5b202d0fa1b11e9d3e80ff934f883c0_2880x1620.jpg?w=580&quality=90)'
          },
          origin : [0.5, 0.5],
          scale : function(containerScale) {
            return [containerScale, containerScale, containerScale];
          }
        },
        '#title' : {
          content : '[[identity|itemTitle]]',
          position : '[[identity|itemTitlePosition]]',
          size : '[[identity|contentSize]]'
        },
        '#description' : {
          content : '[[identity|itemDescription]]',
          position : '[[identity|itemDescriptionPosition]]',
          size : '[[identity|contentSize]]'
        },
        '#speaker-name' : {
          content : '[[identity|itemSpeakerName]]',
          position : '[[identity|itemSpeakerNamePosition]]',
          size : '[[identity|contentSize]]'
        },
        '#detail' : {
          content : '[[identity|itemDetail]]',
          position : '[[identity|itemDetailPosition]]',
          size : '[[identity|contentSize]]'
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
        '#container' : {
          'mouseover' : function($state, $payload) {
            var transition = { duration : 350, curve : 'outExpo' };

            $state.set('containerScale', 1.25, transition);
            $state.set('itemSpeakerNamePosition', [30, 60], transition);
            $state.set('itemTitlePosition', [30, 80], transition);
            
            $state.set('itemDetailPosition', [30, 190], transition);
            $state.set('itemDescriptionPosition', [30, 220], transition);
          },
          'mouseleave' : function($state, $payload) {
            var transition = { duration : 350, curve : 'outExpo' };

            $state.set('containerScale', 1, transition);
            $state.set('itemSpeakerNamePosition', [30, 240], transition);
            $state.set('itemTitlePosition', [30, 260], transition);
            $state.set('itemDetailPosition', [30, 400], transition);
            $state.set('itemDescriptionPosition', [30, 400], transition);
          },
          'click' : function($state, $payload) {
            console.log('clicked!');
          }
        },
        '#description' : {
          'size-change' : function($state, $payload) {
                console.log('desc size', $payload);
          }
        },
        '#title' : {
          'size-change' : function($state, $payload) {
                console.log('title size', $payload);
          }
        },
        '#detail' : {
          'size-change' : function($state, $payload) {
                console.log('detail size', $payload);
          }
        },
        '#speaker-name' : {
          'size-change' : function($state, $payload) {
                console.log('speaker-name size', $payload);
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
      itemSpeakerNamePosition : [30, 240],
      itemTitlePosition : [30, 260],
      itemDetailPosition : [30, 400],
      itemDescriptionPosition : [30, 400],

      containerSize : [716, 401],
      contentSize : [716 - 60, true],
      containerScale : 1
    },
    tree: 'carousel-item.jade'
})
.config({
    includes: ['carousel-item.css']
});
