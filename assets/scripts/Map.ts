const {ccclass, property} = cc._decorator;

@ccclass
export default class Map extends cc.Component {
    onLoad() {
        let tiledMap = this.node.getComponent(cc.TiledMap);
        console.log(tiledMap)
    }
}
