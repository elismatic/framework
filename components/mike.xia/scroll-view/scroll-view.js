// //in a parent module, which uses scroll-view ..

// view#twitter-app
//   tweet.scroll-item

// '.scroll-item' : {
//   //creates arbitrary views that could contain anything
//   //from a tweet with image, title, etc,
//   //to groups of views for a ted carousel
//   '$repeat' : function(tweetsData) {
//     var tweets = [];
//     for(var i=0; i<tweetsData.length; i++) {
//       tweets.push({
//         blahblah
//       })

//       //true sizing?  
//     }
//     return tweets;
//   }
// }

BEST.scene('mike.xia:scroll-view', 'HEAD', {
    behaviors: {
        '#scroll-container' : {
          size : function(containerSize) {
            return containerSize;
          },
          overflow : function(direction) {
            return direction === 'horizontal' ? 'scroll-x' : 'scroll-y';
          }
        },
        '#scroll-item' : {
          'position' : function($index) {
            console.log($index);
          },
          '$yield' : '.scroll-item'
        }
    },
    events: {
        //lifecycle

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
