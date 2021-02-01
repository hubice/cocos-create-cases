import Global from "../common/Global";

/**
 * 键盘操作监听
 */
export default class Operations {
    static start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, Operations.onKeyDown, Operations);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, Operations.onKeyUp, Operations);
    };
    static end() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, Operations.onKeyDown, Operations);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, Operations.onKeyUp, Operations);
    };
    static onKeyDown(event) {
        switch (event.keyCode) {
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
    };
    static onKeyUp(event) {
        switch (event.keyCode) {
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
}