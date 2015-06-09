BEST.scene('famous-tests:static-assets', {
    behaviors: {
        '#one-a': {
            'content': '<img src="{{@assets/excite.png}}"><p style="color:white;">You should see several images on this page, showing that assets can be loaded/referenced in a variety of ways</p>'
        },
        // Content is defined inside of the tree
        '#one-b': {
            'position' : [400, 0]
        },
        '#two': {
            'content': function(imageTwoPath) {
                // Alternative syntax for inferring asset path name.
                // {{@CDN_PATH}} is a keyword that will be evaluated during compilation
                // to match the CDN location where this component is hosted.
                return '<img src="{{@CDN_PATH}}' + imageTwoPath + '">';
            },
            'position': [0, 300]
        },
        '#three': {
            'content': function(imageThreePath) {
                // {{@CDN_PATH|username:component}} is a keyword that will be evaluated during compilation
                // to match the CDN location where `username:component` is hosted.
                return '<img src="{{@CDN_PATH|famous-tests:static-assets:more-assets}}' + imageThreePath + '">';
            },
            'position': [0, 600]
        },
        '#four': {
            'template': function(imageFourPath) {
                return {
                    imageFourPath: imageFourPath
                }
            },
            'position': [400, 300]
        }
    },
    states: {
        imageTwoPath: 'assets/excite2.png', 
        imageThreePath: 'assets/excite3.png',
        imageFourPath: '{{@assets/excite2.png}}'
    },
    tree: `
        <ui-element id="one-a">
        </ui-element>

        <ui-element id="one-b">
            <img src="{{@assets/excite.png}}">
        </ui-element>

        <ui-element id="two"></ui-element>

        <ui-element id="three"></ui-element>

        <ui-element id="four">
            <img src="{{imageFourPath}}">
        </ui-element>
    `,
});
