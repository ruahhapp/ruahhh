gdjs.temaCode = {};
gdjs.temaCode.localVariables = [];
gdjs.temaCode.idToCallbackMap = new Map();
gdjs.temaCode.GDNewSpriteObjects1= [];
gdjs.temaCode.GDNewSpriteObjects2= [];
gdjs.temaCode.GDNewSprite2Objects1= [];
gdjs.temaCode.GDNewSprite2Objects2= [];
gdjs.temaCode.GDNewSprite3Objects1= [];
gdjs.temaCode.GDNewSprite3Objects2= [];
gdjs.temaCode.GDTemaVerdeObjects1= [];
gdjs.temaCode.GDTemaVerdeObjects2= [];
gdjs.temaCode.GDTemaAzulObjects1= [];
gdjs.temaCode.GDTemaAzulObjects2= [];
gdjs.temaCode.GDTemaAmarilloObjects1= [];
gdjs.temaCode.GDTemaAmarilloObjects2= [];
gdjs.temaCode.GDTemaRosaObjects1= [];
gdjs.temaCode.GDTemaRosaObjects2= [];
gdjs.temaCode.GDEtiquetaVerdeObjects1= [];
gdjs.temaCode.GDEtiquetaVerdeObjects2= [];
gdjs.temaCode.GDEtiquetaAzulObjects1= [];
gdjs.temaCode.GDEtiquetaAzulObjects2= [];
gdjs.temaCode.GDEtiquetaAmarilloObjects1= [];
gdjs.temaCode.GDEtiquetaAmarilloObjects2= [];
gdjs.temaCode.GDEtiquetaRosaObjects1= [];
gdjs.temaCode.GDEtiquetaRosaObjects2= [];
gdjs.temaCode.GDMarcaTemaObjects1= [];
gdjs.temaCode.GDMarcaTemaObjects2= [];
gdjs.temaCode.GDIdiomaESObjects1= [];
gdjs.temaCode.GDIdiomaESObjects2= [];
gdjs.temaCode.GDIdiomaENObjects1= [];
gdjs.temaCode.GDIdiomaENObjects2= [];
gdjs.temaCode.GDIdiomaDEObjects1= [];
gdjs.temaCode.GDIdiomaDEObjects2= [];
gdjs.temaCode.GDIdiomaFRObjects1= [];
gdjs.temaCode.GDIdiomaFRObjects2= [];
gdjs.temaCode.GDIdiomaHeaderObjects1= [];
gdjs.temaCode.GDIdiomaHeaderObjects2= [];
gdjs.temaCode.GDMarcaIdiomaObjects1= [];
gdjs.temaCode.GDMarcaIdiomaObjects2= [];
gdjs.temaCode.GDVistaPreviaObjects1= [];
gdjs.temaCode.GDVistaPreviaObjects2= [];
gdjs.temaCode.GDEtiquetaPersonalizadoObjects1= [];
gdjs.temaCode.GDEtiquetaPersonalizadoObjects2= [];
gdjs.temaCode.GDRuedaColorObjects1= [];
gdjs.temaCode.GDRuedaColorObjects2= [];


gdjs.temaCode.mapOfGDgdjs_9546temaCode_9546GDRuedaColorObjects1Objects = Hashtable.newFrom({"RuedaColor": gdjs.temaCode.GDRuedaColorObjects1});
gdjs.temaCode.userFunc0x122fcd8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
  const o = objects[0];
  const cx = o.getCenterXInScene();
  const cy = o.getCenterYInScene();
  const rad = Math.min(o.getWidth(), o.getHeight()) / 2;
  const mx = gdjs.evtTools.input.getCursorX(runtimeScene, '', 0);
  const my = gdjs.evtTools.input.getCursorY(runtimeScene, '', 0);
  let dx = mx - cx, dy = my - cy;
  const dist = Math.hypot(dx, dy) || 0.0001;
  if (dist > rad) { dx *= rad / dist; dy *= rad / dist; }
  let hue = Math.atan2(dx, -dy);
  if (hue < 0) hue += Math.PI * 2;
  hue /= Math.PI * 2;
  const sat = Math.min(1, Math.hypot(dx, dy) / rad);
  const c = sat, hh = hue * 6;
  const x = c * (1 - Math.abs((hh % 2) - 1)), m = 1 - c;
  let r1 = 0, g1 = 0, b1 = 0;
  if (hh < 1) { r1 = c; g1 = x; } else if (hh < 2) { r1 = x; g1 = c; } else if (hh < 3) { g1 = c; b1 = x; } else if (hh < 4) { g1 = x; b1 = c; } else if (hh < 5) { r1 = x; b1 = c; } else { r1 = c; b1 = x; }
  const vars = runtimeScene.getVariables();
  vars.get('PickR').setNumber(Math.round((r1 + m) * 255));
  vars.get('PickG').setNumber(Math.round((g1 + m) * 255));
  vars.get('PickB').setNumber(Math.round((b1 + m) * 255));
};
gdjs.temaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.temaCode.GDRuedaColorObjects1, gdjs.temaCode.GDRuedaColorObjects2);


const objects = gdjs.temaCode.GDRuedaColorObjects2;
gdjs.temaCode.userFunc0x122fcd8(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
gdjs.copyArray(runtimeScene.getObjects("VistaPrevia"), gdjs.temaCode.GDVistaPreviaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setString(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) + ";" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) + ";" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
{for(var i = 0, len = gdjs.temaCode.GDVistaPreviaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDVistaPreviaObjects1[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("personalizado");
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "tema", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "temaCustom", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1000);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1610);
}
}
}

}


};gdjs.temaCode.eventsList1 = function(runtimeScene) {

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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TemaAmarillo"), gdjs.temaCode.GDTemaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("TemaAzul"), gdjs.temaCode.GDTemaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("TemaRosa"), gdjs.temaCode.GDTemaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("TemaVerde"), gdjs.temaCode.GDTemaVerdeObjects1);
{for(var i = 0, len = gdjs.temaCode.GDTemaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDTemaVerdeObjects1[i].setColor("46;125;75");
}
}
{for(var i = 0, len = gdjs.temaCode.GDTemaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDTemaAzulObjects1[i].setColor("85;145;205");
}
}
{for(var i = 0, len = gdjs.temaCode.GDTemaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDTemaAmarilloObjects1[i].setColor("205;170;75");
}
}
{for(var i = 0, len = gdjs.temaCode.GDTemaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDTemaRosaObjects1[i].setColor("205;130;155");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TemaVerde"), gdjs.temaCode.GDTemaVerdeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDTemaVerdeObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDTemaVerdeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDTemaVerdeObjects1[k] = gdjs.temaCode.GDTemaVerdeObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDTemaVerdeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("verde");
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "tema", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(540);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(985);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TemaAzul"), gdjs.temaCode.GDTemaAzulObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDTemaAzulObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDTemaAzulObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDTemaAzulObjects1[k] = gdjs.temaCode.GDTemaAzulObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDTemaAzulObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("azul");
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "tema", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1070);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1335);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TemaAmarillo"), gdjs.temaCode.GDTemaAmarilloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDTemaAmarilloObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDTemaAmarilloObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDTemaAmarilloObjects1[k] = gdjs.temaCode.GDTemaAmarilloObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDTemaAmarilloObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("amarillo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "tema", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1070);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(985);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TemaRosa"), gdjs.temaCode.GDTemaRosaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDTemaRosaObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDTemaRosaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDTemaRosaObjects1[k] = gdjs.temaCode.GDTemaRosaObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDTemaRosaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("rosa");
}
{gdjs.evtTools.storage.writeStringInJSONFile("ruah", "tema", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(540);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1335);
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
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(540);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(985);
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
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1070);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(985);
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
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(540);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1335);
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
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1070);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1335);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IdiomaES"), gdjs.temaCode.GDIdiomaESObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDIdiomaESObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDIdiomaESObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDIdiomaESObjects1[k] = gdjs.temaCode.GDIdiomaESObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDIdiomaESObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("es");
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(131);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Verde");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Amarillo");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Rosa");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Azul");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("IDIOMA");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IdiomaEN"), gdjs.temaCode.GDIdiomaENObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDIdiomaENObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDIdiomaENObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDIdiomaENObjects1[k] = gdjs.temaCode.GDIdiomaENObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDIdiomaENObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("en");
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(423);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Green");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Yellow");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Pink");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Blue");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("LANGUAGE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IdiomaDE"), gdjs.temaCode.GDIdiomaDEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDIdiomaDEObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDIdiomaDEObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDIdiomaDEObjects1[k] = gdjs.temaCode.GDIdiomaDEObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDIdiomaDEObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("de");
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(715);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Grün");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Gelb");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Rosa");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Blau");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("SPRACHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IdiomaFR"), gdjs.temaCode.GDIdiomaFRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDIdiomaFRObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDIdiomaFRObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDIdiomaFRObjects1[k] = gdjs.temaCode.GDIdiomaFRObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDIdiomaFRObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("fr");
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(1007);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Vert");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Jaune");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Rose");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Bleu");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("LANGUE");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "es");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(131);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "en");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(423);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Green");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Yellow");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Pink");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Blue");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("LANGUAGE");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "de");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(715);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Grün");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Gelb");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Rosa");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Blau");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("SPRACHE");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "fr");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaIdioma"), gdjs.temaCode.GDMarcaIdiomaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setX(1007);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaIdiomaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaIdiomaObjects1[i].setY(1680);
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].getBehavior("Text").setText("Vert");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].getBehavior("Text").setText("Jaune");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].getBehavior("Text").setText("Rose");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].getBehavior("Text").setText("Bleu");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].getBehavior("Text").setText("LANGUE");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaPersonalizado"), gdjs.temaCode.GDEtiquetaPersonalizadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("VistaPrevia"), gdjs.temaCode.GDVistaPreviaObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ruah", "temaCustom", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaPersonalizadoObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaPersonalizadoObjects1[i].getBehavior("Text").setText("Toca el circulo para elegir tu color");
}
}
{for(var i = 0, len = gdjs.temaCode.GDVistaPreviaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDVistaPreviaObjects1[i].setColor("46;125;75");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() == "personalizado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
gdjs.copyArray(runtimeScene.getObjects("VistaPrevia"), gdjs.temaCode.GDVistaPreviaObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), 0, gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), 0, gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), gdjs.evtTools.string.strFind(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), gdjs.evtTools.string.strFind(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString())), ";") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString()))));
}
{for(var i = 0, len = gdjs.temaCode.GDVistaPreviaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDVistaPreviaObjects1[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX(1000);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY(1610);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RuedaColor"), gdjs.temaCode.GDRuedaColorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.temaCode.mapOfGDgdjs_9546temaCode_9546GDRuedaColorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.temaCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.temaCode.GDTemaVerdeObjects1.length = 0;
gdjs.temaCode.GDTemaVerdeObjects2.length = 0;
gdjs.temaCode.GDTemaAzulObjects1.length = 0;
gdjs.temaCode.GDTemaAzulObjects2.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects1.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects2.length = 0;
gdjs.temaCode.GDTemaRosaObjects1.length = 0;
gdjs.temaCode.GDTemaRosaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects1.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects2.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects1.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects2.length = 0;
gdjs.temaCode.GDMarcaTemaObjects1.length = 0;
gdjs.temaCode.GDMarcaTemaObjects2.length = 0;
gdjs.temaCode.GDIdiomaESObjects1.length = 0;
gdjs.temaCode.GDIdiomaESObjects2.length = 0;
gdjs.temaCode.GDIdiomaENObjects1.length = 0;
gdjs.temaCode.GDIdiomaENObjects2.length = 0;
gdjs.temaCode.GDIdiomaDEObjects1.length = 0;
gdjs.temaCode.GDIdiomaDEObjects2.length = 0;
gdjs.temaCode.GDIdiomaFRObjects1.length = 0;
gdjs.temaCode.GDIdiomaFRObjects2.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects1.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects2.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects1.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects2.length = 0;
gdjs.temaCode.GDVistaPreviaObjects1.length = 0;
gdjs.temaCode.GDVistaPreviaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaPersonalizadoObjects1.length = 0;
gdjs.temaCode.GDEtiquetaPersonalizadoObjects2.length = 0;
gdjs.temaCode.GDRuedaColorObjects1.length = 0;
gdjs.temaCode.GDRuedaColorObjects2.length = 0;

gdjs.temaCode.eventsList1(runtimeScene);
gdjs.temaCode.GDNewSpriteObjects1.length = 0;
gdjs.temaCode.GDNewSpriteObjects2.length = 0;
gdjs.temaCode.GDNewSprite2Objects1.length = 0;
gdjs.temaCode.GDNewSprite2Objects2.length = 0;
gdjs.temaCode.GDNewSprite3Objects1.length = 0;
gdjs.temaCode.GDNewSprite3Objects2.length = 0;
gdjs.temaCode.GDTemaVerdeObjects1.length = 0;
gdjs.temaCode.GDTemaVerdeObjects2.length = 0;
gdjs.temaCode.GDTemaAzulObjects1.length = 0;
gdjs.temaCode.GDTemaAzulObjects2.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects1.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects2.length = 0;
gdjs.temaCode.GDTemaRosaObjects1.length = 0;
gdjs.temaCode.GDTemaRosaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects1.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects2.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects1.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects2.length = 0;
gdjs.temaCode.GDMarcaTemaObjects1.length = 0;
gdjs.temaCode.GDMarcaTemaObjects2.length = 0;
gdjs.temaCode.GDIdiomaESObjects1.length = 0;
gdjs.temaCode.GDIdiomaESObjects2.length = 0;
gdjs.temaCode.GDIdiomaENObjects1.length = 0;
gdjs.temaCode.GDIdiomaENObjects2.length = 0;
gdjs.temaCode.GDIdiomaDEObjects1.length = 0;
gdjs.temaCode.GDIdiomaDEObjects2.length = 0;
gdjs.temaCode.GDIdiomaFRObjects1.length = 0;
gdjs.temaCode.GDIdiomaFRObjects2.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects1.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects2.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects1.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects2.length = 0;
gdjs.temaCode.GDVistaPreviaObjects1.length = 0;
gdjs.temaCode.GDVistaPreviaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaPersonalizadoObjects1.length = 0;
gdjs.temaCode.GDEtiquetaPersonalizadoObjects2.length = 0;
gdjs.temaCode.GDRuedaColorObjects1.length = 0;
gdjs.temaCode.GDRuedaColorObjects2.length = 0;


return;

}

gdjs['temaCode'] = gdjs.temaCode;
