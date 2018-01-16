// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    ani : cc.Animation

    start () {

        var manager = cc.director.getCollisionManager();

        manager.enabled = true;
        manager.enabledDebugDraw = true;

        console.log("new class on start*111*");
        cc.loader.loadRes("component/cat", cc.Prefab, (err:Error, res:cc.Prefab)=>{
            var sp = cc.instantiate(res);
            sp.parent = this.node;
            sp.x = 100


            var sp1 = cc.instantiate(res);
            sp1.parent = this.node;
            var anim = sp1.getComponent(cc.Animation);
            this.ani = anim;

            this.cat = sp1
        })


    }
    cat

    click1(){
        this.ani.play("cat_run")
    }

    click2(){
        // this.ani.play("cat_jump")
        this.cat.x = this.cat.x + 10
    }

    update (dt) {
        // console.log("******", dt);
    }
}
