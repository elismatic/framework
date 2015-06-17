---
layout: default
title: Layout
---


This guide will teach you the basics of layout, i.e. the sizing and positioning of elements in 3D space. We will build upon ideas from the [scene graph heirarchy](./tree.html#scene-graph) section and explain how this relates to the cordinate system of each [node](./tree.html#node). 

## Size

All layout, including size, is controlled in behaviors. The `'size'` behavior lets us set the size in pixels for width, height, and depth (X, Y, and Z respectively):

    behaviors: {
        '#child': { // note: DOM elements are flat, but meshes are 3D
            'size': [100,100,100]
        }
    }

Additionally, we can use the `'size'` behavior to set true size, which is the size of the content.
    
    behaviors: {
        '#child': {
            'size': [true,true],
            content: `this node will
                      be sized to
                      fit this text`
        }
    }
    
When a node's size is undefined it inherits its size from its parent. As we mentioned in [previous section](./tree.html#scene-graph), if there is no parent then the size fills up the size of the browser window or root context. 
    
    behaviors: {
        '#child': {
            'size': [undefined,100],
            content: `this node will
                      be sized to
                      fit this text`
        }
    }


### Absolute Size
Absolute size sets the pixel values of a node. `size-absolute-x`, `size-absolute-y`, `size-absolute-z`, lets us target the corresponding values of a node.

### Proportional Size

### Differential size

### True size



## Positioning
As we mentioned earlier, the Framework gives you access to the robust 3D coordinate system from the Famous Engine. This system starts at the top left corner of the parent and moves to the bottom right. 

By default, all nodes are positioned to the top left corner of their parent, which corresponds to  [0,0,0] in 3D space. If there is no parent often this will default to the top left of the screen. 
## Position

## Align

## Mount Point

## Origin 

## Rotation