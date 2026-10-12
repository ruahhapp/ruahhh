gdjs.temaCode = {};
gdjs.temaCode.localVariables = [];
gdjs.temaCode.idToCallbackMap = new Map();
gdjs.temaCode.GDNewSpriteObjects1= [];
gdjs.temaCode.GDNewSpriteObjects2= [];
gdjs.temaCode.GDNewSpriteObjects3= [];
gdjs.temaCode.GDNewSprite2Objects1= [];
gdjs.temaCode.GDNewSprite2Objects2= [];
gdjs.temaCode.GDNewSprite2Objects3= [];
gdjs.temaCode.GDNewSprite3Objects1= [];
gdjs.temaCode.GDNewSprite3Objects2= [];
gdjs.temaCode.GDNewSprite3Objects3= [];
gdjs.temaCode.GDTemaVerdeObjects1= [];
gdjs.temaCode.GDTemaVerdeObjects2= [];
gdjs.temaCode.GDTemaVerdeObjects3= [];
gdjs.temaCode.GDTemaAzulObjects1= [];
gdjs.temaCode.GDTemaAzulObjects2= [];
gdjs.temaCode.GDTemaAzulObjects3= [];
gdjs.temaCode.GDTemaAmarilloObjects1= [];
gdjs.temaCode.GDTemaAmarilloObjects2= [];
gdjs.temaCode.GDTemaAmarilloObjects3= [];
gdjs.temaCode.GDTemaRosaObjects1= [];
gdjs.temaCode.GDTemaRosaObjects2= [];
gdjs.temaCode.GDTemaRosaObjects3= [];
gdjs.temaCode.GDEtiquetaVerdeObjects1= [];
gdjs.temaCode.GDEtiquetaVerdeObjects2= [];
gdjs.temaCode.GDEtiquetaVerdeObjects3= [];
gdjs.temaCode.GDEtiquetaAzulObjects1= [];
gdjs.temaCode.GDEtiquetaAzulObjects2= [];
gdjs.temaCode.GDEtiquetaAzulObjects3= [];
gdjs.temaCode.GDEtiquetaAmarilloObjects1= [];
gdjs.temaCode.GDEtiquetaAmarilloObjects2= [];
gdjs.temaCode.GDEtiquetaAmarilloObjects3= [];
gdjs.temaCode.GDEtiquetaRosaObjects1= [];
gdjs.temaCode.GDEtiquetaRosaObjects2= [];
gdjs.temaCode.GDEtiquetaRosaObjects3= [];
gdjs.temaCode.GDMarcaTemaObjects1= [];
gdjs.temaCode.GDMarcaTemaObjects2= [];
gdjs.temaCode.GDMarcaTemaObjects3= [];
gdjs.temaCode.GDIdiomaESObjects1= [];
gdjs.temaCode.GDIdiomaESObjects2= [];
gdjs.temaCode.GDIdiomaESObjects3= [];
gdjs.temaCode.GDIdiomaENObjects1= [];
gdjs.temaCode.GDIdiomaENObjects2= [];
gdjs.temaCode.GDIdiomaENObjects3= [];
gdjs.temaCode.GDIdiomaDEObjects1= [];
gdjs.temaCode.GDIdiomaDEObjects2= [];
gdjs.temaCode.GDIdiomaDEObjects3= [];
gdjs.temaCode.GDIdiomaFRObjects1= [];
gdjs.temaCode.GDIdiomaFRObjects2= [];
gdjs.temaCode.GDIdiomaFRObjects3= [];
gdjs.temaCode.GDIdiomaHeaderObjects1= [];
gdjs.temaCode.GDIdiomaHeaderObjects2= [];
gdjs.temaCode.GDIdiomaHeaderObjects3= [];
gdjs.temaCode.GDMarcaIdiomaObjects1= [];
gdjs.temaCode.GDMarcaIdiomaObjects2= [];
gdjs.temaCode.GDMarcaIdiomaObjects3= [];
gdjs.temaCode.GDBotonModoOscuroObjects1= [];
gdjs.temaCode.GDBotonModoOscuroObjects2= [];
gdjs.temaCode.GDBotonModoOscuroObjects3= [];
gdjs.temaCode.GDNewSprite4Objects1= [];
gdjs.temaCode.GDNewSprite4Objects2= [];
gdjs.temaCode.GDNewSprite4Objects3= [];


gdjs.temaCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.temaCode.GDBotonModoOscuroObjects1, gdjs.temaCode.GDBotonModoOscuroObjects2);

gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects2);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects2);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects2);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects2);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.temaCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.temaCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects2[i].getBehavior("Text").setText("Modo oscuro: ON");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.temaCode.GDNewSpriteObjects2[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.temaCode.GDNewSprite2Objects2[i].setColor("0;0;0");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.temaCode.GDBotonModoOscuroObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.temaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.temaCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].getBehavior("Text").setText("Modo oscuro: OFF");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSpriteObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSprite2Objects1[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("verde");
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("azul");
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("amarillo");
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("rosa");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "verde");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "amarillo");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "rosa");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "azul");
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
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("es");
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
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("en");
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
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("de");
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
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("fr");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "es");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "en");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "de");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "fr");
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotonModoOscuro"), gdjs.temaCode.GDBotonModoOscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.temaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.temaCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].getBehavior("Text").setText("Modo oscuro: ON");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSpriteObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSprite2Objects1[i].setColor("0;0;0");
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
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotonModoOscuro"), gdjs.temaCode.GDBotonModoOscuroObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.temaCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.temaCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].getBehavior("Text").setText("Modo oscuro: OFF");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaVerdeObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaVerdeObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAzulObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAzulObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaAmarilloObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaAmarilloObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDEtiquetaRosaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDEtiquetaRosaObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDIdiomaHeaderObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDIdiomaHeaderObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDBotonModoOscuroObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDBotonModoOscuroObjects1[i].setColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSpriteObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.temaCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.temaCode.GDNewSprite2Objects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonModoOscuro"), gdjs.temaCode.GDBotonModoOscuroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.temaCode.GDBotonModoOscuroObjects1.length;i<l;++i) {
    if ( gdjs.temaCode.GDBotonModoOscuroObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.temaCode.GDBotonModoOscuroObjects1[k] = gdjs.temaCode.GDBotonModoOscuroObjects1[i];
        ++k;
    }
}
gdjs.temaCode.GDBotonModoOscuroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs.temaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "verde");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX((( gdjs.temaCode.GDEtiquetaVerdeObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaVerdeObjects1[0].getX()) + (( gdjs.temaCode.GDEtiquetaVerdeObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaVerdeObjects1[0].getWidth()) + 24);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY((( gdjs.temaCode.GDEtiquetaVerdeObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaVerdeObjects1[0].getY()) + (( gdjs.temaCode.GDEtiquetaVerdeObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaVerdeObjects1[0].getHeight()) / 2 - (gdjs.temaCode.GDMarcaTemaObjects1[i].getHeight()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "amarillo");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX((( gdjs.temaCode.GDEtiquetaAmarilloObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAmarilloObjects1[0].getX()) + (( gdjs.temaCode.GDEtiquetaAmarilloObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAmarilloObjects1[0].getWidth()) + 24);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY((( gdjs.temaCode.GDEtiquetaAmarilloObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAmarilloObjects1[0].getY()) + (( gdjs.temaCode.GDEtiquetaAmarilloObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAmarilloObjects1[0].getHeight()) / 2 - (gdjs.temaCode.GDMarcaTemaObjects1[i].getHeight()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "rosa");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX((( gdjs.temaCode.GDEtiquetaRosaObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaRosaObjects1[0].getX()) + (( gdjs.temaCode.GDEtiquetaRosaObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaRosaObjects1[0].getWidth()) + 24);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY((( gdjs.temaCode.GDEtiquetaRosaObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaRosaObjects1[0].getY()) + (( gdjs.temaCode.GDEtiquetaRosaObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaRosaObjects1[0].getHeight()) / 2 - (gdjs.temaCode.GDMarcaTemaObjects1[i].getHeight()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "azul");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("MarcaTema"), gdjs.temaCode.GDMarcaTemaObjects1);
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setX((( gdjs.temaCode.GDEtiquetaAzulObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAzulObjects1[0].getX()) + (( gdjs.temaCode.GDEtiquetaAzulObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAzulObjects1[0].getWidth()) + 24);
}
}
{for(var i = 0, len = gdjs.temaCode.GDMarcaTemaObjects1.length ;i < len;++i) {
    gdjs.temaCode.GDMarcaTemaObjects1[i].setY((( gdjs.temaCode.GDEtiquetaAzulObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAzulObjects1[0].getY()) + (( gdjs.temaCode.GDEtiquetaAzulObjects1.length === 0 ) ? 0 :gdjs.temaCode.GDEtiquetaAzulObjects1[0].getHeight()) / 2 - (gdjs.temaCode.GDMarcaTemaObjects1[i].getHeight()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAmarillo"), gdjs.temaCode.GDEtiquetaAmarilloObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaAzul"), gdjs.temaCode.GDEtiquetaAzulObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaRosa"), gdjs.temaCode.GDEtiquetaRosaObjects1);
gdjs.copyArray(runtimeScene.getObjects("EtiquetaVerde"), gdjs.temaCode.GDEtiquetaVerdeObjects1);
gdjs.copyArray(runtimeScene.getObjects("IdiomaHeader"), gdjs.temaCode.GDIdiomaHeaderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("es");
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


};

gdjs.temaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.temaCode.GDNewSpriteObjects1.length = 0;
gdjs.temaCode.GDNewSpriteObjects2.length = 0;
gdjs.temaCode.GDNewSpriteObjects3.length = 0;
gdjs.temaCode.GDNewSprite2Objects1.length = 0;
gdjs.temaCode.GDNewSprite2Objects2.length = 0;
gdjs.temaCode.GDNewSprite2Objects3.length = 0;
gdjs.temaCode.GDNewSprite3Objects1.length = 0;
gdjs.temaCode.GDNewSprite3Objects2.length = 0;
gdjs.temaCode.GDNewSprite3Objects3.length = 0;
gdjs.temaCode.GDTemaVerdeObjects1.length = 0;
gdjs.temaCode.GDTemaVerdeObjects2.length = 0;
gdjs.temaCode.GDTemaVerdeObjects3.length = 0;
gdjs.temaCode.GDTemaAzulObjects1.length = 0;
gdjs.temaCode.GDTemaAzulObjects2.length = 0;
gdjs.temaCode.GDTemaAzulObjects3.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects1.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects2.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects3.length = 0;
gdjs.temaCode.GDTemaRosaObjects1.length = 0;
gdjs.temaCode.GDTemaRosaObjects2.length = 0;
gdjs.temaCode.GDTemaRosaObjects3.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects1.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects2.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects3.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects3.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects3.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects1.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects3.length = 0;
gdjs.temaCode.GDMarcaTemaObjects1.length = 0;
gdjs.temaCode.GDMarcaTemaObjects2.length = 0;
gdjs.temaCode.GDMarcaTemaObjects3.length = 0;
gdjs.temaCode.GDIdiomaESObjects1.length = 0;
gdjs.temaCode.GDIdiomaESObjects2.length = 0;
gdjs.temaCode.GDIdiomaESObjects3.length = 0;
gdjs.temaCode.GDIdiomaENObjects1.length = 0;
gdjs.temaCode.GDIdiomaENObjects2.length = 0;
gdjs.temaCode.GDIdiomaENObjects3.length = 0;
gdjs.temaCode.GDIdiomaDEObjects1.length = 0;
gdjs.temaCode.GDIdiomaDEObjects2.length = 0;
gdjs.temaCode.GDIdiomaDEObjects3.length = 0;
gdjs.temaCode.GDIdiomaFRObjects1.length = 0;
gdjs.temaCode.GDIdiomaFRObjects2.length = 0;
gdjs.temaCode.GDIdiomaFRObjects3.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects1.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects2.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects3.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects1.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects2.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects3.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects1.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects2.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects3.length = 0;
gdjs.temaCode.GDNewSprite4Objects1.length = 0;
gdjs.temaCode.GDNewSprite4Objects2.length = 0;
gdjs.temaCode.GDNewSprite4Objects3.length = 0;

gdjs.temaCode.eventsList1(runtimeScene);
gdjs.temaCode.GDNewSpriteObjects1.length = 0;
gdjs.temaCode.GDNewSpriteObjects2.length = 0;
gdjs.temaCode.GDNewSpriteObjects3.length = 0;
gdjs.temaCode.GDNewSprite2Objects1.length = 0;
gdjs.temaCode.GDNewSprite2Objects2.length = 0;
gdjs.temaCode.GDNewSprite2Objects3.length = 0;
gdjs.temaCode.GDNewSprite3Objects1.length = 0;
gdjs.temaCode.GDNewSprite3Objects2.length = 0;
gdjs.temaCode.GDNewSprite3Objects3.length = 0;
gdjs.temaCode.GDTemaVerdeObjects1.length = 0;
gdjs.temaCode.GDTemaVerdeObjects2.length = 0;
gdjs.temaCode.GDTemaVerdeObjects3.length = 0;
gdjs.temaCode.GDTemaAzulObjects1.length = 0;
gdjs.temaCode.GDTemaAzulObjects2.length = 0;
gdjs.temaCode.GDTemaAzulObjects3.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects1.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects2.length = 0;
gdjs.temaCode.GDTemaAmarilloObjects3.length = 0;
gdjs.temaCode.GDTemaRosaObjects1.length = 0;
gdjs.temaCode.GDTemaRosaObjects2.length = 0;
gdjs.temaCode.GDTemaRosaObjects3.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects1.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects2.length = 0;
gdjs.temaCode.GDEtiquetaVerdeObjects3.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAzulObjects3.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects1.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects2.length = 0;
gdjs.temaCode.GDEtiquetaAmarilloObjects3.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects1.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects2.length = 0;
gdjs.temaCode.GDEtiquetaRosaObjects3.length = 0;
gdjs.temaCode.GDMarcaTemaObjects1.length = 0;
gdjs.temaCode.GDMarcaTemaObjects2.length = 0;
gdjs.temaCode.GDMarcaTemaObjects3.length = 0;
gdjs.temaCode.GDIdiomaESObjects1.length = 0;
gdjs.temaCode.GDIdiomaESObjects2.length = 0;
gdjs.temaCode.GDIdiomaESObjects3.length = 0;
gdjs.temaCode.GDIdiomaENObjects1.length = 0;
gdjs.temaCode.GDIdiomaENObjects2.length = 0;
gdjs.temaCode.GDIdiomaENObjects3.length = 0;
gdjs.temaCode.GDIdiomaDEObjects1.length = 0;
gdjs.temaCode.GDIdiomaDEObjects2.length = 0;
gdjs.temaCode.GDIdiomaDEObjects3.length = 0;
gdjs.temaCode.GDIdiomaFRObjects1.length = 0;
gdjs.temaCode.GDIdiomaFRObjects2.length = 0;
gdjs.temaCode.GDIdiomaFRObjects3.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects1.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects2.length = 0;
gdjs.temaCode.GDIdiomaHeaderObjects3.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects1.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects2.length = 0;
gdjs.temaCode.GDMarcaIdiomaObjects3.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects1.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects2.length = 0;
gdjs.temaCode.GDBotonModoOscuroObjects3.length = 0;
gdjs.temaCode.GDNewSprite4Objects1.length = 0;
gdjs.temaCode.GDNewSprite4Objects2.length = 0;
gdjs.temaCode.GDNewSprite4Objects3.length = 0;


return;

}

gdjs['temaCode'] = gdjs.temaCode;
