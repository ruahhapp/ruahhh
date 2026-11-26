gdjs.guardadosCode = {};
gdjs.guardadosCode.localVariables = [];
gdjs.guardadosCode.idToCallbackMap = new Map();
gdjs.guardadosCode.GDtitulo_9595guardadosObjects1= [];
gdjs.guardadosCode.GDtitulo_9595guardadosObjects2= [];
gdjs.guardadosCode.GDtitulo_9595guardadosObjects3= [];
gdjs.guardadosCode.GDtitulo_9595guardadosObjects4= [];
gdjs.guardadosCode.GDtitulo_9595guardadosObjects5= [];
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1= [];
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects2= [];
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects3= [];
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects4= [];
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects5= [];
gdjs.guardadosCode.GDcard_9595fondoObjects1= [];
gdjs.guardadosCode.GDcard_9595fondoObjects2= [];
gdjs.guardadosCode.GDcard_9595fondoObjects3= [];
gdjs.guardadosCode.GDcard_9595fondoObjects4= [];
gdjs.guardadosCode.GDcard_9595fondoObjects5= [];
gdjs.guardadosCode.GDcard_9595refObjects1= [];
gdjs.guardadosCode.GDcard_9595refObjects2= [];
gdjs.guardadosCode.GDcard_9595refObjects3= [];
gdjs.guardadosCode.GDcard_9595refObjects4= [];
gdjs.guardadosCode.GDcard_9595refObjects5= [];
gdjs.guardadosCode.GDcard_9595versObjects1= [];
gdjs.guardadosCode.GDcard_9595versObjects2= [];
gdjs.guardadosCode.GDcard_9595versObjects3= [];
gdjs.guardadosCode.GDcard_9595versObjects4= [];
gdjs.guardadosCode.GDcard_9595versObjects5= [];
gdjs.guardadosCode.GDcard_9595iconObjects1= [];
gdjs.guardadosCode.GDcard_9595iconObjects2= [];
gdjs.guardadosCode.GDcard_9595iconObjects3= [];
gdjs.guardadosCode.GDcard_9595iconObjects4= [];
gdjs.guardadosCode.GDcard_9595iconObjects5= [];
gdjs.guardadosCode.GDtexto_9595vacioObjects1= [];
gdjs.guardadosCode.GDtexto_9595vacioObjects2= [];
gdjs.guardadosCode.GDtexto_9595vacioObjects3= [];
gdjs.guardadosCode.GDtexto_9595vacioObjects4= [];
gdjs.guardadosCode.GDtexto_9595vacioObjects5= [];


gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595fondoObjects2Objects = Hashtable.newFrom({"card_fondo": gdjs.guardadosCode.GDcard_9595fondoObjects2});
gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595refObjects2Objects = Hashtable.newFrom({"card_ref": gdjs.guardadosCode.GDcard_9595refObjects2});
gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595versObjects2Objects = Hashtable.newFrom({"card_vers": gdjs.guardadosCode.GDcard_9595versObjects2});
gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595iconObjects2Objects = Hashtable.newFrom({"card_icon": gdjs.guardadosCode.GDcard_9595iconObjects2});
gdjs.guardadosCode.eventsList0 = function(runtimeScene) {

};gdjs.guardadosCode.eventsList1 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("I", variable);
}
gdjs.guardadosCode.localVariables.push(variables);
}
const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(6));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.guardadosCode.GDcard_9595fondoObjects2.length = 0;

gdjs.guardadosCode.GDcard_9595iconObjects2.length = 0;

gdjs.copyArray(gdjs.guardadosCode.GDcard_9595refObjects1, gdjs.guardadosCode.GDcard_9595refObjects2);

gdjs.copyArray(gdjs.guardadosCode.GDcard_9595versObjects1, gdjs.guardadosCode.GDcard_9595versObjects2);


gdjs.guardadosCode.localVariables[0].getFromIndex(0).setNumber(repeatIndex2);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595fondoObjects2Objects, 75, 320 + gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber() * 460, "");
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595fondoObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595fondoObjects2[i].setWidth(1020);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595fondoObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595fondoObjects2[i].setHeight(420);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595fondoObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595fondoObjects2[i].returnVariable(gdjs.guardadosCode.GDcard_9595fondoObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595refObjects2Objects, 130, 350 + gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber() * 460, "");
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595refObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595refObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("referencia").getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595versObjects2Objects, 130, 430 + gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber() * 460, "");
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595versObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595versObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("versiculo").getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.guardadosCode.mapOfGDgdjs_9546guardadosCode_9546GDcard_95959595iconObjects2Objects, 950, 350 + gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber() * 460, "");
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595iconObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595iconObjects2[i].setWidth(70);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595iconObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595iconObjects2[i].setHeight(70);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595iconObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595iconObjects2[i].setColor("255;70;70");
}
}
}
}
gdjs.guardadosCode.localVariables.pop();

}


};gdjs.guardadosCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(6)) == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.guardadosCode.GDtexto_9595vacioObjects1, gdjs.guardadosCode.GDtexto_9595vacioObjects2);

{for(var i = 0, len = gdjs.guardadosCode.GDtexto_9595vacioObjects2.length ;i < len;++i) {
    gdjs.guardadosCode.GDtexto_9595vacioObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.guardadosCode.GDtexto_9595vacioObjects1 */
{for(var i = 0, len = gdjs.guardadosCode.GDtexto_9595vacioObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDtexto_9595vacioObjects1[i].hide();
}
}

{ //Subevents
gdjs.guardadosCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.guardadosCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("referencia").getAsString() == runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("referencia").getAsString());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("referencia").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("versiculo").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "— REFLEXIÓN —" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.guardadosCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("explicacion").getAsString());
}
}

}


};gdjs.guardadosCode.eventsList4 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("J", variable);
}
gdjs.guardadosCode.localVariables.push(variables);
}
const repeatCount3 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

gdjs.guardadosCode.localVariables[0].getFromIndex(0).setNumber(repeatIndex3);
let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.guardadosCode.eventsList3(runtimeScene);} //Subevents end.
}
}
gdjs.guardadosCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


};gdjs.guardadosCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("card_ref"), gdjs.guardadosCode.GDcard_9595refObjects1);
gdjs.copyArray(runtimeScene.getObjects("card_vers"), gdjs.guardadosCode.GDcard_9595versObjects1);
gdjs.copyArray(runtimeScene.getObjects("texto_vacio"), gdjs.guardadosCode.GDtexto_9595vacioObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ruah", "guardados", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(25).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595refObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595refObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595refObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595refObjects1[i].setWrappingWidth(760);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595versObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595versObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDcard_9595versObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDcard_9595versObjects1[i].setWrappingWidth(880);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDtexto_9595vacioObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDtexto_9595vacioObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.guardadosCode.GDtexto_9595vacioObjects1.length ;i < len;++i) {
    gdjs.guardadosCode.GDtexto_9595vacioObjects1[i].setWrappingWidth(970);
}
}

{ //Subevents
gdjs.guardadosCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_atras_guard"), gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1.length;i<l;++i) {
    if ( gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1[k] = gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1[i];
        ++k;
    }
}
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) < 30);
}
}
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
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
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
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1266, Math.max(1266, 320 + gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(6)) * 460)), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("card_fondo"), gdjs.guardadosCode.GDcard_9595fondoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.guardadosCode.GDcard_9595fondoObjects1.length;i<l;++i) {
    if ( gdjs.guardadosCode.GDcard_9595fondoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.guardadosCode.GDcard_9595fondoObjects1[k] = gdjs.guardadosCode.GDcard_9595fondoObjects1[i];
        ++k;
    }
}
gdjs.guardadosCode.GDcard_9595fondoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) < 30);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.guardadosCode.GDcard_9595fondoObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(((gdjs.guardadosCode.GDcard_9595fondoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.guardadosCode.GDcard_9595fondoObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(21).setString("VERSICULO DEL DIA");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("referencia").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("versiculo").getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setString("favoritos");
}

{ //Subevents
gdjs.guardadosCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.guardadosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.guardadosCode.GDtitulo_9595guardadosObjects1.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects2.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects3.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects4.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects5.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects2.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects3.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects4.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects5.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects1.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects2.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects3.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects4.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects5.length = 0;

gdjs.guardadosCode.eventsList5(runtimeScene);
gdjs.guardadosCode.GDtitulo_9595guardadosObjects1.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects2.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects3.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects4.length = 0;
gdjs.guardadosCode.GDtitulo_9595guardadosObjects5.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects1.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects2.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects3.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects4.length = 0;
gdjs.guardadosCode.GDbtn_9595atras_9595guardObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595fondoObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595refObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595versObjects5.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects1.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects2.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects3.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects4.length = 0;
gdjs.guardadosCode.GDcard_9595iconObjects5.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects1.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects2.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects3.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects4.length = 0;
gdjs.guardadosCode.GDtexto_9595vacioObjects5.length = 0;


return;

}

gdjs['guardadosCode'] = gdjs.guardadosCode;
