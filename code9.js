gdjs.Escena_32modo_32misaCode = {};
gdjs.Escena_32modo_32misaCode.localVariables = [];
gdjs.Escena_32modo_32misaCode.idToCallbackMap = new Map();
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2= [];
gdjs.Escena_32modo_32misaCode.GDatrasObjects1= [];
gdjs.Escena_32modo_32misaCode.GDatrasObjects2= [];
gdjs.Escena_32modo_32misaCode.GDcomObjects1= [];
gdjs.Escena_32modo_32misaCode.GDcomObjects2= [];
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1= [];
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2= [];
gdjs.Escena_32modo_32misaCode.GDfondoObjects1= [];
gdjs.Escena_32modo_32misaCode.GDfondoObjects2= [];
gdjs.Escena_32modo_32misaCode.GDtextoObjects1= [];
gdjs.Escena_32modo_32misaCode.GDtextoObjects2= [];
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1= [];
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2= [];
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1= [];
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects2= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects2= [];
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects1= [];
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects2= [];
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects1= [];
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects2= [];


gdjs.Escena_32modo_32misaCode.userFunc0x97ee60 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.Escena_32modo_32misaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);

const objects = [];
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDcomObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
objects.push.apply(objects,gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.Escena_32modo_32misaCode.userFunc0x97ee60(runtimeScene, objects);

}


};gdjs.Escena_32modo_32misaCode.userFunc0xe6ab48 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.Escena_32modo_32misaCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);

const objects = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1;
gdjs.Escena_32modo_32misaCode.userFunc0xe6ab48(runtimeScene, objects);

}


};gdjs.Escena_32modo_32misaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDcomObjects1[k] = gdjs.Escena_32modo_32misaCode.GDcomObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("COMUNIÓN ESPIRITUAL");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("ORACIÓN PARA LA COMUNIÓN ESPIRITUAL" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Jesús mío, creo que estás verdaderamente presente en el Santísimo Sacramento del Altar." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Te amo sobre todas las cosas y deseo fervientemente recibirte dentro de mi alma." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Ya que deseando recibirte no puedo hacerlo ahora sacramentalmente, ven al menos espiritualmente a mi corazón." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Y como si ya te hubiese recibido, te abrazo y me uno del todo a Ti. Señor, no permitas que jamás me aparte de Ti." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Amén.");
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("modomisa");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[k] = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32951156);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("modomisa");
}
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("LECTURAS DE HOY");
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "elegir", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDatrasObjects1[k] = gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
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
gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
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
gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Escena_32modo_32misaCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Escena_32modo_32misaCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_de_verdad"), gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.Escena_32modo_32misaCode.GDtextoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.55)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.25 + 191)));
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDtextoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Escena_32modo_32misaCode.GDNewTextObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
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
gdjs.Escena_32modo_32misaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "personalizado");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Escena_32modo_32misaCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Escena_32modo_32misaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects2.length = 0;

gdjs.Escena_32modo_32misaCode.eventsList2(runtimeScene);
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondo_9595de_9595verdadObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite4Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcancioneroObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcanta_9595tu_9595feObjects2.length = 0;


return;

}

gdjs['Escena_32modo_32misaCode'] = gdjs.Escena_32modo_32misaCode;
