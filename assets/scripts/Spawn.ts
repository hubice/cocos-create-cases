const {ccclass, property} = cc._decorator;

@ccclass
export default class Spawn extends cc.Component {

    @property(cc.Prefab)
    hero: cc.Prefab = null

    start() {
        // for (let i = 0; i < 10000; i++) {
        //     let node = cc.instantiate(this.hero)
        //     let t = cc.v3( Math.ceil(Math.random() * 700) - 400, Math.ceil(Math.random() * 700) - 400, 0);
        //     console.log(t)
        //     node.position = t
        //     node.parent = this.node
        // }
    }
}
