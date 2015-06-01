// BEST.scene('mike.xia:carousel-item', 'HEAD', {
//     behaviors: {
//         'carousel-item-content': {

//         }
//     },
//     events: {
//         $public : {
//             // 'keys': 'setter',
//             // 'set-radius' : function($state, $payload) {
//             //     var radius = $state.get('radius');
//             //     for (var i = 0; i < radius.length; i++) {
//             //         radius[i] = $payload
//             //     };
//             //     $state.set('radius', radius, {duration: 500});
//             // }
//         },
//         'carousel-item-content': {
//             'click': function($dispatcher, $state, $payload) {
//                 // $dispatcher.emit('number-pad-click');

//                 // var endRadius;
//                 // var transition;
//                 // var delay;

//                 // if($state.get('open')) {
//                 //     $state.set('open', false);
//                 //     endRadius = 20;
//                 //     delay = 0;
//                 //     transition = { duration : 1200, curve : 'outExpo' };
//                 // }else {
//                 //     $state.set('open', true);
//                 //     delay = 30;
//                 //     endRadius = 100;
//                 //     transition = { duration : 400, curve : 'outExpo' };
//                 // }

//                 // for(var i=0; i<13; i++) {
//                 //     var oldVal = $state.get(['radius', i]);
//                 //     $state
//                 //         .set(['radius', i], oldVal, { duration : i * delay })
//                 //         .thenSet(['radius', i], endRadius, transition);
//                 // }
                
//             }
//         },
//     },
//     states: {
//         position: 0,
//         keys : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '#', '*', 'X'],
//         radius : [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
//         open : false,
//         rotationX : 0, 
//         rotationY : 0
//     },
//     tree: 'number-pad.jade'
// });

// // document.body.addEventListener()