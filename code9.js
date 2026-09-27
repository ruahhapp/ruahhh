gdjs.Escenario_32menu_32rosarioCode = {};
gdjs.Escenario_32menu_32rosarioCode.localVariables = [];
gdjs.Escenario_32menu_32rosarioCode.idToCallbackMap = new Map();
gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects2= [];
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects1= [];
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects2= [];


gdjs.Escenario_32menu_32rosarioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_gozoso"), gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length;i<l;++i) {
    if ( gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1[k] = gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1[i];
        ++k;
    }
}
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1 */
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Misterios gozosos", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_luminoso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length;i<l;++i) {
    if ( gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1[k] = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1[i];
        ++k;
    }
}
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1 */
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Misterios luminosos", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length;i<l;++i) {
    if ( gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1[k] = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1[i];
        ++k;
    }
}
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1 */
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Misterios gloriosos", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_doloroso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length;i<l;++i) {
    if ( gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1[k] = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1[i];
        ++k;
    }
}
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1 */
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena Rosario dolor", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boton_gozoso"), gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1);
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("botón_doloroso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1);
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1);
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("botón_luminoso"), gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1);
{for(var i = 0, len = gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length ;i < len;++i) {
    gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1.length;i<l;++i) {
    if ( gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1[k] = gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1[i];
        ++k;
    }
}
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Escenario_32menu_32rosarioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects2.length = 0;

gdjs.Escenario_32menu_32rosarioCode.eventsList0(runtimeScene);
gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595luminosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDbot_95243n_9595dolorosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDFONDOObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDboton_9595gozosoObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDvolverObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSpriteObjects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite2Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite3Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite4Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite5Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite6Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDNewSprite7Objects2.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects1.length = 0;
gdjs.Escenario_32menu_32rosarioCode.GDabajoObjects2.length = 0;


return;

}

gdjs['Escenario_32menu_32rosarioCode'] = gdjs.Escenario_32menu_32rosarioCode;
