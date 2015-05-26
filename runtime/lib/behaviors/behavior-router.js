'use strict';

var Behaviors = require('./behaviors');
var VirtualDOM = require('../virtual-dom/virtual-dom');

var SELF_KEY = '$self';
var IF_KEY = '$if';
var REPEAT_KEY = '$repeat';
var YIELD_KEY = '$yield';
var CONTROL_FLOW_KEYS = [IF_KEY, REPEAT_KEY, YIELD_KEY];
var INVERTED_BEHAVIOR_KEYS = ['$index', '$repeatPayload'];
var COMPONENT_DELIM = ':';

function isSelfSelector(selector) {
    return selector === SELF_KEY;
}

function isControlFlowBehavior(name) {
    return CONTROL_FLOW_KEYS.indexOf(name) >= 0;
}

function hasInvertedBehaviorParams(params) {
    var result = false;
    for (var i = 0; i < params.length; i++) {
        if (INVERTED_BEHAVIOR_KEYS.indexOf(params[i]) >= 0) {
            result = true;
            break;
        }
    }

    return result;
}

function getTargets(component, selector) {
    var expandedBlueprint = component.tree.getExpandedBlueprint();
    return VirtualDOM.query(expandedBlueprint, selector);
}

function route(behavior, component) {
    var name = behavior.name;

    if (isControlFlowBehavior(name)) {
        if (!component.blockControlFlow) {
            if (behavior.name === REPEAT_KEY) {
                component.processDynamicRepeat(behavior);
            }
            else if (behavior.name === IF_KEY) {
                component.processDynamicIf(behavior);
            }
            else {
                console.error('Dynamic $yield behaviors are not yet implemented.');
            }
        }
    }
    else {
        if (hasInvertedBehaviorParams(behavior.params)) {
            if (isSelfSelector(behavior.selector) || behavior.name.indexOf(COMPONENT_DELIM) >= 0) {
                throw new Error('Inverted behaviors (i.e., ones with params of `$index`/`$payload`) can not use `$self` and must use components\' public interface');
            }

            Behaviors.invertedBehavior(behavior, component, getTargets(component, behavior.selector));
        }
        else {
            if (isSelfSelector(behavior.selector)) {
                if (name.indexOf(COMPONENT_DELIM) === -1) {
                    Behaviors.selfMessagingBehavior(behavior, component);
                }
                else {
                    Behaviors.selfDirectBehavior(behavior, component);
                }

            }
            else {
                if (name.indexOf(COMPONENT_DELIM) === -1) {
                    Behaviors.targetMessagingBehavior(behavior, component, getTargets(component, behavior.selector));
                }
                else {
                    throw new Error('Direct targeted behavior is not supported (' + behavior.selector + '|' + name + '.)');
                }
            }
        }
    }
}

module.exports = {
    route: route
};