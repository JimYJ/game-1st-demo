"use strict";
cc._RF.push(module, '01030gX2dFF64LRUkyMd746', 'gameover');
// scripts/gameover.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // button: {
        //     default: null,
        //     type: cc.Prefab
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},


    onEventStart: function onEventStart() {
        this.node.destroy();
        cc.director.loadScene('game');
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();