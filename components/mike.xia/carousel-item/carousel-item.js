FamousFramework.module('mike.xia:carousel-item', {
    behaviors: {
        '$self' : {
          'size' : '[[identity|containerSize]]',
          'style' : {
            overflow : 'hidden',
            backgroundImage : 'url(https://tedcdnpi-a.akamaihd.net/r/images.ted.com/images/ted/9479c4b2b5b202d0fa1b11e9d3e80ff934f883c0_2880x1620.jpg?w=580&quality=90)'
          },
          'add-class' : ['carousel-item-background'],
          'mount-point' : [0.5, 0.5],
          'align' : [0.5, 0.5],
          'origin' : [0.5, 0.5],
          'scale' : function(containerScale) {
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
          position : [30, 220],
          size : '[[identity|contentSize]]',
          opacity : '[[identity|itemDescriptionOpacity]]'
        },
        '#speaker-name' : {
          content : '[[identity|itemSpeakerName]]',
          position : '[[identity|itemSpeakerNamePosition]]',
          size : '[[identity|contentSize]]'
        },
        '#detail' : {
          content : '[[identity|itemDetail]]',
          position : [30, 190],
          size : '[[identity|contentSize]]',
          opacity : '[[identity|itemDescriptionOpacity]]'
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
        '$self' : {
          'mouseover' : function($state, $payload) {
            var transition = { duration : 350, curve : 'outExpo' };

            $state.set({
              'containerScale': 1.25,
              'itemSpeakerNamePosition': [30, 60],
              'itemTitlePosition': [30, 80]
            }, transition)
            .thenSet('itemDescriptionOpacity', 1, transition);
          },
          'mouseleave' : function($state, $payload) {
            var transition = { duration : 350, curve : 'outExpo' };

            $state.set({
              'containerScale': 1, 
              'itemSpeakerNamePosition': [30, 240],
              'itemTitlePosition': [30, 260],
              'itemDescriptionOpacity': 0
            }, transition);
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
      itemSpeakerName : 'Suki Kim',
      itemTitle : 'This is what it\'s like to teach in North Korea',
      itemDetail : '12:32 - 42K views - Jun 2015',
      itemDescription : 'Subtle motion happens around us all the time, including tiny vibrations caused by sound. New technology shows that we can pick up on these vibrations and actually re-create sound and conversations just from a video of a seemingly still object. But now Abe Davis takes it one step further: Watch him demo software that lets anyone interact with these hidden properties, just from a simple video.',
      
      itemSpeakerNamePosition : [30, 240],
      itemTitlePosition : [30, 260],
      itemDescriptionOpacity : 0,
      containerSize : [716, 401],
      contentSize : [716 - 60, true],
      containerScale : 1
    },
    tree: 'carousel-item.jade'
})
.config({
    includes: ['carousel-item.css']
});
