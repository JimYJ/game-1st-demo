"use strict";
cc._RF.push(module, '24302hgm2lM/51GEyZFvQXA', 'tips');
// scripts/tips.js

"use strict";

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

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var actionDown = cc.moveBy(0.1, 0, -10); //.easing(cc.easeCubicActionOut());
        var actionUp = cc.moveBy(0.3, 0, 40); //.easing(cc.easeCubicActionOut());
        this.node.runAction(actionDown, actionUp);
        this.scheduleOnce(function () {
            this.node.stopAction();
            this.node.destroy();
        }, 0.8);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();