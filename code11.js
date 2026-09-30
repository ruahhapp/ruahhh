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


gdjs.Visor_32viaCode.mapOfGDgdjs_9546Visor_959532viaCode_9546GDatrasObjects1Objects = Hashtable.newFrom({"atras": gdjs.Visor_32viaCode.GDatrasObjects1});
gdjs.Visor_32viaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(13).setString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(13).setString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
}

}


};gdjs.Visor_32viaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(13).setString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuerpo_visor"), gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(13).setString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber())).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
}

}


};gdjs.Visor_32viaCode.eventsList2 = function(runtimeScene) {
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
/* Reuse gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1 */
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].setY(gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getY() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10))));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).mul(0.92);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
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
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 2);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 3);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 4);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 5);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 6);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 7);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 8);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 9);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 10);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 11);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 12);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 13);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 14);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 15);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() < 15);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber((runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() + 1));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() > 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber((runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() - 1));
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
gdjs.copyArray(runtimeScene.getObjects("titulo_visor"), gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1);
{for(var i = 0, len = gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDtitulo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString());
}
}
{for(var i = 0, len = gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1.length ;i < len;++i) {
    gdjs.Visor_32viaCode.GDCuerpo_9595visorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
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

gdjs.Visor_32viaCode.eventsList2(runtimeScene);
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


return;

}

gdjs['Visor_32viaCode'] = gdjs.Visor_32viaCode;
