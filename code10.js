gdjs.visor_32textoCode = {};
gdjs.visor_32textoCode.localVariables = [];
gdjs.visor_32textoCode.idToCallbackMap = new Map();
gdjs.visor_32textoCode.GDFondoObjects1= [];
gdjs.visor_32textoCode.GDFondoObjects2= [];
gdjs.visor_32textoCode.GDFondoObjects3= [];
gdjs.visor_32textoCode.GDFondoObjects4= [];
gdjs.visor_32textoCode.GDtitulo_9595visorObjects1= [];
gdjs.visor_32textoCode.GDtitulo_9595visorObjects2= [];
gdjs.visor_32textoCode.GDtitulo_9595visorObjects3= [];
gdjs.visor_32textoCode.GDtitulo_9595visorObjects4= [];
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1= [];
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2= [];
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3= [];
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects4= [];
gdjs.visor_32textoCode.GDatrasObjects1= [];
gdjs.visor_32textoCode.GDatrasObjects2= [];
gdjs.visor_32textoCode.GDatrasObjects3= [];
gdjs.visor_32textoCode.GDatrasObjects4= [];
gdjs.visor_32textoCode.GDvolverObjects1= [];
gdjs.visor_32textoCode.GDvolverObjects2= [];
gdjs.visor_32textoCode.GDvolverObjects3= [];
gdjs.visor_32textoCode.GDvolverObjects4= [];
gdjs.visor_32textoCode.GDTextoEvangelioObjects1= [];
gdjs.visor_32textoCode.GDTextoEvangelioObjects2= [];
gdjs.visor_32textoCode.GDTextoEvangelioObjects3= [];
gdjs.visor_32textoCode.GDTextoEvangelioObjects4= [];
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1= [];
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects2= [];
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects3= [];
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects4= [];
gdjs.visor_32textoCode.GDNewSpriteObjects1= [];
gdjs.visor_32textoCode.GDNewSpriteObjects2= [];
gdjs.visor_32textoCode.GDNewSpriteObjects3= [];
gdjs.visor_32textoCode.GDNewSpriteObjects4= [];
gdjs.visor_32textoCode.GDNewSprite2Objects1= [];
gdjs.visor_32textoCode.GDNewSprite2Objects2= [];
gdjs.visor_32textoCode.GDNewSprite2Objects3= [];
gdjs.visor_32textoCode.GDNewSprite2Objects4= [];
gdjs.visor_32textoCode.GDsiguienteObjects1= [];
gdjs.visor_32textoCode.GDsiguienteObjects2= [];
gdjs.visor_32textoCode.GDsiguienteObjects3= [];
gdjs.visor_32textoCode.GDsiguienteObjects4= [];
gdjs.visor_32textoCode.GDanteriorObjects1= [];
gdjs.visor_32textoCode.GDanteriorObjects2= [];
gdjs.visor_32textoCode.GDanteriorObjects3= [];
gdjs.visor_32textoCode.GDanteriorObjects4= [];
gdjs.visor_32textoCode.GDtapar_9595textoObjects1= [];
gdjs.visor_32textoCode.GDtapar_9595textoObjects2= [];
gdjs.visor_32textoCode.GDtapar_9595textoObjects3= [];
gdjs.visor_32textoCode.GDtapar_9595textoObjects4= [];


gdjs.visor_32textoCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects3);
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects3.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects3[i].getBehavior("Text").setText("LECTURAS DE HOY");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3[i].getBehavior("Text").setText("PRIMERA LECTURA" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).getChild("primera_lectura").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "SALMO" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).getChild("salmo").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "EVANGELIO" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).getChild("evangelio").getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects2[i].getBehavior("Text").setText("LECTURAS DE HOY");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText("No hay lecturas disponibles para hoy.");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() == "LECTURAS DE HOY");
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2));
}

{ //Subevents
gdjs.visor_32textoCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString());
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.mapOfGDgdjs_9546visor_959532textoCode_9546GDatrasObjects1Objects = Hashtable.newFrom({"atras": gdjs.visor_32textoCode.GDatrasObjects1});
gdjs.visor_32textoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() == "escena principal");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() == "menu cancionero");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() == "menu oraciones");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() == "modomisa");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena modo misa", false);
}
}

}


};gdjs.visor_32textoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.visor_32textoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.visor_32textoCode.mapOfGDgdjs_9546visor_959532textoCode_9546GDatrasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.visor_32textoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length;i<l;++i) {
    if ( !(gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Arrastrable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[k] = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).mul(0.88);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length;i<l;++i) {
    if ( gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Arrastrable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[k] = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setX(18);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.evtTools.common.clamp((gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getY()), 550 - (gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getHeight()) + 1500, 550));
}
}
}

}


};

gdjs.visor_32textoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.visor_32textoCode.GDFondoObjects1.length = 0;
gdjs.visor_32textoCode.GDFondoObjects2.length = 0;
gdjs.visor_32textoCode.GDFondoObjects3.length = 0;
gdjs.visor_32textoCode.GDFondoObjects4.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects2.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects3.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects4.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects4.length = 0;
gdjs.visor_32textoCode.GDatrasObjects1.length = 0;
gdjs.visor_32textoCode.GDatrasObjects2.length = 0;
gdjs.visor_32textoCode.GDatrasObjects3.length = 0;
gdjs.visor_32textoCode.GDatrasObjects4.length = 0;
gdjs.visor_32textoCode.GDvolverObjects1.length = 0;
gdjs.visor_32textoCode.GDvolverObjects2.length = 0;
gdjs.visor_32textoCode.GDvolverObjects3.length = 0;
gdjs.visor_32textoCode.GDvolverObjects4.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects2.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects3.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects4.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects2.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects3.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects4.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects1.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects2.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects3.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects4.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects1.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects2.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects3.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects4.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects1.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects2.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects3.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects4.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects1.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects2.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects3.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects4.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects2.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects3.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects4.length = 0;

gdjs.visor_32textoCode.eventsList3(runtimeScene);
gdjs.visor_32textoCode.GDFondoObjects1.length = 0;
gdjs.visor_32textoCode.GDFondoObjects2.length = 0;
gdjs.visor_32textoCode.GDFondoObjects3.length = 0;
gdjs.visor_32textoCode.GDFondoObjects4.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects2.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects3.length = 0;
gdjs.visor_32textoCode.GDtitulo_9595visorObjects4.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3.length = 0;
gdjs.visor_32textoCode.GDCuerpo_9595visorObjects4.length = 0;
gdjs.visor_32textoCode.GDatrasObjects1.length = 0;
gdjs.visor_32textoCode.GDatrasObjects2.length = 0;
gdjs.visor_32textoCode.GDatrasObjects3.length = 0;
gdjs.visor_32textoCode.GDatrasObjects4.length = 0;
gdjs.visor_32textoCode.GDvolverObjects1.length = 0;
gdjs.visor_32textoCode.GDvolverObjects2.length = 0;
gdjs.visor_32textoCode.GDvolverObjects3.length = 0;
gdjs.visor_32textoCode.GDvolverObjects4.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects2.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects3.length = 0;
gdjs.visor_32textoCode.GDTextoEvangelioObjects4.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects2.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects3.length = 0;
gdjs.visor_32textoCode.GDTexto_9595CargandoObjects4.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects1.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects2.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects3.length = 0;
gdjs.visor_32textoCode.GDNewSpriteObjects4.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects1.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects2.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects3.length = 0;
gdjs.visor_32textoCode.GDNewSprite2Objects4.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects1.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects2.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects3.length = 0;
gdjs.visor_32textoCode.GDsiguienteObjects4.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects1.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects2.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects3.length = 0;
gdjs.visor_32textoCode.GDanteriorObjects4.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects2.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects3.length = 0;
gdjs.visor_32textoCode.GDtapar_9595textoObjects4.length = 0;


return;

}

gdjs['visor_32textoCode'] = gdjs.visor_32textoCode;
