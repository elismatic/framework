var emojis = [
    '&#x1F520;',
    '&#x1F521;',
    '&#x1F524;',
    '&#x1F300;',
    '&#x1F301;',
    '&#x1F302;',
    '&#x1F303;',
    '&#x1F304;',
    '&#x1F305;',
    '&#x1F306;',
    '&#x1F307;',
    '&#x1F308;',
    '&#x1F309;',
    '&#x1F30A;',
    '&#x1F30B;',
    '&#x1F30C;',
    '&#x1F30D;',
    '&#x1F30E;',
    '&#x1F30F;',
    '&#x1F310;',
    '&#x1F311;',
    '&#x1F312;',
    '&#x1F313;',
    '&#x1F314;',
    '&#x1F315;',
    '&#x1F316;',
    '&#x1F317;',
    '&#x1F318;',
    '&#x1F319;',
    '&#x1F31A;',
    '&#x1F31B;',
    '&#x1F31C;',
    '&#x1F31D;',
    '&#x1F31E;',
    '&#x1F31F;',
    '&#x1F320;',
    '&#x1F330;',
    '&#x1F331;',
    '&#x1F332;',
    '&#x1F333;',
    '&#x1F334;',
    '&#x1F335;',
    '&#x1F337;',
    '&#x1F338;',
    '&#x1F339;',
    '&#x1F33A;',
    '&#x1F33B;',
    '&#x1F33C;',
    '&#x1F33D;',
    '&#x1F33E;',
    '&#x1F33F;',
    '&#x1F340;',
    '&#x1F341;',
    '&#x1F342;',
    '&#x1F343;',
    '&#x1F344;',
    '&#x1F345;',
    '&#x1F346;',
    '&#x1F347;',
    '&#x1F348;',
    '&#x1F349;',
    '&#x1F34A;',
    '&#x1F34B;',
    '&#x1F34C;',
    '&#x1F34D;',
    '&#x1F34E;',
    '&#x1F34F;',
    '&#x1F350;',
    '&#x1F351;',
    '&#x1F352;',
    '&#x1F353;',
    '&#x1F354;',
    '&#x1F355;',
    '&#x1F356;',
    '&#x1F357;',
    '&#x1F358;',
    '&#x1F359;',
    '&#x1F35A;',
    '&#x1F35B;',
    '&#x1F35C;',
    '&#x1F35D;',
    '&#x1F35E;',
    '&#x1F35F;',
    '&#x1F360;',
    '&#x1F361;',
    '&#x1F362;',
    '&#x1F363;',
    '&#x1F364;',
    '&#x1F365;',
    '&#x1F366;',
    '&#x1F367;',
    '&#x1F368;',
    '&#x1F369;',
    '&#x1F36A;',
    '&#x1F36B;',
    '&#x1F36C;',
    '&#x1F36D;',
    '&#x1F36E;',
    '&#x1F36F;',
    '&#x1F370;',
    '&#x1F371;',
    '&#x1F372;',
    '&#x1F373;',
    '&#x1F374;',
    '&#x1F375;',
    '&#x1F376;',
    '&#x1F377;',
    '&#x1F378;',
    '&#x1F379;',
    '&#x1F37A;',
    '&#x1F37B;',
    '&#x1F37C;',
    '&#x1F380;',
    '&#x1F381;',
    '&#x1F382;',
    '&#x1F383;',
    '&#x1F384;',
    '&#x1F385;',
    '&#x1F386;',
    '&#x1F387;',
    '&#x1F388;',
    '&#x1F389;',
    '&#x1F38A;',
    '&#x1F38B;',
    '&#x1F38C;',
    '&#x1F38D;',
    '&#x1F38E;',
    '&#x1F38F;',
    '&#x1F390;'
];

BEST.module('mike.xia:crazy-pad', 'HEAD', {
    behaviors: {
        '.number-pad' : {
            '$repeat' : function(padCount) {
                var pads = [];
                for(var i=0; i<padCount; i++) {
                    var keys = [];
                    for(var j=0; j<13; j++) {
                        keys.push(emojis[j + i * padCount])
                    }
                    pads.push({ keys : keys });
                }
                return pads;
            },
            'position' : function($index, padCount) {
                if($index == 6) return [0, 0]
                var step = 2 * Math.PI / (padCount-1);
                return [
                    300 * Math.sin(step * $index),
                    300 * Math.cos(step * $index)
                ]
            }
        }
    },
    events: {
        '.number-pad' : {
            // 'mouseover' : function($state) {
            //     console.log('mouseover');
            //     // console.log('click' + $state.get('$index'));
            // }
            'number-pad-click': function() {
                console.log('hell')
            }
        }
    },
    states: {
        padCount : 7
    },
    tree: 'crazy-pad.jade',
})
.config({
    imports: {
        'mike.xia' : ['number-pad']
    }
});
