gdjs.Visor_32viaCode = {};
gdjs.Visor_32viaCode.localVariables = [];
gdjs.Visor_32viaCode.idToCallbackMap = new Map();
gdjs.Visor_32viaCode.GDFondoObjects1= [];
gdjs.Visor_32viaCode.GDFondoObjects2= [];
gdjs.Visor_32viaCode.GDFondoObjects3= [];
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1= [];
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2= [];
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects3= [];
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1= [];
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2= [];
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects3= [];
gdjs.Visor_32viaCode.GDatrasObjects1= [];
gdjs.Visor_32viaCode.GDatrasObjects2= [];
gdjs.Visor_32viaCode.GDatrasObjects3= [];
gdjs.Visor_32viaCode.GDvolverObjects1= [];
gdjs.Visor_32viaCode.GDvolverObjects2= [];
gdjs.Visor_32viaCode.GDvolverObjects3= [];
gdjs.Visor_32viaCode.GDTextoEvangelioObjects1= [];
gdjs.Visor_32viaCode.GDTextoEvangelioObjects2= [];
gdjs.Visor_32viaCode.GDTextoEvangelioObjects3= [];
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1= [];
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2= [];
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects3= [];
gdjs.Visor_32viaCode.GDNewSpriteObjects1= [];
gdjs.Visor_32viaCode.GDNewSpriteObjects2= [];
gdjs.Visor_32viaCode.GDNewSpriteObjects3= [];
gdjs.Visor_32viaCode.GDNewSprite2Objects1= [];
gdjs.Visor_32viaCode.GDNewSprite2Objects2= [];
gdjs.Visor_32viaCode.GDNewSprite2Objects3= [];
gdjs.Visor_32viaCode.GDsiguienteObjects1= [];
gdjs.Visor_32viaCode.GDsiguienteObjects2= [];
gdjs.Visor_32viaCode.GDsiguienteObjects3= [];
gdjs.Visor_32viaCode.GDanteriorObjects1= [];
gdjs.Visor_32viaCode.GDanteriorObjects2= [];
gdjs.Visor_32viaCode.GDanteriorObjects3= [];
gdjs.Visor_32viaCode.GDtapar_9595textoObjects1= [];
gdjs.Visor_32viaCode.GDtapar_9595textoObjects2= [];
gdjs.Visor_32viaCode.GDtapar_9595textoObjects3= [];
gdjs.Visor_32viaCode.GDcancioneroObjects1= [];
gdjs.Visor_32viaCode.GDcancioneroObjects2= [];
gdjs.Visor_32viaCode.GDcancioneroObjects3= [];
gdjs.Visor_32viaCode.GDBtnMasObjects1= [];
gdjs.Visor_32viaCode.GDBtnMasObjects2= [];
gdjs.Visor_32viaCode.GDBtnMasObjects3= [];
gdjs.Visor_32viaCode.GDBtnMenosObjects1= [];
gdjs.Visor_32viaCode.GDBtnMenosObjects2= [];
gdjs.Visor_32viaCode.GDBtnMenosObjects3= [];
gdjs.Visor_32viaCode.GDSliderTextoObjects1= [];
gdjs.Visor_32viaCode.GDSliderTextoObjects2= [];
gdjs.Visor_32viaCode.GDSliderTextoObjects3= [];
gdjs.Visor_32viaCode.GDLblTamObjects1= [];
gdjs.Visor_32viaCode.GDLblTamObjects2= [];
gdjs.Visor_32viaCode.GDLblTamObjects3= [];
gdjs.Visor_32viaCode.GDNewSprite3Objects1= [];
gdjs.Visor_32viaCode.GDNewSprite3Objects2= [];
gdjs.Visor_32viaCode.GDNewSprite3Objects3= [];


gdjs.Visor_32viaCode.mapOfGDgdjs_9546Visor_959532viaCode_9546GDatrasObjects1Objects = Hashtable.newFrom({"atras": gdjs.Visor_32viaCode.GDatrasObjects1});
gdjs.Visor_32viaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(runtimeScene.getGame().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(17).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(runtimeScene.getGame().getVariables().getFromIndex(12).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(17).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
}

}


};gdjs.Visor_32viaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(runtimeScene.getGame().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(17).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(runtimeScene.getGame().getVariables().getFromIndex(12).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(17).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
}

}


};gdjs.Visor_32viaCode.userFunc0x1b5c6a8 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.Visor_32viaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);

const objects = [];
objects.push.apply(objects,gdjs.Visor_32viaCode.GDFondoObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDatrasObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDvolverObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDNewSpriteObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDNewSprite2Objects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDsiguienteObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDanteriorObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.Visor_32viaCode.userFunc0x1b5c6a8(runtimeScene, objects);

}


};gdjs.Visor_32viaCode.userFunc0x173e590 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.Visor_32viaCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);

const objects = [];
objects.push.apply(objects,gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDBtnMasObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDBtnMenosObjects1);
objects.push.apply(objects,gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.Visor_32viaCode.userFunc0x173e590(runtimeScene, objects);

}


};gdjs.Visor_32viaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "azul");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects2);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects2);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects2);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects2);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects2);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects2);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects2);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects2);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects2);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects2);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects2);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects2);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects2);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects2[i].getBehavior("Effect").enableEffect("CustomClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
}

}


};gdjs.Visor_32viaCode.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Visor_32viaCode.mapOfGDgdjs_9546Visor_959532viaCode_9546GDatrasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length;i<l;++i) {
    if ( !(gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Arrastrable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[k] = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1 */
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(14).mul(0.88);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Arrastrable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[k] = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setX(18);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.evtTools.common.clamp((gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getY()), 550 - (gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getHeight()) + 1000, 550));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 11);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 12);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 13);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 14);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() == 15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDsiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDsiguienteObjects1[k] = gdjs.Visor_32viaCode.GDsiguienteObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDsiguienteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() < 15);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber((runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() + 1));
}

{ //Subevents
gdjs.Visor_32viaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDanteriorObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDanteriorObjects1[k] = gdjs.Visor_32viaCode.GDanteriorObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDanteriorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() > 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber((runtimeScene.getGame().getVariables().getFromIndex(23).getAsNumber() - 1));
}

{ //Subevents
gdjs.Visor_32viaCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.Visor_32viaCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDcancioneroObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(21).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setWrappingWidth(1080);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(52);
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(52);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDBtnMasObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDBtnMasObjects1[k] = gdjs.Visor_32viaCode.GDBtnMasObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDBtnMasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(2);
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDBtnMenosObjects1[k] = gdjs.Visor_32viaCode.GDBtnMenosObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDBtnMenosObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > 16);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(2);
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDSliderTextoObjects1[k] = gdjs.Visor_32viaCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)) != runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
/* Reuse gdjs.Visor_32viaCode.GDSliderTextoObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(16 + (( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)) * 44 / 100);
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( !(gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Visor_32viaCode.GDSliderTextoObjects1[k] = gdjs.Visor_32viaCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.Visor_32viaCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)) != (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 16) * 100 / 44);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Visor_32viaCode.GDSliderTextoObjects1 */
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Visor_32viaCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.Visor_32viaCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Text").setText("Tamaño del texto");
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__PinchGesture__EnableCameraPinch.func(runtimeScene, true, null);
}
{gdjs.evtsExt__PinchGesture__SetCameraPinchLayer.func(runtimeScene, "", null);
}
{gdjs.evtsExt__PinchGesture__SetCameraPinchConstraint.func(runtimeScene, "Zoom only", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) > 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) < 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.55)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.55)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))) * 0.25 + 191)) + ";" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))) * 0.25 + 191)));
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomOscuro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomMedio", "newColor", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectStringParameter("CustomClaro", "newColor", runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
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
gdjs.Visor_32viaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "personalizado");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Visor_32viaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Visor_32viaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.Visor_32viaCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.Visor_32viaCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Visor_32viaCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.Visor_32viaCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Visor_32viaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Visor_32viaCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.Visor_32viaCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.Visor_32viaCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Visor_32viaCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.Visor_32viaCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.Visor_32viaCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.Visor_32viaCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDFondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDatrasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDvolverObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSpriteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDNewSprite2Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDsiguienteObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDanteriorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMasObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDBtnMenosObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Visor_32viaCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDLblTamObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("TonoSlider", "hue", 0);
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
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("TonoSlider", "hue", 120);
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
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("TonoSlider", "hue", -60);
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
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.Visor_32viaCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDSliderTextoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("TonoSlider", "hue", -150);
}
}
}

}

}

};

gdjs.Visor_32viaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Visor_32viaCode.GDFondoObjects1.length = 0;
gdjs.Visor_32viaCode.GDFondoObjects2.length = 0;
gdjs.Visor_32viaCode.GDFondoObjects3.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects3.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects3.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects1.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects2.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects3.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects1.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects2.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects3.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects3.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects1.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects2.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects1.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects2.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects3.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects1.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects2.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects3.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects1.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects2.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects3.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects3.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects1.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects2.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects3.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects1.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects2.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects3.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects1.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects2.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects3.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects1.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects2.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects3.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects1.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects2.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects1.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects2.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects3.length = 0;

gdjs.Visor_32viaCode.eventsList5(runtimeScene);
gdjs.Visor_32viaCode.GDFondoObjects1.length = 0;
gdjs.Visor_32viaCode.GDFondoObjects2.length = 0;
gdjs.Visor_32viaCode.GDFondoObjects3.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects2.length = 0;
gdjs.Visor_32viaCode.GDtitulo_9595visorObjects3.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length = 0;
gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects3.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects1.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects2.length = 0;
gdjs.Visor_32viaCode.GDatrasObjects3.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects1.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects2.length = 0;
gdjs.Visor_32viaCode.GDvolverObjects3.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects1.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects2.length = 0;
gdjs.Visor_32viaCode.GDTextoEvangelioObjects3.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects1.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects2.length = 0;
gdjs.Visor_32viaCode.GDTexto_9595CargandoObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects1.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects2.length = 0;
gdjs.Visor_32viaCode.GDNewSpriteObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects1.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects2.length = 0;
gdjs.Visor_32viaCode.GDNewSprite2Objects3.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects1.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects2.length = 0;
gdjs.Visor_32viaCode.GDsiguienteObjects3.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects1.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects2.length = 0;
gdjs.Visor_32viaCode.GDanteriorObjects3.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects1.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects2.length = 0;
gdjs.Visor_32viaCode.GDtapar_9595textoObjects3.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects1.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects2.length = 0;
gdjs.Visor_32viaCode.GDcancioneroObjects3.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects1.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects2.length = 0;
gdjs.Visor_32viaCode.GDBtnMasObjects3.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects1.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects2.length = 0;
gdjs.Visor_32viaCode.GDBtnMenosObjects3.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects1.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects2.length = 0;
gdjs.Visor_32viaCode.GDSliderTextoObjects3.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects1.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects2.length = 0;
gdjs.Visor_32viaCode.GDLblTamObjects3.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects1.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects2.length = 0;
gdjs.Visor_32viaCode.GDNewSprite3Objects3.length = 0;


return;

}

gdjs['Visor_32viaCode'] = gdjs.Visor_32viaCode;
