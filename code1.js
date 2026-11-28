gdjs.escena_32informaci_243nCode = {};
gdjs.escena_32informaci_243nCode.localVariables = [];
gdjs.escena_32informaci_243nCode.idToCallbackMap = new Map();
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1= [];
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2= [];
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects3= [];
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1= [];
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2= [];
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects3= [];
gdjs.escena_32informaci_243nCode.GDabajoObjects1= [];
gdjs.escena_32informaci_243nCode.GDabajoObjects2= [];
gdjs.escena_32informaci_243nCode.GDabajoObjects3= [];
gdjs.escena_32informaci_243nCode.GDinicioObjects1= [];
gdjs.escena_32informaci_243nCode.GDinicioObjects2= [];
gdjs.escena_32informaci_243nCode.GDinicioObjects3= [];
gdjs.escena_32informaci_243nCode.GDmenjObjects1= [];
gdjs.escena_32informaci_243nCode.GDmenjObjects2= [];
gdjs.escena_32informaci_243nCode.GDmenjObjects3= [];
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1= [];
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects3= [];
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1= [];
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2= [];
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects3= [];
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1= [];
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2= [];
gdjs.escena_32informaci_243nCode.GDhistoria2Objects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects3= [];
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1= [];
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2= [];
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects3= [];
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1= [];
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2= [];
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects3= [];
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects1= [];
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects2= [];
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects3= [];


gdjs.escena_32informaci_243nCode.userFunc0x17fb068 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.escena_32informaci_243nCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);

const objects = [];
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDabajoObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDinicioObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDmenjObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
objects.push.apply(objects,gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
gdjs.escena_32informaci_243nCode.userFunc0x17fb068(runtimeScene, objects);

}


};gdjs.escena_32informaci_243nCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "azul");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects2);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects2);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects2);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "amarillo");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects2);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects2);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects2);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "rosa");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects2);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects2);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects2);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "verde");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
}

}


};gdjs.escena_32informaci_243nCode.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "verde");
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
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.55)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.25 + 191)));
}
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
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
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
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
gdjs.escena_32informaci_243nCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.escena_32informaci_243nCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.escena_32informaci_243nCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info_1"), gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("inicio"), gdjs.escena_32informaci_243nCode.GDinicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("menj"), gdjs.escena_32informaci_243nCode.GDmenjObjects1);
gdjs.copyArray(runtimeScene.getObjects("segundo_fondo_info"), gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapa_info"), gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1);
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDabajoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDinicioObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDinicioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDmenjObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDmenjObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
}
}

}


};

gdjs.escena_32informaci_243nCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects3.length = 0;

gdjs.escena_32informaci_243nCode.eventsList2(runtimeScene);
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDfondo_9595info_95951Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDsegundo_9595fondo_9595infoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDabajoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDinicioObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDmenjObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSpriteObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite3Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDtapa_9595infoObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite4Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite2Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDhistoria2Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite5Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite6Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects1.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects2.length = 0;
gdjs.escena_32informaci_243nCode.GDNewSprite7Objects3.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.escena_32informaci_243nCode.GDcanta_9595tu_9595feObjects3.length = 0;


return;

}

gdjs['escena_32informaci_243nCode'] = gdjs.escena_32informaci_243nCode;
