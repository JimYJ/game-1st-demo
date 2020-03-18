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
        // 这个属性引用了加分动画预制资源
        tips_1: {
            default: null,
            type: cc.Prefab
        },
        pickRadius: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    getPlayerDistance: function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function () {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        // 然后销毁当前星星节点
        this.node.destroy();
        // 使用给定的模板在场景中生成一个新节点
        var tips_1 = cc.instantiate(this.tips_1)
        // 将新增的节点添加到 Canvas 节点下面
        this.game.node.addChild(tips_1)
        // 为+1效果设置星星相同的位置
        tips_1.setPosition(cc.v2(this.node.x, this.node.y))
        // 增加积分
        this.game.gainScore(1);
    },

    start() {

    },

    update(dt) {
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50
        this.node.opacity = minOpacity + Math.floor(opacityRatio * 255 - minOpacity);
    },
});
