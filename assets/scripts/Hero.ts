import Global from "./common/Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Hero extends cc.Component {
    
    sleep: number = 32;

    update(dt: any) {
        this.node.x += Global.input.direction.x * this.sleep * dt;
        this.node.y += Global.input.direction.y * this.sleep * dt;
    }
}
