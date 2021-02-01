import Global from "./common/Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                Global.input.direction.y = 1
                break;
            case cc.macro.KEY.s:
                Global.input.direction.y = -1
                break;
            case cc.macro.KEY.a:
                Global.input.direction.x = -1
                break;
            case cc.macro.KEY.d:
                Global.input.direction.x = 1
                break;
        }
    }
    onKeyUp(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                Global.input.direction.y = 0
                break;
            case cc.macro.KEY.s:
                Global.input.direction.y = 0
                break;
            case cc.macro.KEY.a:
                Global.input.direction.x = 0
                break;
            case cc.macro.KEY.d:
                Global.input.direction.x = 0
                break;
        }
    }
    update(dt) {
        Global.frame++
        if (Global.frame % 30 == 0) {
            console.log(Global.input.direction)
        }
    }
}
