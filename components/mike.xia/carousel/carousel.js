BEST.scene('mike.xia:carousel', {
    behaviors: {
        '.scroll-item' : {
          //creates arbitrary views that could contain anything
          //from a tweet with image, title, etc,
          //to groups of views for a ted carousel
          '$repeat' : function(count) {
            var items = [];
            for(var i=0; i<count; i++) {
              items.push({
                content: 'item ' + i,
                size: [100, 100]
              });
            }
            return items;
          }
        }
    },
    events: {},
    states: {
        count : 10
    },
    tree: 'carousel.jade'
})
.config({
    // includes: [
    //     'assets/styles/twitter.css'
    // ],
    imports: {
        'mike.xia': ['scroll-view']
    }
});
