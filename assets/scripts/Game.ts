import Global from "./common/Global";
import Operations from "./service/Operations";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    onLoad() {
        Operations.start()
    }
    onDestroy() {
        Operations.end()
    }
    update() {
        Global.frame++
        if (Global.frame % 30 == 0) {
            console.log(Global.input.direction)
        }
    }
}
