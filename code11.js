gdjs.elegirCode = {};
gdjs.elegirCode.localVariables = [];
gdjs.elegirCode.idToCallbackMap = new Map();
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1= [];
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2= [];
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1= [];
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2= [];
gdjs.elegirCode.GDsalmoObjects1= [];
gdjs.elegirCode.GDsalmoObjects2= [];
gdjs.elegirCode.GDevangelioObjects1= [];
gdjs.elegirCode.GDevangelioObjects2= [];
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1= [];
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2= [];
gdjs.elegirCode.GDFONDOObjects1= [];
gdjs.elegirCode.GDFONDOObjects2= [];
gdjs.elegirCode.GDprimeraObjects1= [];
gdjs.elegirCode.GDprimeraObjects2= [];
gdjs.elegirCode.GDvolverObjects1= [];
gdjs.elegirCode.GDvolverObjects2= [];
gdjs.elegirCode.GDNewSpriteObjects1= [];
gdjs.elegirCode.GDNewSpriteObjects2= [];
gdjs.elegirCode.GDNewSprite2Objects1= [];
gdjs.elegirCode.GDNewSprite2Objects2= [];
gdjs.elegirCode.GDNewSprite3Objects1= [];
gdjs.elegirCode.GDNewSprite3Objects2= [];
gdjs.elegirCode.GDNewSprite4Objects1= [];
gdjs.elegirCode.GDNewSprite4Objects2= [];
gdjs.elegirCode.GDNewSprite5Objects1= [];
gdjs.elegirCode.GDNewSprite5Objects2= [];
gdjs.elegirCode.GDNewSprite6Objects1= [];
gdjs.elegirCode.GDNewSprite6Objects2= [];
gdjs.elegirCode.GDNewSprite7Objects1= [];
gdjs.elegirCode.GDNewSprite7Objects2= [];
gdjs.elegirCode.GDabajoObjects1= [];
gdjs.elegirCode.GDabajoObjects2= [];
gdjs.elegirCode.GDNewSprite8Objects1= [];
gdjs.elegirCode.GDNewSprite8Objects2= [];
gdjs.elegirCode.GDcancioneroObjects1= [];
gdjs.elegirCode.GDcancioneroObjects2= [];
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1= [];
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2= [];
gdjs.elegirCode.GDNewSprite9Objects1= [];
gdjs.elegirCode.GDNewSprite9Objects2= [];
gdjs.elegirCode.GDLECTObjects1= [];
gdjs.elegirCode.GDLECTObjects2= [];
gdjs.elegirCode.GDSALMOObjects1= [];
gdjs.elegirCode.GDSALMOObjects2= [];
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1= [];
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2= [];


gdjs.elegirCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "verde");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "azul");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "amarillo");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "rosa");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FONDO"), gdjs.elegirCode.GDFONDOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.elegirCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.elegirCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.elegirCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.elegirCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.elegirCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.elegirCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.elegirCode.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.elegirCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("abajo"), gdjs.elegirCode.GDabajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("botón_glosioso"), gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1);
gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_Rosario_menu_"), gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);
gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver"), gdjs.elegirCode.GDvolverObjects1);
gdjs.copyArray(runtimeScene.getObjects("volver_a_inicio"), gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1);
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AzulClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloOscuro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("AmarilloClaro", false);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaOscuro", true);
}
}
{for(var i = 0, len = gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDsalmoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDevangelioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDFONDOObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDFONDOObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDprimeraObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDvolverObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDvolverObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite5Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite6Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite7Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDabajoObjects1.length ;i < len;++i) {
    gdjs.elegirCode.GDabajoObjects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
for(var i = 0, len = gdjs.elegirCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.elegirCode.GDNewSprite8Objects1[i].getBehavior("Effect").enableEffect("RosaClaro", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("primera"), gdjs.elegirCode.GDprimeraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDprimeraObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDprimeraObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDprimeraObjects1[k] = gdjs.elegirCode.GDprimeraObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDprimeraObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(19).setString("PRIMERA LECTURA");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("salmo"), gdjs.elegirCode.GDsalmoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDsalmoObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDsalmoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDsalmoObjects1[k] = gdjs.elegirCode.GDsalmoObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDsalmoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(19).setString("SALMO");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("evangelio"), gdjs.elegirCode.GDevangelioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.elegirCode.GDevangelioObjects1.length;i<l;++i) {
    if ( gdjs.elegirCode.GDevangelioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.elegirCode.GDevangelioObjects1[k] = gdjs.elegirCode.GDevangelioObjects1[i];
        ++k;
    }
}
gdjs.elegirCode.GDevangelioObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(19).setString("EVANGELIO");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("elegir");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "visor texto", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.elegirCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.elegirCode.GDsalmoObjects1.length = 0;
gdjs.elegirCode.GDsalmoObjects2.length = 0;
gdjs.elegirCode.GDevangelioObjects1.length = 0;
gdjs.elegirCode.GDevangelioObjects2.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.elegirCode.GDFONDOObjects1.length = 0;
gdjs.elegirCode.GDFONDOObjects2.length = 0;
gdjs.elegirCode.GDprimeraObjects1.length = 0;
gdjs.elegirCode.GDprimeraObjects2.length = 0;
gdjs.elegirCode.GDvolverObjects1.length = 0;
gdjs.elegirCode.GDvolverObjects2.length = 0;
gdjs.elegirCode.GDNewSpriteObjects1.length = 0;
gdjs.elegirCode.GDNewSpriteObjects2.length = 0;
gdjs.elegirCode.GDNewSprite2Objects1.length = 0;
gdjs.elegirCode.GDNewSprite2Objects2.length = 0;
gdjs.elegirCode.GDNewSprite3Objects1.length = 0;
gdjs.elegirCode.GDNewSprite3Objects2.length = 0;
gdjs.elegirCode.GDNewSprite4Objects1.length = 0;
gdjs.elegirCode.GDNewSprite4Objects2.length = 0;
gdjs.elegirCode.GDNewSprite5Objects1.length = 0;
gdjs.elegirCode.GDNewSprite5Objects2.length = 0;
gdjs.elegirCode.GDNewSprite6Objects1.length = 0;
gdjs.elegirCode.GDNewSprite6Objects2.length = 0;
gdjs.elegirCode.GDNewSprite7Objects1.length = 0;
gdjs.elegirCode.GDNewSprite7Objects2.length = 0;
gdjs.elegirCode.GDabajoObjects1.length = 0;
gdjs.elegirCode.GDabajoObjects2.length = 0;
gdjs.elegirCode.GDNewSprite8Objects1.length = 0;
gdjs.elegirCode.GDNewSprite8Objects2.length = 0;
gdjs.elegirCode.GDcancioneroObjects1.length = 0;
gdjs.elegirCode.GDcancioneroObjects2.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.elegirCode.GDNewSprite9Objects1.length = 0;
gdjs.elegirCode.GDNewSprite9Objects2.length = 0;
gdjs.elegirCode.GDLECTObjects1.length = 0;
gdjs.elegirCode.GDLECTObjects2.length = 0;
gdjs.elegirCode.GDSALMOObjects1.length = 0;
gdjs.elegirCode.GDSALMOObjects2.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2.length = 0;

gdjs.elegirCode.eventsList0(runtimeScene);
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects1.length = 0;
gdjs.elegirCode.GDfondo_9595Rosario_9595menu_9595Objects2.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects1.length = 0;
gdjs.elegirCode.GDbot_95243n_9595glosiosoObjects2.length = 0;
gdjs.elegirCode.GDsalmoObjects1.length = 0;
gdjs.elegirCode.GDsalmoObjects2.length = 0;
gdjs.elegirCode.GDevangelioObjects1.length = 0;
gdjs.elegirCode.GDevangelioObjects2.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects1.length = 0;
gdjs.elegirCode.GDvolver_9595a_9595inicioObjects2.length = 0;
gdjs.elegirCode.GDFONDOObjects1.length = 0;
gdjs.elegirCode.GDFONDOObjects2.length = 0;
gdjs.elegirCode.GDprimeraObjects1.length = 0;
gdjs.elegirCode.GDprimeraObjects2.length = 0;
gdjs.elegirCode.GDvolverObjects1.length = 0;
gdjs.elegirCode.GDvolverObjects2.length = 0;
gdjs.elegirCode.GDNewSpriteObjects1.length = 0;
gdjs.elegirCode.GDNewSpriteObjects2.length = 0;
gdjs.elegirCode.GDNewSprite2Objects1.length = 0;
gdjs.elegirCode.GDNewSprite2Objects2.length = 0;
gdjs.elegirCode.GDNewSprite3Objects1.length = 0;
gdjs.elegirCode.GDNewSprite3Objects2.length = 0;
gdjs.elegirCode.GDNewSprite4Objects1.length = 0;
gdjs.elegirCode.GDNewSprite4Objects2.length = 0;
gdjs.elegirCode.GDNewSprite5Objects1.length = 0;
gdjs.elegirCode.GDNewSprite5Objects2.length = 0;
gdjs.elegirCode.GDNewSprite6Objects1.length = 0;
gdjs.elegirCode.GDNewSprite6Objects2.length = 0;
gdjs.elegirCode.GDNewSprite7Objects1.length = 0;
gdjs.elegirCode.GDNewSprite7Objects2.length = 0;
gdjs.elegirCode.GDabajoObjects1.length = 0;
gdjs.elegirCode.GDabajoObjects2.length = 0;
gdjs.elegirCode.GDNewSprite8Objects1.length = 0;
gdjs.elegirCode.GDNewSprite8Objects2.length = 0;
gdjs.elegirCode.GDcancioneroObjects1.length = 0;
gdjs.elegirCode.GDcancioneroObjects2.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects1.length = 0;
gdjs.elegirCode.GDcanta_9595tu_9595feObjects2.length = 0;
gdjs.elegirCode.GDNewSprite9Objects1.length = 0;
gdjs.elegirCode.GDNewSprite9Objects2.length = 0;
gdjs.elegirCode.GDLECTObjects1.length = 0;
gdjs.elegirCode.GDLECTObjects2.length = 0;
gdjs.elegirCode.GDSALMOObjects1.length = 0;
gdjs.elegirCode.GDSALMOObjects2.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects1.length = 0;
gdjs.elegirCode.GDEVANGELIO_9595TEXTObjects2.length = 0;


return;

}

gdjs['elegirCode'] = gdjs.elegirCode;
