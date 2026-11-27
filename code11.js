gdjs.elegirCode = {};
gdjs.elegirCode.localVariables = [];
gdjs.elegirCode.idToCallbackMap = new Map();
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1= [];
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2= [];
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1= [];
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2= [];
gdjs.elegirCode.GDsalmoObjects1= [];
gdjs.elegirCode.GDsalmoObjects2= [];
gdjs.elegirCode.GDevangelioObjects1= [];
gdjs.elegirCode.GDevangelioObjects2= [];
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1= [];
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2= [];
gdjs.elegirCode.GDFONDOObjects1= [];
gdjs.elegirCode.GDFONDOObjects2= [];
gdjs.elegirCode.GDprimeraObjects1= [];
gdjs.elegirCode.GDprimeraObjects2= [];
gdjs.elegirCode.GDvolverObjects1= [];
gdjs.elegirCode.GDvolverObjects2= [];
gdjs.elegirCode.GDNewSpriteObjects1= [];
gdjs.elegirCode.GDNewSpriteObjects2= [];
gdjs.elegirCode.GDNewSprite2Objects1= [];
gdjs.elegirCode.GDNewSprite2Objects2= [];
gdjs.elegirCode.GDNewSprite3Objects1= [];
gdjs.elegirCode.GDNewSprite3Objects2= [];
gdjs.elegirCode.GDNewSprite4Objects1= [];
gdjs.elegirCode.GDNewSprite4Objects2= [];
gdjs.elegirCode.GDNewSprite5Objects1= [];
gdjs.elegirCode.GDNewSprite5Objects2= [];
gdjs.elegirCode.GDNewSprite6Objects1= [];
gdjs.elegirCode.GDNewSprite6Objects2= [];
gdjs.elegirCode.GDNewSprite7Objects1= [];
gdjs.elegirCode.GDNewSprite7Objects2= [];
gdjs.elegirCode.GDabajoObjects1= [];
gdjs.elegirCode.GDabajoObjects2= [];
gdjs.elegirCode.GDNewSprite8Objects1= [];
gdjs.elegirCode.GDNewSprite8Objects2= [];
gdjs.elegirCode.GDcancioneroObjects1= [];
gdjs.elegirCode.GDcancioneroObjects2= [];
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1= [];
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2= [];
gdjs.elegirCode.GDNewSprite9Objects1= [];
gdjs.elegirCode.GDNewSprite9Objects2= [];
gdjs.elegirCode.GDLECTObjects1= [];
gdjs.elegirCode.GDLECTObjects2= [];
gdjs.elegirCode.GDSALMOObjects1= [];
gdjs.elegirCode.GDSALMOObjects2= [];
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1= [];
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2= [];
gdjs.elegirCode.GDNewSprite10Objects1= [];
gdjs.elegirCode.GDNewSprite10Objects2= [];


gdjs.elegirCode.userFunc0x16a5210 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.elegirCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);

const objects = [];
objects.push.apply(objects,gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDsalmoObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDevangelioObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDFONDOObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDprimeraObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDvolverObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSpriteObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite2Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite3Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite4Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite5Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite6Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite7Objects1);
objects.push.apply(objects,gdjs.elegirCode.GDabajoObjects1);
objects.push.apply(objects,gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.elegirCode.userFunc0x16a5210(runtimeScene, objects);

}


};gdjs.elegirCode.eventsList1 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDprimeraObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDprimeraObjects1[k] = gdjs.elegirCode.GDprimeraObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDprimeraObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("PRIMERA LECTURA");
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDsalmoObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDsalmoObjects1[k] = gdjs.elegirCode.GDsalmoObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDsalmoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("SALMO");
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDevangelioObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDevangelioObjects1[k] = gdjs.elegirCode.GDevangelioObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDevangelioObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("EVANGELIO");
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.elegirCode.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDNewSprite10Objects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDNewSprite10Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDNewSprite10Objects1[k] = gdjs.elegirCode.GDNewSprite10Objects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDNewSprite10Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena modo misa", false);
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
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.55)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.25 + 191)));
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
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
gdjs.elegirCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.elegirCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.elegirCode.GDsalmoObjects1.length = 0;
gdjs.elegirCode.GDsalmoObjects2.length = 0;
gdjs.elegirCode.GDevangelioObjects1.length = 0;
gdjs.elegirCode.GDevangelioObjects2.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.elegirCode.GDFONDOObjects1.length = 0;
gdjs.elegirCode.GDFONDOObjects2.length = 0;
gdjs.elegirCode.GDprimeraObjects1.length = 0;
gdjs.elegirCode.GDprimeraObjects2.length = 0;
gdjs.elegirCode.GDvolverObjects1.length = 0;
gdjs.elegirCode.GDvolverObjects2.length = 0;
gdjs.elegirCode.GDNewSpriteObjects1.length = 0;
gdjs.elegirCode.GDNewSpriteObjects2.length = 0;
gdjs.elegirCode.GDNewSprite2Objects1.length = 0;
gdjs.elegirCode.GDNewSprite2Objects2.length = 0;
gdjs.elegirCode.GDNewSprite3Objects1.length = 0;
gdjs.elegirCode.GDNewSprite3Objects2.length = 0;
gdjs.elegirCode.GDNewSprite4Objects1.length = 0;
gdjs.elegirCode.GDNewSprite4Objects2.length = 0;
gdjs.elegirCode.GDNewSprite5Objects1.length = 0;
gdjs.elegirCode.GDNewSprite5Objects2.length = 0;
gdjs.elegirCode.GDNewSprite6Objects1.length = 0;
gdjs.elegirCode.GDNewSprite6Objects2.length = 0;
gdjs.elegirCode.GDNewSprite7Objects1.length = 0;
gdjs.elegirCode.GDNewSprite7Objects2.length = 0;
gdjs.elegirCode.GDabajoObjects1.length = 0;
gdjs.elegirCode.GDabajoObjects2.length = 0;
gdjs.elegirCode.GDNewSprite8Objects1.length = 0;
gdjs.elegirCode.GDNewSprite8Objects2.length = 0;
gdjs.elegirCode.GDcancioneroObjects1.length = 0;
gdjs.elegirCode.GDcancioneroObjects2.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.elegirCode.GDNewSprite9Objects1.length = 0;
gdjs.elegirCode.GDNewSprite9Objects2.length = 0;
gdjs.elegirCode.GDLECTObjects1.length = 0;
gdjs.elegirCode.GDLECTObjects2.length = 0;
gdjs.elegirCode.GDSALMOObjects1.length = 0;
gdjs.elegirCode.GDSALMOObjects2.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2.length = 0;
gdjs.elegirCode.GDNewSprite10Objects1.length = 0;
gdjs.elegirCode.GDNewSprite10Objects2.length = 0;

gdjs.elegirCode.eventsList1(runtimeScene);
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.elegirCode.GDsalmoObjects1.length = 0;
gdjs.elegirCode.GDsalmoObjects2.length = 0;
gdjs.elegirCode.GDevangelioObjects1.length = 0;
gdjs.elegirCode.GDevangelioObjects2.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.elegirCode.GDFONDOObjects1.length = 0;
gdjs.elegirCode.GDFONDOObjects2.length = 0;
gdjs.elegirCode.GDprimeraObjects1.length = 0;
gdjs.elegirCode.GDprimeraObjects2.length = 0;
gdjs.elegirCode.GDvolverObjects1.length = 0;
gdjs.elegirCode.GDvolverObjects2.length = 0;
gdjs.elegirCode.GDNewSpriteObjects1.length = 0;
gdjs.elegirCode.GDNewSpriteObjects2.length = 0;
gdjs.elegirCode.GDNewSprite2Objects1.length = 0;
gdjs.elegirCode.GDNewSprite2Objects2.length = 0;
gdjs.elegirCode.GDNewSprite3Objects1.length = 0;
gdjs.elegirCode.GDNewSprite3Objects2.length = 0;
gdjs.elegirCode.GDNewSprite4Objects1.length = 0;
gdjs.elegirCode.GDNewSprite4Objects2.length = 0;
gdjs.elegirCode.GDNewSprite5Objects1.length = 0;
gdjs.elegirCode.GDNewSprite5Objects2.length = 0;
gdjs.elegirCode.GDNewSprite6Objects1.length = 0;
gdjs.elegirCode.GDNewSprite6Objects2.length = 0;
gdjs.elegirCode.GDNewSprite7Objects1.length = 0;
gdjs.elegirCode.GDNewSprite7Objects2.length = 0;
gdjs.elegirCode.GDabajoObjects1.length = 0;
gdjs.elegirCode.GDabajoObjects2.length = 0;
gdjs.elegirCode.GDNewSprite8Objects1.length = 0;
gdjs.elegirCode.GDNewSprite8Objects2.length = 0;
gdjs.elegirCode.GDcancioneroObjects1.length = 0;
gdjs.elegirCode.GDcancioneroObjects2.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.elegirCode.GDNewSprite9Objects1.length = 0;
gdjs.elegirCode.GDNewSprite9Objects2.length = 0;
gdjs.elegirCode.GDLECTObjects1.length = 0;
gdjs.elegirCode.GDLECTObjects2.length = 0;
gdjs.elegirCode.GDSALMOObjects1.length = 0;
gdjs.elegirCode.GDSALMOObjects2.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2.length = 0;
gdjs.elegirCode.GDNewSprite10Objects1.length = 0;
gdjs.elegirCode.GDNewSprite10Objects2.length = 0;


return;

}

gdjs['elegirCode'] = gdjs.elegirCode;
