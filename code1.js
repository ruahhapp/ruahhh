gdjs.escena_32informaci_243nCode = {};
gdjs.escena_32informaci_243nCode.localVariables = [];
gdjs.escena_32informaci_243nCode.idToCallbackMap = new Map();
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1= [];
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2= [];
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1= [];
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2= [];
gdjs.escena_32informaci_243nCode.GDabajoObjects1= [];
gdjs.escena_32informaci_243nCode.GDabajoObjects2= [];
gdjs.escena_32informaci_243nCode.GDinicioObjects1= [];
gdjs.escena_32informaci_243nCode.GDinicioObjects2= [];
gdjs.escena_32informaci_243nCode.GDmenjObjects1= [];
gdjs.escena_32informaci_243nCode.GDmenjObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1= [];
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2= [];
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1= [];
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2= [];
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1= [];
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1= [];
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2= [];
gdjs.escena_32informaci_243nCode.GDinfObjects1= [];
gdjs.escena_32informaci_243nCode.GDinfObjects2= [];
gdjs.escena_32informaci_243nCode.GDtapaObjects1= [];
gdjs.escena_32informaci_243nCode.GDtapaObjects2= [];
gdjs.escena_32informaci_243nCode.GDhechaObjects1= [];
gdjs.escena_32informaci_243nCode.GDhechaObjects2= [];


gdjs.escena_32informaci_243nCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).mul(0.88);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 2900), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length;i<l;++i) {
    if ( gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena_32informaci_243nCode.GDinicioObjects1[k] = gdjs.escena_32informaci_243nCode.GDinicioObjects1[i];
        ++k;
    }
}
gdjs.escena_32informaci_243nCode.GDinicioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length;i<l;++i) {
    if ( gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena_32informaci_243nCode.GDmenjObjects1[k] = gdjs.escena_32informaci_243nCode.GDmenjObjects1[i];
        ++k;
    }
}
gdjs.escena_32informaci_243nCode.GDmenjObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menú en general", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "azul");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "amarillo");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "rosa");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


};

gdjs.escena_32informaci_243nCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinfObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinfObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapaObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapaObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhechaObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhechaObjects2.length = 0;

gdjs.escena_32informaci_243nCode.eventsList0(runtimeScene);
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinfObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinfObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapaObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapaObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhechaObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhechaObjects2.length = 0;


return;

}

gdjs['escena_32informaci_243nCode'] = gdjs.escena_32informaci_243nCode;
