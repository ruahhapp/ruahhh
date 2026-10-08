gdjs.menu_32cancioneroCode = {};
gdjs.menu_32cancioneroCode.localVariables = [];
gdjs.menu_32cancioneroCode.idToCallbackMap = new Map();
gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects1= [];
gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects2= [];
gdjs.menu_32cancioneroCode.GDfondofondoObjects1= [];
gdjs.menu_32cancioneroCode.GDfondofondoObjects2= [];
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1= [];
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects2= [];
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1= [];
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects2= [];
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1= [];
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects2= [];
gdjs.menu_32cancioneroCode.GDsantoObjects1= [];
gdjs.menu_32cancioneroCode.GDsantoObjects2= [];
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1= [];
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects2= [];
gdjs.menu_32cancioneroCode.GDaleluyaObjects1= [];
gdjs.menu_32cancioneroCode.GDaleluyaObjects2= [];
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1= [];
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects2= [];
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1= [];
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects2= [];
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1= [];
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects2= [];
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1= [];
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects2= [];
gdjs.menu_32cancioneroCode.GDNewTextObjects1= [];
gdjs.menu_32cancioneroCode.GDNewTextObjects2= [];
gdjs.menu_32cancioneroCode.GDAtrasObjects1= [];
gdjs.menu_32cancioneroCode.GDAtrasObjects2= [];
gdjs.menu_32cancioneroCode.GDtapaObjects1= [];
gdjs.menu_32cancioneroCode.GDtapaObjects2= [];
gdjs.menu_32cancioneroCode.GDNewSpriteObjects1= [];
gdjs.menu_32cancioneroCode.GDNewSpriteObjects2= [];
gdjs.menu_32cancioneroCode.GDNewSprite2Objects1= [];
gdjs.menu_32cancioneroCode.GDNewSprite2Objects2= [];


gdjs.menu_32cancioneroCode.mapOfGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595entradaObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDacciondegrasiabotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDofertoriobotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDsantoObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595villancicosObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDcomunion_95959595botonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDvirgenbotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595adoracionObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDaleluyaObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDcordero_95959595botonObjects1Objects = Hashtable.newFrom({"boton_entrada": gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1, "acciondegrasiaboton": gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1, "ofertorioboton": gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1, "santo": gdjs.menu_32cancioneroCode.GDsantoObjects1, "boton_villancicos": gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1, "comunion_boton": gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1, "virgenboton": gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1, "boton_adoracion": gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1, "aleluya": gdjs.menu_32cancioneroCode.GDaleluyaObjects1, "cordero_boton": gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1});
gdjs.menu_32cancioneroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).mul(0.88);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 1700), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acciondegrasiaboton"), gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("aleluya"), gdjs.menu_32cancioneroCode.GDaleluyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_adoracion"), gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_entrada"), gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_villancicos"), gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1);
gdjs.copyArray(runtimeScene.getObjects("comunion_boton"), gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cordero_boton"), gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ofertorioboton"), gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("santo"), gdjs.menu_32cancioneroCode.GDsantoObjects1);
gdjs.copyArray(runtimeScene.getObjects("virgenboton"), gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1);
{for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDsantoObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDsantoObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getScaleX()));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].returnVariable(gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getVariables().get("EscalaOriginal")).setNumber((gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getScaleX()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("acciondegrasiaboton"), gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("aleluya"), gdjs.menu_32cancioneroCode.GDaleluyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_adoracion"), gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_entrada"), gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_villancicos"), gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1);
gdjs.copyArray(runtimeScene.getObjects("comunion_boton"), gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cordero_boton"), gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ofertorioboton"), gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("santo"), gdjs.menu_32cancioneroCode.GDsantoObjects1);
gdjs.copyArray(runtimeScene.getObjects("virgenboton"), gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menu_32cancioneroCode.mapOfGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595entradaObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDacciondegrasiabotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDofertoriobotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDsantoObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595villancicosObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDcomunion_95959595botonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDvirgenbotonObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDboton_95959595adoracionObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDaleluyaObjects1ObjectsGDgdjs_9546menu_959532cancioneroCode_9546GDcordero_95959595botonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDaleluyaObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDsantoObjects1 */
/* Reuse gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1 */
{for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDsantoObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
}
{for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDsantoObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getVariables().get("EscalaOriginal"))) * 0.93);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acciondegrasiaboton"), gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("aleluya"), gdjs.menu_32cancioneroCode.GDaleluyaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_adoracion"), gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_entrada"), gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton_villancicos"), gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1);
gdjs.copyArray(runtimeScene.getObjects("comunion_boton"), gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("cordero_boton"), gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ofertorioboton"), gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("santo"), gdjs.menu_32cancioneroCode.GDsantoObjects1);
gdjs.copyArray(runtimeScene.getObjects("virgenboton"), gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1);
{for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDsantoObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getBehavior("Scale").setScaleX((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getVariables().get("EscalaOriginal"))));
}
}
{for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDsantoObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getVariables().get("EscalaOriginal"))));
}
for(var i = 0, len = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length ;i < len;++i) {
    gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getBehavior("Scale").setScaleY((gdjs.RuntimeObject.getVariableNumber(gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getVariables().get("EscalaOriginal"))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Atras"), gdjs.menu_32cancioneroCode.GDAtrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDAtrasObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDAtrasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDAtrasObjects1[k] = gdjs.menu_32cancioneroCode.GDAtrasObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDAtrasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_entrada"), gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[k] = gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("acciondegrasiaboton"), gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[k] = gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ofertorioboton"), gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[k] = gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("santo"), gdjs.menu_32cancioneroCode.GDsantoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDsantoObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDsantoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDsantoObjects1[k] = gdjs.menu_32cancioneroCode.GDsantoObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDsantoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_adoracion"), gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[k] = gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cordero_boton"), gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[k] = gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(7);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("comunion_boton"), gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[k] = gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(8);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("virgenboton"), gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[k] = gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(9);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_villancicos"), gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[k] = gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("aleluya"), gdjs.menu_32cancioneroCode.GDaleluyaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length;i<l;++i) {
    if ( gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menu_32cancioneroCode.GDaleluyaObjects1[k] = gdjs.menu_32cancioneroCode.GDaleluyaObjects1[i];
        ++k;
    }
}
gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "Capa cancionero", 0)) < 30);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(6);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("menu cancionero");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


};

gdjs.menu_32cancioneroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects1.length = 0;
gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects2.length = 0;
gdjs.menu_32cancioneroCode.GDfondofondoObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDfondofondoObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDsantoObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDsantoObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDaleluyaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewTextObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewTextObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDAtrasObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDAtrasObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDtapaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDtapaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewSpriteObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewSpriteObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewSprite2Objects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewSprite2Objects2.length = 0;

gdjs.menu_32cancioneroCode.eventsList0(runtimeScene);
gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects1.length = 0;
gdjs.menu_32cancioneroCode.GDsegundo_9595fondo_9595oraciones_9595Objects2.length = 0;
gdjs.menu_32cancioneroCode.GDfondofondoObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDfondofondoObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595entradaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDacciondegrasiabotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDofertoriobotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDsantoObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDsantoObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595adoracionObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDaleluyaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDaleluyaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDcordero_9595botonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDcomunion_9595botonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDvirgenbotonObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDboton_9595villancicosObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewTextObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewTextObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDAtrasObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDAtrasObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDtapaObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDtapaObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewSpriteObjects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewSpriteObjects2.length = 0;
gdjs.menu_32cancioneroCode.GDNewSprite2Objects1.length = 0;
gdjs.menu_32cancioneroCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['menu_32cancioneroCode'] = gdjs.menu_32cancioneroCode;
