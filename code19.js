gdjs.visor_32santoCode = {};
gdjs.visor_32santoCode.localVariables = [];
gdjs.visor_32santoCode.idToCallbackMap = new Map();
gdjs.visor_32santoCode.GDtitulo_9595santoObjects1= [];
gdjs.visor_32santoCode.GDtitulo_9595santoObjects2= [];
gdjs.visor_32santoCode.GDtitulo_9595santoObjects3= [];
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1= [];
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2= [];
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects3= [];
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1= [];
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2= [];
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects3= [];
gdjs.visor_32santoCode.GDatras_9595santoObjects1= [];
gdjs.visor_32santoCode.GDatras_9595santoObjects2= [];
gdjs.visor_32santoCode.GDatras_9595santoObjects3= [];
gdjs.visor_32santoCode.GDNewSpriteObjects1= [];
gdjs.visor_32santoCode.GDNewSpriteObjects2= [];
gdjs.visor_32santoCode.GDNewSpriteObjects3= [];
gdjs.visor_32santoCode.GDNewSprite2Objects1= [];
gdjs.visor_32santoCode.GDNewSprite2Objects2= [];
gdjs.visor_32santoCode.GDNewSprite2Objects3= [];
gdjs.visor_32santoCode.GDBtnMasObjects1= [];
gdjs.visor_32santoCode.GDBtnMasObjects2= [];
gdjs.visor_32santoCode.GDBtnMasObjects3= [];
gdjs.visor_32santoCode.GDBtnMenosObjects1= [];
gdjs.visor_32santoCode.GDBtnMenosObjects2= [];
gdjs.visor_32santoCode.GDBtnMenosObjects3= [];
gdjs.visor_32santoCode.GDSliderTextoObjects1= [];
gdjs.visor_32santoCode.GDSliderTextoObjects2= [];
gdjs.visor_32santoCode.GDSliderTextoObjects3= [];
gdjs.visor_32santoCode.GDLblTamObjects1= [];
gdjs.visor_32santoCode.GDLblTamObjects2= [];
gdjs.visor_32santoCode.GDLblTamObjects3= [];


gdjs.visor_32santoCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.visor_32santoCode.localVariables[0].getFromIndex(0).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects2);
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(gdjs.visor_32santoCode.localVariables[0].getFromIndex(0).getAsString()).getChild("nombre").getAsString());
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2[i].getBehavior("Text").setText("¿QUIEN FUE?" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild(gdjs.visor_32santoCode.localVariables[0].getFromIndex(0).getAsString()).getChild("resumen").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild(gdjs.visor_32santoCode.localVariables[0].getFromIndex(0).getAsString()).getChild("biografia").getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects2);
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects2[i].getBehavior("Text").setText("SANTO");
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2[i].getBehavior("Text").setText("No hay santo disponible para hoy.");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1 == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday") >= 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday") <= 31);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FotoSantoGrande"), gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2);
{for(var i = 0, len = gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2));
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("FotoSantoGrande"), gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32santoCode.eventsList1 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("claveHoy", variable);
}
gdjs.visor_32santoCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.visor_32santoCode.localVariables[0].getFromIndex(0).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}

{ //Subevents
gdjs.visor_32santoCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.visor_32santoCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("atras_santo"), gdjs.visor_32santoCode.GDatras_9595santoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length;i<l;++i) {
    if ( gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32santoCode.GDatras_9595santoObjects1[k] = gdjs.visor_32santoCode.GDatras_9595santoObjects1[i];
        ++k;
    }
}
gdjs.visor_32santoCode.GDatras_9595santoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
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
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) > 0.5);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).mul(0.90);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 4000), "", 0);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32santoCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32santoCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32santoCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32santoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32santoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("atras_santo"), gdjs.visor_32santoCode.GDatras_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "azul");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32santoCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32santoCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32santoCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32santoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32santoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("atras_santo"), gdjs.visor_32santoCode.GDatras_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "amarillo");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32santoCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32santoCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32santoCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32santoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32santoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("atras_santo"), gdjs.visor_32santoCode.GDatras_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "rosa");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32santoCode.GDBtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32santoCode.GDBtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32santoCode.GDLblTamObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32santoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32santoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("atras_santo"), gdjs.visor_32santoCode.GDatras_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_santo"), gdjs.visor_32santoCode.GDtitulo_9595santoObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDatras_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDatras_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDtitulo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMasObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDBtnMenosObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32santoCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setWrappingWidth(950);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(36);
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setCharacterSize(36);
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32santoCode.GDBtnMasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32santoCode.GDBtnMasObjects1.length;i<l;++i) {
    if ( gdjs.visor_32santoCode.GDBtnMasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32santoCode.GDBtnMasObjects1[k] = gdjs.visor_32santoCode.GDBtnMasObjects1[i];
        ++k;
    }
}
gdjs.visor_32santoCode.GDBtnMasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32santoCode.GDBtnMenosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32santoCode.GDBtnMenosObjects1.length;i<l;++i) {
    if ( gdjs.visor_32santoCode.GDBtnMenosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32santoCode.GDBtnMenosObjects1[k] = gdjs.visor_32santoCode.GDBtnMenosObjects1[i];
        ++k;
    }
}
gdjs.visor_32santoCode.GDBtnMenosObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 16);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(2);
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32santoCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32santoCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( gdjs.visor_32santoCode.GDSliderTextoObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32santoCode.GDSliderTextoObjects1[k] = gdjs.visor_32santoCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.visor_32santoCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)) != runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_santo"), gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1);
/* Reuse gdjs.visor_32santoCode.GDSliderTextoObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(16 + (( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)) * 44 / 100);
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32santoCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32santoCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( !(gdjs.visor_32santoCode.GDSliderTextoObjects1[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32santoCode.GDSliderTextoObjects1[k] = gdjs.visor_32santoCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.visor_32santoCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)) != (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.visor_32santoCode.GDSliderTextoObjects1 */
{for(var i = 0, len = gdjs.visor_32santoCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32santoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32santoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32santoCode.GDLblTamObjects1);
{for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].getBehavior("Text").setText("Tamaño del texto");
}
}
{for(var i = 0, len = gdjs.visor_32santoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32santoCode.GDLblTamObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};

gdjs.visor_32santoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDtitulo_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDtitulo_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects3.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects1.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects2.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects3.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects1.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects2.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects3.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects1.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects2.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects3.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects1.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects2.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects3.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects1.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects2.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects3.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects1.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects2.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects3.length = 0;

gdjs.visor_32santoCode.eventsList1(runtimeScene);
gdjs.visor_32santoCode.GDtitulo_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDtitulo_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDtitulo_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDCuerpo_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects1.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects2.length = 0;
gdjs.visor_32santoCode.GDFotoSantoGrandeObjects3.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects1.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects2.length = 0;
gdjs.visor_32santoCode.GDatras_9595santoObjects3.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects1.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects2.length = 0;
gdjs.visor_32santoCode.GDNewSpriteObjects3.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects1.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects2.length = 0;
gdjs.visor_32santoCode.GDNewSprite2Objects3.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects1.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects2.length = 0;
gdjs.visor_32santoCode.GDBtnMasObjects3.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects1.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects2.length = 0;
gdjs.visor_32santoCode.GDBtnMenosObjects3.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects1.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects2.length = 0;
gdjs.visor_32santoCode.GDSliderTextoObjects3.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects1.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects2.length = 0;
gdjs.visor_32santoCode.GDLblTamObjects3.length = 0;


return;

}

gdjs['visor_32santoCode'] = gdjs.visor_32santoCode;
