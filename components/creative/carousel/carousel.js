// var layouts = [
//     [{size:3,startPos:[0,0]},{size:2,startPos:[3,0]},{size:1,startPos:[3,2]},{size:1,startPos:[0,3]},{size:1,startPos:[1,3]},{size:1,startPos:[2,3]},{size:2,startPos:[3,3]}],
//     [{size:3,startPos:[0,0]},{size:2,startPos:[3,1]},{size:1,startPos:[3,0]},{size:1,startPos:[0,3]},{size:1,startPos:[3,3]},{size:1,startPos:[3,4]},{size:2,startPos:[1,3]}],
//     [{size:3,startPos:[2,0]},{size:2,startPos:[0,1]},{size:1,startPos:[0,3]},{size:1,startPos:[0,4]},{size:1,startPos:[3,3]},{size:1,startPos:[4,3]},{size:2,startPos:[1,3]}]
// ];

// var offsets = [];

// for(var i = 0; i < layouts.length; i++) {
//     for(var k = 0; k < layouts[i].length; k++) {
//         offsets.push(-1500 * i)
//     }
// }

// function clamp(value, lower, upper) {
//     return value < lower ? lower : value > upper ? upper : value;
// }

// BEST.module('creative:carousel', 'HEAD', {
//     behaviors: {
//         '.element': {
//             '$repeat': function (layouts, paddingSize, gridSize) {
//                 var result = [];

//                 for (let l = 0; l < layouts.length; l++) {
//                     for (let i = 0; i < layouts[l].length; i++) {
//                         result.push({
//                             'align': [layouts[l][i].startPos[0] / gridSize[0], layouts[l][i].startPos[1] / gridSize[1]],
//                             'size-proportional': [layouts[l][i].size / gridSize[0], layouts[l][i].size / gridSize[1]],
//                             'size-differential': [-paddingSize, -paddingSize],
//                         });
//                     }
//                 }

//                 return result;
//             },
//             style: function($index) {
//                 return {
//                     'background-size': 'cover',
//                     'background-position': '50% 50%',
//                     'background-image': 'url(@{CDN_PATH}images/' + $index + '.jpg)'
//                 }
//             },
//             position : function($index, offsets) {
//                 return [0, 0, offsets[$index]];
//             },
//             opacity: function($index, offsets, depthDistance) {
//                 let opacity,
//                     offset = offsets[$index];

//                 if(offset >= 0) {
//                     opacity = clamp(1 - offset / 750, 0, 1);
//                 }
//                 else {
//                     opacity = clamp(1 - offset / (-depthDistance * 2), 0, 1);
//                 }

//                 return opacity;
//             }
//         },
//     },
//     events: {
//         '$lifecycle': {
//             'post-load': function($state) {
//                 console.log('done loading');
//             }
//         },

//         '#app': {
//             'click': function($state) {
//                 // $state.set('zPos', $state.get('zPos') + 1);

//                 var offsets = $state.get('offsets');
//                     // zPos = $state.get('zPos');

//                 for(var i = 0; i < offsets.length; i++) {
//                     var oldVal = offsets[i];

//                     $state
//                         // .chain(['offsets', i])
//                         // .set(['offsets', i], oldVal, { duration : i * 50 })
//                         .set(['offsets', i], (oldVal + 1500), { duration : 800, curve : 'outBack' })
//                         .thenSet(['offsets', i], oldVal > -100 ? oldVal - 3000 : oldVal + 1500);
//                 }
//             }
//         }
//     },
//     states: {
//         offsets: offsets,
//         // zPos: 0,
//         unusedArr : [0, 0, 0, 0, 0, 0, 0],
//         layouts: layouts,
//         gridSize: [5, 5],
//         paddingSize: 10,
//         depthDistance: 1500
//     },
//     tree: 'carousel.jade'
// })
// .config({
//     includes: ['carousel.css'],
//     // imports: {
//     //     'creative:carousel' : ['carousel-item']
//     // }