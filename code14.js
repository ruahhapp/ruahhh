gdjs.Men_250_32en_32generalCode = {};
gdjs.Men_250_32en_32generalCode.localVariables = [];
gdjs.Men_250_32en_32generalCode.idToCallbackMap = new Map();
gdjs.Men_250_32en_32generalCode.GDfondoObjects1= [];
gdjs.Men_250_32en_32generalCode.GDfondoObjects2= [];
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1= [];
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects2= [];
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1= [];
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects2= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects2= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects2= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects2= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects2= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects2= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1= [];
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects2= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects2= [];
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects1= [];
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects2= [];
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects1= [];
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects2= [];
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects1= [];
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects2= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects2= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1= [];
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects2= [];


gdjs.Men_250_32en_32generalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 0.6) + ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) * 0.4)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) > 0.5);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).mul(0.95);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 1700), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[k] = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escenario menu rosario", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[k] = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[k] = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu oraciones", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[k] = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena modo misa", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[k] = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena información", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[k] = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu cancionero", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[k] = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Apoya el proyecto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[k] = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Calendario litúrgico", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[k] = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://nearby-temples-map.lovable.app/", null);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Men_250_32en_32generalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondoObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects2.length = 0;

gdjs.Men_250_32en_32generalCode.eventsList0(runtimeScene);
gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondoObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDfondo_95953Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite2Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDNewSprite3Objects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects2.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects2.length = 0;


return;

}

gdjs['Men_250_32en_32generalCode'] = gdjs.Men_250_32en_32generalCode;
