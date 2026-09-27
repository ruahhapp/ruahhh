gdjs.Escena_32modo_32misaCode = {};
gdjs.Escena_32modo_32misaCode.localVariables = [];
gdjs.Escena_32modo_32misaCode.idToCallbackMap = new Map();
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2= [];
gdjs.Escena_32modo_32misaCode.GDatrasObjects1= [];
gdjs.Escena_32modo_32misaCode.GDatrasObjects2= [];
gdjs.Escena_32modo_32misaCode.GDcomObjects1= [];
gdjs.Escena_32modo_32misaCode.GDcomObjects2= [];
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1= [];
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2= [];
gdjs.Escena_32modo_32misaCode.GDfondoObjects1= [];
gdjs.Escena_32modo_32misaCode.GDfondoObjects2= [];
gdjs.Escena_32modo_32misaCode.GDtextoObjects1= [];
gdjs.Escena_32modo_32misaCode.GDtextoObjects2= [];
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1= [];
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1= [];
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2= [];


gdjs.Escena_32modo_32misaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("com"), gdjs.Escena_32modo_32misaCode.GDcomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDcomObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDcomObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDcomObjects1[k] = gdjs.Escena_32modo_32misaCode.GDcomObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setString("COMUNIÓN ESPIRITUAL");
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString("ORACIÓN PARA LA COMUNIÓN ESPIRITUAL" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Jesús mío, creo que estás verdaderamente presente en el Santísimo Sacramento del Altar." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Te amo sobre todas las cosas y deseo fervientemente recibirte dentro de mi alma." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Ya que deseando recibirte no puedo hacerlo ahora sacramentalmente, ven al menos espiritualmente a mi corazón." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Y como si ya te hubiese recibido, te abrazo y me uno del todo a Ti. Señor, no permitas que jamás me aparte de Ti." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Amén.");
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("modomisa");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonLecturas"), gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[k] = gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23867260);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("modomisa");
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setString("LECTURAS DE HOY");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("IndiceHoy")));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.Escena_32modo_32misaCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32modo_32misaCode.GDatrasObjects1[k] = gdjs.Escena_32modo_32misaCode.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena principal", false);
}
}

}


};

gdjs.Escena_32modo_32misaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2.length = 0;

gdjs.Escena_32modo_32misaCode.eventsList0(runtimeScene);
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDatrasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDcomObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDBotonLecturasObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDfondoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDtextoObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewTextObjects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32modo_32misaCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['Escena_32modo_32misaCode'] = gdjs.Escena_32modo_32misaCode;
