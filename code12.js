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
gdjs.visor_32textoCode.GDFotoSantoObjects1= [];
gdjs.visor_32textoCode.GDFotoSantoObjects2= [];
gdjs.visor_32textoCode.GDFotoSantoObjects3= [];
gdjs.visor_32textoCode.GDFotoSantoObjects4= [];
gdjs.visor_32textoCode.GDcancioneroObjects1= [];
gdjs.visor_32textoCode.GDcancioneroObjects2= [];
gdjs.visor_32textoCode.GDcancioneroObjects3= [];
gdjs.visor_32textoCode.GDcancioneroObjects4= [];
gdjs.visor_32textoCode.GDBtnMasObjects1= [];
gdjs.visor_32textoCode.GDBtnMasObjects2= [];
gdjs.visor_32textoCode.GDBtnMasObjects3= [];
gdjs.visor_32textoCode.GDBtnMasObjects4= [];
gdjs.visor_32textoCode.GDBtnMenosObjects1= [];
gdjs.visor_32textoCode.GDBtnMenosObjects2= [];
gdjs.visor_32textoCode.GDBtnMenosObjects3= [];
gdjs.visor_32textoCode.GDBtnMenosObjects4= [];
gdjs.visor_32textoCode.GDSliderTextoObjects1= [];
gdjs.visor_32textoCode.GDSliderTextoObjects2= [];
gdjs.visor_32textoCode.GDSliderTextoObjects3= [];
gdjs.visor_32textoCode.GDSliderTextoObjects4= [];
gdjs.visor_32textoCode.GDLblTamObjects1= [];
gdjs.visor_32textoCode.GDLblTamObjects2= [];
gdjs.visor_32textoCode.GDLblTamObjects3= [];
gdjs.visor_32textoCode.GDLblTamObjects4= [];


gdjs.visor_32textoCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects3);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects3.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects3[i].getBehavior("Text").setText("LECTURAS DE HOY");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects3[i].getBehavior("Text").setText("PRIMERA LECTURA" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("primera_lectura").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "SALMO" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("salmo").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "EVANGELIO" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("evangelio").getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].getBehavior("Text").setText("LECTURAS DE HOY");
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


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("claveSanto", variable);
}
gdjs.visor_32textoCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsString() == "SANTO");
}
if (isConditionTrue_0) {
{gdjs.visor_32textoCode.localVariables[0].getFromIndex(0).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2));
}
}
gdjs.visor_32textoCode.localVariables.pop();

}


};gdjs.visor_32textoCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsString() == "LECTURAS DE HOY");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FotoSanto"), gdjs.visor_32textoCode.GDFotoSantoObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFotoSantoObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFotoSantoObjects2[i].hide();
}
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year"))) - 2, 2));
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
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(20).getAsString());
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(19).getAsString());
}
}

{ //Subevents
gdjs.visor_32textoCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.mapOfGDgdjs_9546visor_959532textoCode_9546GDatrasObjects1Objects = Hashtable.newFrom({"atras": gdjs.visor_32textoCode.GDatrasObjects1});
gdjs.visor_32textoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "escena principal");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "menu cancionero");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "menu oraciones");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "modomisa");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena modo misa", false);
}
}

}


};gdjs.visor_32textoCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].getBehavior("Text").setText("PRIMERA LECTURA");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("primera_lectura").getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].getBehavior("Text").setText("PRIMERA LECTURA");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText("No hay lecturas disponibles para hoy.");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].getBehavior("Text").setText("SALMO");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("salmo").getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].getBehavior("Text").setText("SALMO");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText("No hay lecturas disponibles para hoy.");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.eventsList6 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects2);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].getBehavior("Text").setText("EVANGELIO");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).getChild("evangelio").getAsString());
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].getBehavior("Text").setText("EVANGELIO");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText("No hay lecturas disponibles para hoy.");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.mapOfGDgdjs_9546visor_959532textoCode_9546GDatrasObjects1Objects = Hashtable.newFrom({"atras": gdjs.visor_32textoCode.GDatrasObjects1});
gdjs.visor_32textoCode.eventsList7 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "menu cancionero");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1, gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);

{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].setCharacterSize(26);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1, gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2);

{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects2[i].setCharacterSize(36);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(gdjs.visor_32textoCode.GDcancioneroObjects1, gdjs.visor_32textoCode.GDcancioneroObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.visor_32textoCode.GDcancioneroObjects2.length === 0 ) ? "" :gdjs.visor_32textoCode.GDcancioneroObjects2[0].getBehavior("Text").getText())) > 30);
}
if (isConditionTrue_0) {
/* Reuse gdjs.visor_32textoCode.GDcancioneroObjects2 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].setCharacterSize(52);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(gdjs.visor_32textoCode.GDcancioneroObjects1, gdjs.visor_32textoCode.GDcancioneroObjects2);


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.visor_32textoCode.GDcancioneroObjects2.length === 0 ) ? "" :gdjs.visor_32textoCode.GDcancioneroObjects2[0].getBehavior("Text").getText())) > 22);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.visor_32textoCode.GDcancioneroObjects2 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects2.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects2[i].setCharacterSize(68);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.visor_32textoCode.GDcancioneroObjects1 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].setCharacterSize(100);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.visor_32textoCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.visor_32textoCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.visor_32textoCode.eventsList3(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).mul(0.88);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
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
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
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
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.evtTools.common.clamp((gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getY()), 600 - (gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getHeight()) + 1000, 600));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.visor_32textoCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32textoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32textoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.visor_32textoCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.visor_32textoCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.visor_32textoCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.visor_32textoCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.visor_32textoCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.visor_32textoCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32textoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32textoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.visor_32textoCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.visor_32textoCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.visor_32textoCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.visor_32textoCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.visor_32textoCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.visor_32textoCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32textoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32textoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.visor_32textoCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.visor_32textoCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.visor_32textoCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.visor_32textoCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.visor_32textoCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.visor_32textoCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.visor_32textoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.visor_32textoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextoEvangelio"), gdjs.visor_32textoCode.GDTextoEvangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_Cargando"), gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1);
gdjs.copyArray(runtimeScene.getObjects("anterior"), gdjs.visor_32textoCode.GDanteriorObjects1);
gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);
gdjs.copyArray(runtimeScene.getObjects("siguiente"), gdjs.visor_32textoCode.GDsiguienteObjects1);
gdjs.copyArray(runtimeScene.getObjects("tapar_texto"), gdjs.visor_32textoCode.GDtapar_9595textoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.visor_32textoCode.GDtitulo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.visor_32textoCode.GDvolverObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFondoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDatrasObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDatrasObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDsiguienteObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDsiguienteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDanteriorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDanteriorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDtapar_9595textoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtapar_9595textoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDtitulo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTextoEvangelioObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTextoEvangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDTexto_9595CargandoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsString() == "PRIMERA LECTURA");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FotoSanto"), gdjs.visor_32textoCode.GDFotoSantoObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFotoSantoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFotoSantoObjects1[i].hide();
}
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year"))) - 2, 2));
}

{ //Subevents
gdjs.visor_32textoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsString() == "SALMO");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FotoSanto"), gdjs.visor_32textoCode.GDFotoSantoObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFotoSantoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFotoSantoObjects1[i].hide();
}
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year"))) - 2, 2));
}

{ //Subevents
gdjs.visor_32textoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsString() == "EVANGELIO");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FotoSanto"), gdjs.visor_32textoCode.GDFotoSantoObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDFotoSantoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDFotoSantoObjects1[i].hide();
}
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"))) - 1, 2) + "-" + gdjs.evtTools.string.subStr("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") + 1)) - 1, 2) + "-" + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")), gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year"))) - 2, 2));
}

{ //Subevents
gdjs.visor_32textoCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.visor_32textoCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "elegir");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.visor_32textoCode.mapOfGDgdjs_9546visor_959532textoCode_9546GDatrasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "elegir", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
gdjs.copyArray(runtimeScene.getObjects("cancionero"), gdjs.visor_32textoCode.GDcancioneroObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDcancioneroObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDcancioneroObjects1[i].setWrappingWidth(1040);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setWrappingWidth(1080);
}
}

{ //Subevents
gdjs.visor_32textoCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "menu cancionero");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(26);
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(26);
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
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(21).getAsString() == "menu cancionero");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(36);
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(36);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMas"), gdjs.visor_32textoCode.GDBtnMasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDBtnMasObjects1.length;i<l;++i) {
    if ( gdjs.visor_32textoCode.GDBtnMasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDBtnMasObjects1[k] = gdjs.visor_32textoCode.GDBtnMasObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDBtnMasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenos"), gdjs.visor_32textoCode.GDBtnMenosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDBtnMenosObjects1.length;i<l;++i) {
    if ( gdjs.visor_32textoCode.GDBtnMenosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDBtnMenosObjects1[k] = gdjs.visor_32textoCode.GDBtnMenosObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDBtnMenosObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 16);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(2);
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32textoCode.GDSliderTextoObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32textoCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( gdjs.visor_32textoCode.GDSliderTextoObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDSliderTextoObjects1[k] = gdjs.visor_32textoCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)) != runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1);
/* Reuse gdjs.visor_32textoCode.GDSliderTextoObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(16 + (( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)) * 44 / 100);
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDCuerpo_9595visorObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderTexto"), gdjs.visor_32textoCode.GDSliderTextoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.visor_32textoCode.GDSliderTextoObjects1.length;i<l;++i) {
    if ( !(gdjs.visor_32textoCode.GDSliderTextoObjects1[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.visor_32textoCode.GDSliderTextoObjects1[k] = gdjs.visor_32textoCode.GDSliderTextoObjects1[i];
        ++k;
    }
}
gdjs.visor_32textoCode.GDSliderTextoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)) != (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.visor_32textoCode.GDSliderTextoObjects1 */
{for(var i = 0, len = gdjs.visor_32textoCode.GDSliderTextoObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDSliderTextoObjects1[i].SetValue((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 16) * 100 / 44, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.visor_32textoCode.GDSliderTextoObjects1.length === 0 ) ? 0 :gdjs.visor_32textoCode.GDSliderTextoObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LblTam"), gdjs.visor_32textoCode.GDLblTamObjects1);
{for(var i = 0, len = gdjs.visor_32textoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDLblTamObjects1[i].getBehavior("Text").setText("Tamaño del texto");
}
}
{for(var i = 0, len = gdjs.visor_32textoCode.GDLblTamObjects1.length ;i < len;++i) {
    gdjs.visor_32textoCode.GDLblTamObjects1[i].setCharacterSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
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
gdjs.visor_32textoCode.GDFotoSantoObjects1.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects2.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects3.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects4.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects1.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects2.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects3.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects4.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects1.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects2.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects3.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects4.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects1.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects2.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects3.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects4.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects1.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects2.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects3.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects4.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects1.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects2.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects3.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects4.length = 0;

gdjs.visor_32textoCode.eventsList8(runtimeScene);
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
gdjs.visor_32textoCode.GDFotoSantoObjects1.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects2.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects3.length = 0;
gdjs.visor_32textoCode.GDFotoSantoObjects4.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects1.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects2.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects3.length = 0;
gdjs.visor_32textoCode.GDcancioneroObjects4.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects1.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects2.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects3.length = 0;
gdjs.visor_32textoCode.GDBtnMasObjects4.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects1.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects2.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects3.length = 0;
gdjs.visor_32textoCode.GDBtnMenosObjects4.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects1.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects2.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects3.length = 0;
gdjs.visor_32textoCode.GDSliderTextoObjects4.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects1.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects2.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects3.length = 0;
gdjs.visor_32textoCode.GDLblTamObjects4.length = 0;


return;

}

gdjs['visor_32textoCode'] = gdjs.visor_32textoCode;
