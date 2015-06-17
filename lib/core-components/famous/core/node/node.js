FamousFramework.module('famous:core:node', {
    behaviors: {
        '$self' : {
            '$yield': true
        }
    },
    events: {
        '$public': {
            'add-class': function($DOMElement, $payload) { $DOMElement.addClass($payload); },
            'align': function($famousNode, $payload) { $famousNode.setAlign($payload[0], $payload[1], $payload[2]); },
            'align-x': function($famousNode, $payload) {
                var previousAlign = $famousNode.getAlign();
                $famousNode.setAlign($payload, previousAlign[1], previousAlign[2]);
            },
            'align-y': function($famousNode, $payload) {
                var previousAlign = $famousNode.getAlign();
                $famousNode.setAlign(previousAlign[0], $payload, previousAlign[2]);
            },
            'align-z': function($famousNode, $payload) {
                var previousAlign = $famousNode.getAlign();
                $famousNode.setAlign(previousAlign[0], previousAlign[1], $payload);
            },
            'attach': function($payload, $famousNode) {
                $payload($famousNode);
            },
            'attributes': function($DOMElement, $payload) {
                for (var attributeName in $payload) {
                    $DOMElement.setAttribute(attributeName, $payload[attributeName]);
                }
            },
            'backface-visible': function($state, $payload, $dispatcher) {
                var style = $state.get('style') || {};
                style['-webkit-backface-visibility'] = ($payload) ? 'visible' : 'hidden';
                style['backface-visibility'] = ($payload) ? 'visible' : 'hidden';
                $dispatcher.trigger('style', style);
            },
            'base-color': function($mesh, $payload, $state) {
                $mesh.setBaseColor(new Famous.utilities.Color($payload));
                if (!$state.get('hasGeometry')) {
                    $mesh.setGeometry(new Famous.webglGeometries.Plane());
                    $state.set('hasGeometry', true);
                }
            },
            'box-shadow': function($state, $payload, $dispatcher) {
                var style = $state.get('style') || {};
                style['-webkit-box-shadow'] = $payload;
                style['-moz-box-shadow'] = $payload;
                style['box-shadow'] = $payload;
                $dispatcher.trigger('style', style);
            },
            'camera': function($camera, $payload) { $camera.set($payload[0], $payload[1]); },
            'content': function($DOMElement, $payload) {
                $DOMElement.setContent($payload);
            },
            'geometry': function($mesh, $payload, $state) {
                $mesh.setGeometry(new Famous.webglGeometries[$payload.shape]($payload.options));
                $state.set('hasGeometry', true);
            },
            'glossiness': function($mesh, $payload) {
                $mesh.setGlossiness($payload.glossiness, $payload.strength);
            },
            'id': function($DOMElement, $payload) { $DOMElement.setId($payload); },
            'mount-point': function($famousNode, $payload) { $famousNode.setMountPoint($payload[0], $payload[1], $payload[2]); },
            'mount-point-x': function($famousNode, $payload) {
                var previousMountPoint = $famousNode.getMountPoint();
                $famousNode.setMountPoint($payload, previousMountPoint[1], previousMountPoint[2]);
            },
            'mount-point-y': function($famousNode, $payload) {
                var previousMountPoint = $famousNode.getMountPoint();
                $famousNode.setMountPoint(previousMountPoint[0], $payload, previousMountPoint[2]);
            },
            'mount-point-z': function($famousNode, $payload) {
                var previousMountPoint = $famousNode.getMountPoint();
                $famousNode.setMountPoint(previousMountPoint[0], previousMountPoint[1], $payload);
            },
            'normals': function($mesh, $payload) {
                $mesh.setNormals($payload);
            },
            'offset-position': function($famousNode, $payload) {
                var currentPos = $famousNode.getPosition();
                $famousNode.setPosition(
                    currentPos[0] + $payload[0] || 0,
                    currentPos[1] + $payload[1] || 0,
                    currentPos[2] + $payload[2] || 0
                );
            },
            'opacity': function($famousNode, $payload) { $famousNode.setOpacity($payload); },
            'origin': function($famousNode, $payload) {$famousNode.setOrigin($payload[0], $payload[1], $payload[2]); },
            'origin-x': function($famousNode, $payload) {
                var previousOrigin = $famousNode.getOrigin();
                $famousNode.setOrigin($payload, previousOrigin[1], previousOrigin[2]);
            },
            'origin-y': function($famousNode, $payload) {
                var previousOrigin = $famousNode.getOrigin();
                $famousNode.setOrigin(previousOrigin[0], $payload, previousOrigin[2]);
            },
            'origin-z': function($famousNode, $payload) {
                var previousOrigin = $famousNode.getOrigin();
                $famousNode.setOrigin(previousOrigin[0], previousOrigin[1], $payload);
            },
            'position': function($famousNode, $payload) { $famousNode.setPosition($payload[0], $payload[1], $payload[2]); },
            'position-offsets': function($mesh, $payload) {
                $mesh.setPositonOffsets($payload);
            },
            'position-x': function($famousNode, $payload) {
                var previousPosition = $famousNode.getPosition();
                $famousNode.setPosition($payload, previousPosition[1], previousPosition[2]);
            },
            'position-y': function($famousNode, $payload) {
                var previousPosition = $famousNode.getPosition();
                $famousNode.setPosition(previousPosition[0], $payload, previousPosition[2]);
            },
            'position-z': function($famousNode, $payload) {
                var previousPosition = $famousNode.getPosition();
                $famousNode.setPosition(previousPosition[0], previousPosition[1], $payload);
            },
            'remove-class': function($DOMElement, $payload) { $DOMElement.removeClass($payload); },
            'rotation': function($famousNode, $payload) {
                $famousNode.setRotation($payload[0], $payload[1], $payload[2], $payload[3]);
            },
            'rotation-x': function($famousNode, $payload) {
                var previousRotation = $famousNode.getRotation();
                $famousNode.setRotation($payload, previousRotation[1], previousRotation[2]);
            },
            'rotation-y': function($famousNode, $payload) {
                var previousRotation = $famousNode.getRotation();
                $famousNode.setRotation(previousRotation[0], $payload, previousRotation[2]);
            },
            'rotation-z': function($famousNode, $payload) {
                var previousRotation = $famousNode.getRotation();
                $famousNode.setRotation(previousRotation[0], previousRotation[1], $payload);
            },
            'scale': function($famousNode, $payload) { $famousNode.setScale($payload[0], $payload[1], $payload[2]); },
            'scale-x': function($famousNode, $payload) {
                var previousScale = $famousNode.getScale();
                $famousNode.setScale($payload, previousScale[1], previousScale[2]);
            },
            'scale-y': function($famousNode, $payload) {
                var previousScale = $famousNode.getScale();
                $famousNode.setScale(previousScale[0], $payload, previousScale[2]);
            },
            'scale-z': function($famousNode, $payload) {
                var previousScale = $famousNode.getScale();
                $famousNode.setScale(previousScale[0], previousScale[1], $payload);
            },
            'set-html': function($state, $payload, $dispatcher) {
                var content = '';
                var outerHTML;
                for (var i = 0; i < $payload.length; i++) {
                    outerHTML = $payload[i].outerHTML || $payload[i].textContent; // Check for text nodes
                    content += (outerHTML) ? outerHTML : '';
                }
                $state.set('content', content);
                $dispatcher.trigger('content', content);
            },
            'size': function ($payload, $famousNode) {
                var xSize = $payload[0];
                var ySize = $payload[1];
                var zSize = $payload[2];

                var previousSizeMode = $famousNode.getSizeMode();
                var previousAbsoluteSize = $famousNode.getAbsoluteSize();

                var sizeModeX = previousSizeMode[0];
                var sizeModeY = previousSizeMode[1];
                var sizeModeZ = previousSizeMode[2];

                if (xSize === true) {
                    sizeModeX = 2;
                }
                else if (xSize !== undefined) {
                    sizeModeX = 1;
                }
                    
                if (ySize === true) {
                    sizeModeY = 2;
                }
                else if (ySize !== undefined) {
                    sizeModeY = 1;
                }
                    
                if (zSize === true) {
                    sizeModeZ = 2;
                }
                else if (zSize !== undefined) {
                    sizeModeZ = 1;
                }

                $famousNode.setSizeMode(sizeModeX, sizeModeY, sizeModeZ);
                $famousNode.setAbsoluteSize(xSize, ySize, zSize);
            },
            'size-true': function ($famousNode) {
                $famousNode.setSizeMode(2, 2, 2);
            },
            'size-true-x': function ($famousNode) {
                var previousSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(2, previousSizeMode[1], previousSizeMode[2]);
            },
            'size-true-y': function ($famousNode) {
                var previousSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(previousSizeMode[0], 2, previousSizeMode[2]);
            },
            'size-true-z': function ($famousNode) {
                var previousSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(previousSizeMode[0], previousSizeMode[1], 2);
            },
            'size-absolute': function ($famousNode, $payload) {
                $famousNode.setSizeMode(1, 1, 1);
                $famousNode.setAbsoluteSize($payload[0], $payload[1], $payload[2]);
            },
            'size-absolute-x': function ($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                var currentAbsoluteSize = $famousNode.getAbsoluteSize();
                $famousNode.setSizeMode(1, currentSizeMode[1], currentSizeMode[2]);
                $famousNode.setAbsoluteSize($payload, currentAbsoluteSize[1], currentAbsoluteSize[2]);
            },
            'size-absolute-y': function ($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                var currentAbsoluteSize = $famousNode.getAbsoluteSize();
                $famousNode.setSizeMode(currentSizeMode[0], 1, currentSizeMode[2]);
                $famousNode.setAbsoluteSize(currentAbsoluteSize[0], $payload, currentAbsoluteSize[2]);
            },
            'size-absolute-z': function ($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                var currentAbsoluteSize = $famousNode.getAbsoluteSize();
                $famousNode.setSizeMode(currentSizeMode[0], currentSizeMode[1], 1);
                $famousNode.setAbsoluteSize(currentAbsoluteSize[0], currentAbsoluteSize[1], $payload);
            },
            'size-differential': function($famousNode, $payload) {
                $famousNode.setSizeMode(0, 0, 0);
                $famousNode.setDifferentialSize($payload[0], $payload[1], $payload[2]);
            },
            'size-differential-x': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(0, currentSizeMode[1], currentSizeMode[2]);
                var currentDiffentialSize = $famousNode.getDifferentialSize();
                $famousNode.setProportionalSize($payload, currentDiffentialSize[1], currentDiffentialSize[2]);
            },
            'size-differential-y': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(currentSizeMode[0], 0, currentSizeMode[2]);
                var currentDiffentialSize = $famousNode.getDifferentialSize();
                $famousNode.setProportionalSize(currentDiffentialSize[0], $payload, currentDiffentialSize[2]);
            },
            'size-differential-z': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(currentSizeMode[0], currentSizeMode[1], 0);
                var currentDiffentialSize = $famousNode.getDifferentialSize();
                $famousNode.setProportionalSize(currentDiffentialSize[0], currentDiffentialSize[1], $payload);
            },
            'size-proportional': function($famousNode, $payload) {
                $famousNode.setSizeMode(0, 0, 0);
                $famousNode.setProportionalSize($payload[0], $payload[1], $payload[2]);
            },
            'size-proportional-x': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(0, currentSizeMode[1], currentSizeMode[2]);
                var currentProportionalSize = $famousNode.getProportionalSize();
                $famousNode.setProportionalSize($payload, currentProportionalSize[1], currentProportionalSize[2]);
            },
            'size-proportional-y': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(currentSizeMode[0], 0, currentSizeMode[2]);
                var currentProportionalSize = $famousNode.getProportionalSize();
                $famousNode.setProportionalSize(currentProportionalSize[0], $payload, currentProportionalSize[2]);
            },
            'size-proportional-z': function($famousNode, $payload) {
                var currentSizeMode = $famousNode.getSizeMode();
                $famousNode.setSizeMode(currentSizeMode[0], currentSizeMode[1], 0);
                var currentProportionalSize = $famousNode.getProportionalSize();
                $famousNode.setProportionalSize(currentProportionalSize[0], currentProportionalSize[1], $payload);
            },
            'style': function($DOMElement, $payload) {
                for (var styleName in $payload) {
                    $DOMElement.setProperty(styleName, $payload[styleName]);
                }
            },
            'template': function() {
                console.warn('`template` behavior is deprecated!');
            },
            'unselectable': function($state, $payload, $dispatcher) {
                if ($payload) {
                    var style = $state.get('style') || {};
                    style['-moz-user-select'] = '-moz-none';
                    style['-khtml-user-select'] = 'none';
                    style['-webkit-user-select'] = 'none';
                    style['-o-user-select'] = 'none';
                    style['user-select'] = 'none';
                    $dispatcher.trigger('style', style);
                }
            },
        }
    },
    states: {
        'didTemplate': false,
        'initialContent': '',
        'hasGeometry': false
    }
})
.config({
    extends: [],
    imports: {}
});
