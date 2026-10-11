gdjs.temaCode = {};
gdjs.temaCode.localVariables = [];
gdjs.temaCode.idToCallbackMap = new Map();
gdjs.temaCode.GDNewSpriteObjects1= [];
gdjs.temaCode.GDNewSpriteObjects2= [];
gdjs.temaCode.GDNewSprite2Objects1= [];
gdjs.temaCode.GDNewSprite2Objects2= [];
gdjs.temaCode.GDNewSprite3Objects1= [];
gdjs.temaCode.GDNewSprite3Objects2= [];


gdjs.temaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.temaCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDNewSprite3Objects1[k] = gdjs.temaCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.temaCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menú en general", false);
}
}

}


};

gdjs.temaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.temaCode.GDNewSpriteObjects1.length = 0;
gdjs.temaCode.GDNewSpriteObjects2.length = 0;
gdjs.temaCode.GDNewSprite2Objects1.length = 0;
gdjs.temaCode.GDNewSprite2Objects2.length = 0;
gdjs.temaCode.GDNewSprite3Objects1.length = 0;
gdjs.temaCode.GDNewSprite3Objects2.length = 0;

gdjs.temaCode.eventsList0(runtimeScene);
gdjs.temaCode.GDNewSpriteObjects1.length = 0;
gdjs.temaCode.GDNewSpriteObjects2.length = 0;
gdjs.temaCode.GDNewSprite2Objects1.length = 0;
gdjs.temaCode.GDNewSprite2Objects2.length = 0;
gdjs.temaCode.GDNewSprite3Objects1.length = 0;
gdjs.temaCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['temaCode'] = gdjs.temaCode;
