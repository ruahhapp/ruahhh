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
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1= [];
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects2= [];


gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1});
gdjs.Men_250_32en_32generalCode.userFunc0x1852d78 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
  const gv = runtimeScene.getGame().getVariables();
  const ct = gv.get('ColorTema').getAsString();
  const p = ct.split(';').map(Number);
  const lum = 0.299 * (p[0] || 0) + 0.587 * (p[1] || 0) + 0.114 * (p[2] || 0);
  const mix = (c) => Math.round((c || 0) * 0.5 + lum * 0.5);
  const mid = [mix(p[0]), mix(p[1]), mix(p[2])];
  const dark = mid.map(v => Math.round(v * 0.55 + 35));
  const light = mid.map(v => Math.round(v * 0.15 + 210));
  const cols = { CustomOscuro: dark, CustomMedio: mid, CustomClaro: light, CustomNum: light };
  for (const o of objects) {
    let fx = null;
    try { fx = o.getRendererEffects(); } catch (e) { continue; }
    if (!fx) continue;
    for (const n of ['CustomOscuro', 'CustomMedio', 'CustomClaro', 'CustomNum']) {
      const f = fx[n];
      if (!f || !f.pixiFilter || !f.pixiFilter.uniforms || !f.pixiFilter.uniforms.newColor) continue;
      const u = f.pixiFilter.uniforms.newColor;
      u[0] = cols[n][0] / 255; u[1] = cols[n][1] / 255; u[2] = cols[n][2] / 255;
    }
  }
};
gdjs.Men_250_32en_32generalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects2);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects2);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects2);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects2);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects2);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects2);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects2);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects2);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects2);

const objects = [];
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDfondoObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects2);
objects.push.apply(objects,gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects2);
gdjs.Men_250_32en_32generalCode.userFunc0x1852d78(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomNum", true);
}
}
}

}


};gdjs.Men_250_32en_32generalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).mul(0.88);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 2400), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escenario menu rosario", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu oraciones", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Apoya el proyecto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Calendario litúrgico", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://nearby-temples-map.lovable.app/", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Men_250_32en_32generalCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length;i<l;++i) {
    if ( gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[k] = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i];
        ++k;
    }
}
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Men_250_32en_32generalCode.mapOfGDgdjs_9546Men_9595250_959532en_959532generalCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tema", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "azul");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
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
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
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
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", true);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
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
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AzulMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("AmarilloMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("RosaMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomMedio", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").enableEffect("CustomNum", false);
}
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Otra", 0)) < 30);
}
}
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
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CustomTema");
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CustomTema") < 1;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Men_250_32en_32generalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Icono_cancionero"), gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_modo_misa"), gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_oraciones"), gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icono_rosario"), gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambiar_color"), gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.Men_250_32en_32generalCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_apoya"), gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_calendario"), gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_casita_"), gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("icono_info"), gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1);
gdjs.copyArray(runtimeScene.getObjects("icono_mapa"), gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595casita_9595Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595rosarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595oracionesObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595cancioneroObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDIcono_9595modo_9595misaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595mapaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595calendarioObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595apoyaObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDicono_9595infoObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.12);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.12);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.12);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("CustomClaro", "epsilon", 0.08);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fondo_2"), gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1);
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AzulClaro", "epsilon", 0.12);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("AmarilloClaro", "epsilon", 0.12);
}
}
{for(var i = 0, len = gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1.length ;i < len;++i) {
    gdjs.Men_250_32en_32generalCode.GDfondo_95952Objects1[i].getBehavior("Effect").setEffectDoubleParameter("RosaClaro", "epsilon", 0.12);
}
}
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
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects2.length = 0;

gdjs.Men_250_32en_32generalCode.eventsList1(runtimeScene);
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
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects1.length = 0;
gdjs.Men_250_32en_32generalCode.GDcambiar_9595colorObjects2.length = 0;


return;

}

gdjs['Men_250_32en_32generalCode'] = gdjs.Men_250_32en_32generalCode;
