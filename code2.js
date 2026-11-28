gdjs.quien_32soyCode = {};
gdjs.quien_32soyCode.localVariables = [];
gdjs.quien_32soyCode.idToCallbackMap = new Map();
gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1= [];
gdjs.quien_32soyCode.GDfondo_9595info_95951Objects2= [];
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1= [];
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects2= [];
gdjs.quien_32soyCode.GDabajoObjects1= [];
gdjs.quien_32soyCode.GDabajoObjects2= [];
gdjs.quien_32soyCode.GDinicioObjects1= [];
gdjs.quien_32soyCode.GDinicioObjects2= [];
gdjs.quien_32soyCode.GDmenjObjects1= [];
gdjs.quien_32soyCode.GDmenjObjects2= [];
gdjs.quien_32soyCode.GDNewSpriteObjects1= [];
gdjs.quien_32soyCode.GDNewSpriteObjects2= [];
gdjs.quien_32soyCode.GDNewSprite3Objects1= [];
gdjs.quien_32soyCode.GDNewSprite3Objects2= [];
gdjs.quien_32soyCode.GDtapa_9595infoObjects1= [];
gdjs.quien_32soyCode.GDtapa_9595infoObjects2= [];
gdjs.quien_32soyCode.GDNewSprite4Objects1= [];
gdjs.quien_32soyCode.GDNewSprite4Objects2= [];
gdjs.quien_32soyCode.GDNewSprite2Objects1= [];
gdjs.quien_32soyCode.GDNewSprite2Objects2= [];
gdjs.quien_32soyCode.GDhistoria2Objects1= [];
gdjs.quien_32soyCode.GDhistoria2Objects2= [];
gdjs.quien_32soyCode.GDNewSprite5Objects1= [];
gdjs.quien_32soyCode.GDNewSprite5Objects2= [];
gdjs.quien_32soyCode.GDNewSprite6Objects1= [];
gdjs.quien_32soyCode.GDNewSprite6Objects2= [];
gdjs.quien_32soyCode.GDNewTiledSpriteObjects1= [];
gdjs.quien_32soyCode.GDNewTiledSpriteObjects2= [];
gdjs.quien_32soyCode.GDNewSprite7Objects1= [];
gdjs.quien_32soyCode.GDNewSprite7Objects2= [];
gdjs.quien_32soyCode.GDcancioneroObjects1= [];
gdjs.quien_32soyCode.GDcancioneroObjects2= [];
gdjs.quien_32soyCode.GDNewSprite8Objects1= [];
gdjs.quien_32soyCode.GDNewSprite8Objects2= [];
gdjs.quien_32soyCode.GDAtrasObjects1= [];
gdjs.quien_32soyCode.GDAtrasObjects2= [];


gdjs.quien_32soyCode.userFunc0x13c9c20 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
  const gv = runtimeScene.getGame().getVariables();
  const ct = gv.get('ColorTema').getAsString();
  const p = ct.split(';').map(Number);
  const lum = 0.299 * (p[0] || 0) + 0.587 * (p[1] || 0) + 0.114 * (p[2] || 0);
  const mix = (c) => Math.round((c || 0) * 0.5 + lum * 0.5);
  const mid = [mix(p[0]), mix(p[1]), mix(p[2])];
  const dark = mid.map(v => Math.round(v * 0.55 + 35));
  const light = mid.map(v => Math.round(v * 0.15 + 210));
  const cols = { CustomOscuro: dark, CustomMedio: mid, CustomClaro: light };
  for (const o of objects) {
    let fx = null;
    try { fx = o.getRendererEffects(); } catch (e) { continue; }
    if (!fx) continue;
    for (const n of ['CustomOscuro', 'CustomMedio', 'CustomClaro']) {
      const f = fx[n];
      if (!f || !f.pixiFilter || !f.pixiFilter.uniforms || !f.pixiFilter.uniforms.newColor) continue;
      const u = f.pixiFilter.uniforms.newColor;
      u[0] = cols[n][0] / 255; u[1] = cols[n][1] / 255; u[2] = cols[n][2] / 255;
    }
  }
};
gdjs.quien_32soyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);

const objects = [];
objects.push.apply(objects,gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDabajoObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDinicioObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDmenjObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSpriteObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite3Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite4Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite2Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite5Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite6Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite7Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDNewSprite8Objects1);
objects.push.apply(objects,gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.quien_32soyCode.userFunc0x13c9c20(runtimeScene, objects);

}


};gdjs.quien_32soyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).mul(0.88);
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

gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.quien_32soyCode.GDinicioObjects1.length;i<l;++i) {
    if ( gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.quien_32soyCode.GDinicioObjects1[k] = gdjs.quien_32soyCode.GDinicioObjects1[i];
        ++k;
    }
}
gdjs.quien_32soyCode.GDinicioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.quien_32soyCode.GDmenjObjects1.length;i<l;++i) {
    if ( gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.quien_32soyCode.GDmenjObjects1[k] = gdjs.quien_32soyCode.GDmenjObjects1[i];
        ++k;
    }
}
gdjs.quien_32soyCode.GDmenjObjects1.length = k;
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "azul");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "amarillo");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "rosa");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.quien_32soyCode.GDAtrasObjects1.length;i<l;++i) {
    if ( gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.quien_32soyCode.GDAtrasObjects1[k] = gdjs.quien_32soyCode.GDAtrasObjects1[i];
        ++k;
    }
}
gdjs.quien_32soyCode.GDAtrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena información", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("ruah", "temaCustom", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "personalizado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.quien_32soyCode.GDAtrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.quien_32soyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.quien_32soyCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.quien_32soyCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.quien_32soyCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.quien_32soyCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.quien_32soyCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.quien_32soyCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.quien_32soyCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.quien_32soyCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.quien_32soyCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.quien_32soyCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.quien_32soyCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.quien_32soyCode.GDtapa_9595infoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.55)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.25 + 191)));
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.quien_32soyCode.GDAtrasObjects1.length ;i < len;++i) {
    gdjs.quien_32soyCode.GDAtrasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "personalizado");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.quien_32soyCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.quien_32soyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.quien_32soyCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.quien_32soyCode.GDabajoObjects1.length = 0;
gdjs.quien_32soyCode.GDabajoObjects2.length = 0;
gdjs.quien_32soyCode.GDinicioObjects1.length = 0;
gdjs.quien_32soyCode.GDinicioObjects2.length = 0;
gdjs.quien_32soyCode.GDmenjObjects1.length = 0;
gdjs.quien_32soyCode.GDmenjObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSpriteObjects1.length = 0;
gdjs.quien_32soyCode.GDNewSpriteObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite3Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite3Objects2.length = 0;
gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length = 0;
gdjs.quien_32soyCode.GDtapa_9595infoObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite4Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite4Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite2Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite2Objects2.length = 0;
gdjs.quien_32soyCode.GDhistoria2Objects1.length = 0;
gdjs.quien_32soyCode.GDhistoria2Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite5Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite5Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite6Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite6Objects2.length = 0;
gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.quien_32soyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite7Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite7Objects2.length = 0;
gdjs.quien_32soyCode.GDcancioneroObjects1.length = 0;
gdjs.quien_32soyCode.GDcancioneroObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite8Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite8Objects2.length = 0;
gdjs.quien_32soyCode.GDAtrasObjects1.length = 0;
gdjs.quien_32soyCode.GDAtrasObjects2.length = 0;

gdjs.quien_32soyCode.eventsList1(runtimeScene);
gdjs.quien_32soyCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.quien_32soyCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.quien_32soyCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.quien_32soyCode.GDabajoObjects1.length = 0;
gdjs.quien_32soyCode.GDabajoObjects2.length = 0;
gdjs.quien_32soyCode.GDinicioObjects1.length = 0;
gdjs.quien_32soyCode.GDinicioObjects2.length = 0;
gdjs.quien_32soyCode.GDmenjObjects1.length = 0;
gdjs.quien_32soyCode.GDmenjObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSpriteObjects1.length = 0;
gdjs.quien_32soyCode.GDNewSpriteObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite3Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite3Objects2.length = 0;
gdjs.quien_32soyCode.GDtapa_9595infoObjects1.length = 0;
gdjs.quien_32soyCode.GDtapa_9595infoObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite4Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite4Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite2Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite2Objects2.length = 0;
gdjs.quien_32soyCode.GDhistoria2Objects1.length = 0;
gdjs.quien_32soyCode.GDhistoria2Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite5Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite5Objects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite6Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite6Objects2.length = 0;
gdjs.quien_32soyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.quien_32soyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite7Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite7Objects2.length = 0;
gdjs.quien_32soyCode.GDcancioneroObjects1.length = 0;
gdjs.quien_32soyCode.GDcancioneroObjects2.length = 0;
gdjs.quien_32soyCode.GDNewSprite8Objects1.length = 0;
gdjs.quien_32soyCode.GDNewSprite8Objects2.length = 0;
gdjs.quien_32soyCode.GDAtrasObjects1.length = 0;
gdjs.quien_32soyCode.GDAtrasObjects2.length = 0;


return;

}

gdjs['quien_32soyCode'] = gdjs.quien_32soyCode;
