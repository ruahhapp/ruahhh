gdjs.lista_32viaCode = {};
gdjs.lista_32viaCode.localVariables = [];
gdjs.lista_32viaCode.idToCallbackMap = new Map();
gdjs.lista_32viaCode.GDfondoObjects1= [];
gdjs.lista_32viaCode.GDfondoObjects2= [];
gdjs.lista_32viaCode.GDT_95237tuloObjects1= [];
gdjs.lista_32viaCode.GDT_95237tuloObjects2= [];
gdjs.lista_32viaCode.GDatrasObjects1= [];
gdjs.lista_32viaCode.GDatrasObjects2= [];
gdjs.lista_32viaCode.GDboton2Objects1= [];
gdjs.lista_32viaCode.GDboton2Objects2= [];
gdjs.lista_32viaCode.GDboton3Objects1= [];
gdjs.lista_32viaCode.GDboton3Objects2= [];
gdjs.lista_32viaCode.GDboton4Objects1= [];
gdjs.lista_32viaCode.GDboton4Objects2= [];
gdjs.lista_32viaCode.GDboton5Objects1= [];
gdjs.lista_32viaCode.GDboton5Objects2= [];
gdjs.lista_32viaCode.GDboton6Objects1= [];
gdjs.lista_32viaCode.GDboton6Objects2= [];
gdjs.lista_32viaCode.GDtapaObjects1= [];
gdjs.lista_32viaCode.GDtapaObjects2= [];
gdjs.lista_32viaCode.GDboton1Objects1= [];
gdjs.lista_32viaCode.GDboton1Objects2= [];
gdjs.lista_32viaCode.GDNewSpriteObjects1= [];
gdjs.lista_32viaCode.GDNewSpriteObjects2= [];
gdjs.lista_32viaCode.GDtapitaObjects1= [];
gdjs.lista_32viaCode.GDtapitaObjects2= [];
gdjs.lista_32viaCode.GDNewSprite2Objects1= [];
gdjs.lista_32viaCode.GDNewSprite2Objects2= [];
gdjs.lista_32viaCode.GDNewSprite3Objects1= [];
gdjs.lista_32viaCode.GDNewSprite3Objects2= [];
gdjs.lista_32viaCode.GDNewSprite4Objects1= [];
gdjs.lista_32viaCode.GDNewSprite4Objects2= [];
gdjs.lista_32viaCode.GDboton7Objects1= [];
gdjs.lista_32viaCode.GDboton7Objects2= [];
gdjs.lista_32viaCode.GDboton8Objects1= [];
gdjs.lista_32viaCode.GDboton8Objects2= [];
gdjs.lista_32viaCode.GDboton9Objects1= [];
gdjs.lista_32viaCode.GDboton9Objects2= [];
gdjs.lista_32viaCode.GDboton10Objects1= [];
gdjs.lista_32viaCode.GDboton10Objects2= [];
gdjs.lista_32viaCode.GDboton11Objects1= [];
gdjs.lista_32viaCode.GDboton11Objects2= [];
gdjs.lista_32viaCode.GDboton12Objects1= [];
gdjs.lista_32viaCode.GDboton12Objects2= [];
gdjs.lista_32viaCode.GDboton13Objects1= [];
gdjs.lista_32viaCode.GDboton13Objects2= [];
gdjs.lista_32viaCode.GDboton14Objects1= [];
gdjs.lista_32viaCode.GDboton14Objects2= [];
gdjs.lista_32viaCode.GDboton15Objects1= [];
gdjs.lista_32viaCode.GDboton15Objects2= [];


gdjs.lista_32viaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Título"), gdjs.lista_32viaCode.GDT_95237tuloObjects1);
{for(var i = 0, len = gdjs.lista_32viaCode.GDT_95237tuloObjects1.length ;i < len;++i) {
    gdjs.lista_32viaCode.GDT_95237tuloObjects1[i].getBehavior("Text").setText("Via Crucis");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Título"), gdjs.lista_32viaCode.GDT_95237tuloObjects1);
{for(var i = 0, len = gdjs.lista_32viaCode.GDT_95237tuloObjects1.length ;i < len;++i) {
    gdjs.lista_32viaCode.GDT_95237tuloObjects1[i].getBehavior("Text").setText("Via Lucis");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton1"), gdjs.lista_32viaCode.GDboton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton1Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton1Objects1[k] = gdjs.lista_32viaCode.GDboton1Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("En el nombre del Padre, y del Hijo, y del Espíritu Santo.\n\n1ª Estación: Jesús sentenciado a muerte\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nSentenciado y no por un tribunal, sino por todos. Condenado por los mismos que le habían aclamado poco antes. Y El calla... Nosotros huímos de ser reprochados. Y saltamos inmediatamente...\n\nDame, Señor, imitarte, uniéndome a Ti por el Silencio cuando alguien me haga sufrir. Yo lo merezco. ¡Ayúdame! Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton2"), gdjs.lista_32viaCode.GDboton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton2Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton2Objects1[k] = gdjs.lista_32viaCode.GDboton2Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("2ª Estación: Jesús cargado con la cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nQue yo comprenda, Señor, el valor de la cruz, de mis pequeñas cruces de cada día, de mis achaques, de mis dolencias, de mi soledad.\n\nDame convertir en ofrenda amorosa, en reparación por mi vida y en apostolado por mis hermanos, mi cruz de cada día. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton3"), gdjs.lista_32viaCode.GDboton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton3Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton3Objects1[k] = gdjs.lista_32viaCode.GDboton3Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("3ª Estación: Jesús cae, por primera vez, bajo el peso de la cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nTú caes, Señor, para redimirme. Para ayudarme a levantarme en mis caídas diarias, cuando después de haberme propuesto ser fiel, vuelvo a reincidir en mis defectos cotidianos.\n\n¡Ayúdame a levantarme siempre y a seguir mi camino hacia Ti! Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton4"), gdjs.lista_32viaCode.GDboton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton4Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton4Objects1[k] = gdjs.lista_32viaCode.GDboton4Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("4ª Estación: Encuentro con la Virgen\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nHaz Señor, que me encuentre al lado de tu Madre en todos los momentos de mi vida.\n\nCon ella, apoyándome en su cariño maternal, tengo la seguridad de llegar a Ti en el último día de mi existencia. ¡Ayúdame Madre! Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton5"), gdjs.lista_32viaCode.GDboton5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton5Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton5Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton5Objects1[k] = gdjs.lista_32viaCode.GDboton5Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("5ª Estación: el Cirineo ayuda al Señor a llevar la Cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nCada uno de nosotros tenemos nuestra vocación, hemos venido al mundo para algo concreto, para realizarnos de una manera particular.\n\n¿Cuál es la mía y cómo la llevo a cabo? Pero hay algo, Señor, que es misión mía y de todos: la de ser Cirineo de los demás, la de ayudar a todos. ¿Cómo llevo adelante la realización de mi misión de Cirineo? Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton6"), gdjs.lista_32viaCode.GDboton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton6Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton6Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton6Objects1[k] = gdjs.lista_32viaCode.GDboton6Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("6ª Estación: la Verónica enjuga el rostro de Jesús\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nEs la mujer valiente, decidida, que se acerca a Ti cuando todos te abandonan. Yo, Señor, te abandono cuando me dejo llevar por el 'qué dirán', del respeto humano, cuando no me atrevo a defender al prójimo ausente, cuando no me atrevo a replicar una broma que ridiculiza a los que tratan de acercarse a Ti.\n\nY en tantas otras ocasiones. Ayúdame a no dejarme llevar por el respeto humano, por el 'qué dirán'. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(6);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton7"), gdjs.lista_32viaCode.GDboton7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton7Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton7Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton7Objects1[k] = gdjs.lista_32viaCode.GDboton7Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton7Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("7ª Estación: Segunda caída en el camino de la Cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nCaes, Señor, por segunda vez. El Via Crucis nos señala tres caídas en tu caminar hacia el Calvario. Tal vez fueran más.\n\nCaes delante de todos... ¿Cuándo aprenderé yo a no temer el quedar mal ante los demás, por un error, por una equivocación?. ¿Cuándo aprenderé que también eso se puede convertir en ofrenda? Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(7);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton8"), gdjs.lista_32viaCode.GDboton8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton8Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton8Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton8Objects1[k] = gdjs.lista_32viaCode.GDboton8Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("8ª Estación: Jesús consuela a las hijas de Jerusalén\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nMuchas veces, tendría yo que analizar la causa de mis lágrimas. Al menos, de mis pesares, de mis preocupaciones. Tal vez hay en ellos un fondo de orgullo, de amor propio mal entendido, de egoismo, de envidia.\n\nDebería llorar por mi falta de correspondencia a tus innumerables beneficios de cada día, que me manifiestan, Señor, cuánto me quieres. Dame profunda gratitud y correspondencia a tu misericordia. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(8);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton9"), gdjs.lista_32viaCode.GDboton9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton9Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton9Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton9Objects1[k] = gdjs.lista_32viaCode.GDboton9Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton9Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("9ª Estación: Jesús cae por tercera vez\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nTercera caída. Más cerca de la Cruz. Más agotado, más falto de fuerzas. Caes desfallecido, Señor.\n\nYo digo que me pesan los años, que no soy el de antes, que me siento incapaz. Dame, Señor, imitarte en esta tercera caída y haz que mi desfallecimiento sea beneficioso para otros, porque te lo doy a Ti para ellos. Señor, pequé, ten piedad y misericordia de mí.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(9);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton10"), gdjs.lista_32viaCode.GDboton10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton10Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton10Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton10Objects1[k] = gdjs.lista_32viaCode.GDboton10Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton10Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("10ª Estación: Jesús despojado de sus vestiduras\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nArrancan tus vestiduras, adheridas a Ti por la sangre de tus heridas. A infinita distancia de tu dolor, yo he sentido, a veces, cómo algo se arrancaba dolorosamente de mí por la pérdida de mis seres queridos.\n\nQue yo sepa ofrecerte el recuerdo de las separaciones que me desgarraron, uniéndome a tu pasión y esforzándome en consolar a los que sufren, huyendo de mi propio egoismo. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton11"), gdjs.lista_32viaCode.GDboton11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton11Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton11Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton11Objects1[k] = gdjs.lista_32viaCode.GDboton11Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton11Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("11ª Estación: Jesús es clavado en la Cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nSeñor, que yo disminuya mis limitaciones con mi esfuerzo y así pueda ayudar a mis hermanos. Y que cuando mi esfuerzo no consiga disminuirlas, me esfuerce en ofrecértelas también por ellos. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(11);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton12"), gdjs.lista_32viaCode.GDboton12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton12Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton12Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton12Objects1[k] = gdjs.lista_32viaCode.GDboton12Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("12ª Estación: Jesús muere en la Cruz\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nTe adoro, mi Señor, muerto en la Cruz por Salvarme. Te adoro y beso tus llagas, las heridas de los clavos, la lanzada del costado... ¡Gracias, Señor, gracias! Has muerto por salvarme, por salvarnos.\n\nDame responder a tu amor con amor, cumplir tu Voluntad, trabajar por mi salvación, ayudado de tu gracia. Y dame trabajar con ahínco por la salvación de mis hermanos. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(12);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton13"), gdjs.lista_32viaCode.GDboton13Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton13Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton13Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton13Objects1[k] = gdjs.lista_32viaCode.GDboton13Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton13Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("13ª Estación: Jesús en brazos de su madre\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nDéjame estar a tu lado, Madre, especialmente en estos momentos de tu dolor incomparable. Déjame estar a tu lado. Más te pido: que hoy y siempre me tengas cerca de Ti y te compadezcas de mí.\n\n¡Mírame con compasión , no me dejes, Madre mía! Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(13);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton14"), gdjs.lista_32viaCode.GDboton14Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton14Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton14Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton14Objects1[k] = gdjs.lista_32viaCode.GDboton14Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton14Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("14ª Estación: Jesús puesto en el sepulcro\n\nTe adoramos, oh Cristo, y te bendecimos, que por tu Santa Cruz redimiste al mundo.\n\nTodo ha terminado. Pero no: después de la muerte, la Resurrección.\n\nEnséñame a ver lo que pasa, lo transitorio y pasajero, a la luz de lo que no pasa. Y que esa luz ilumine todos mis actos. Así sea. Señor, pequé, ten piedad y misericordia de mí.\n\nPadre Nuestro, Ave María y Gloria...");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(14);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton15"), gdjs.lista_32viaCode.GDboton15Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton15Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton15Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton15Objects1[k] = gdjs.lista_32viaCode.GDboton15Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton15Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Oración Final\n\nSeñor Jesús, te damos gracias por habernos acompañado a lo largo de este camino de la Cruz. Has transformado el sufrimiento en un acto supremo de amor y salvación. Te pedimos que las enseñanzas de tu Pasión no se queden solo en palabras, sino que transformen nuestra vida cotidiana. Concede a nuestro corazón la fuerza para aceptar nuestras cruces, la humildad para pedir perdón cuando caemos y la generosidad para servir a los demás. Que la esperanza de tu Resurrección nos ilumine siempre y nos guíe hacia la vida eterna.\n\nEn el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Crucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(15);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton12"), gdjs.lista_32viaCode.GDboton12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton12Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton12Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton12Objects1[k] = gdjs.lista_32viaCode.GDboton12Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("12ª Estación - Jesús encarga su misión a los apóstoles" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Mateo 28, 16-20." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Los once discípulos se fueron a Galilea, al monte que Jesús les había indicado. Al verlo, ellos se postraron, pero algunos dudaron. Acercándose a ellos, Jesús les dijo: «Se me ha dado todo poder en el cielo y en la tierra. Id, pues, y haced discípulos a todos los pueblos, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo; enseñándoles a guardar todo lo que os he mandado. Y sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, que llenaste de esperanza a los apóstoles con el dulce mandato de predicar la Buena Nueva, dilata nuestro corazón para que crezca en nosotros el deseo de llevar al mundo, a cada hombre, a todo hombre, la alegría de tu Resurrección, para que así el mundo crea, y creyendo sea transformado a tu imagen.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(12);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton13"), gdjs.lista_32viaCode.GDboton13Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton13Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton13Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton13Objects1[k] = gdjs.lista_32viaCode.GDboton13Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton13Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("13ª Estación - Jesús asciende al cielo" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "De los Hechos de los Apóstoles 1, 9-11." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Dicho esto, a la vista de ellos, fue elevado al cielo, hasta que una nube se lo quitó de la vista. Cuando miraban fijos al cielo, mientras él se iba marchando, se les presentaron dos hombres vestidos de blanco, que les dijeron: «Galileos, ¿qué hacéis ahí plantados mirando al cielo? El mismo Jesús que ha sido tomado de entre vosotros y llevado al cielo, volverá como lo habéis visto marcharse al cielo»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, tu ascensión al cielo nos anuncia la gloria futura que has destinado para los que te aman. Haz, Señor, que la esperanza del cielo nos ayude a trabajar sin descanso aquí en la tierra. Que no permanezcamos nunca de brazos cruzados, sino que hagamos de nuestra vida una siembra continua de paz y de alegría.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(13);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton14"), gdjs.lista_32viaCode.GDboton14Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton14Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton14Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton14Objects1[k] = gdjs.lista_32viaCode.GDboton14Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton14Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("14ª Estación - La venida del Espíritu Santo en Pentecostés" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "De los Hechos de los Apóstoles 2, 1-4." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Al cumplirse el día de Pentecostés, estaban todos juntos en el mismo lugar. De repente, se produjo desde el cielo un estruendo, como de viento que soplaba fuertemente, y llenó toda la casa donde se encontraban sentados. Vieron aparecer unas lenguas, como llamaradas, que se dividían, posándose encima de cada uno de ellos. Se llenaron todos de Espíritu Santo y empezaron a hablar en otras lenguas, según el Espíritu les concedía manifestarse." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Dios Espíritu Santo, Dulce Huésped del alma, Consolador y Santificador nuestro, inflama nuestro corazón, llena de luz nuestra mente para que te tratemos cada vez más y te conozcamos mejor. Derrama sobre nosotros el fuego de tu amor para que, transformados por tu fuerza, te pongamos en la entraña de nuestro ser y de nuestro obrar, y todo lo hagamos bajo tu impulso.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(14);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton15"), gdjs.lista_32viaCode.GDboton15Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton15Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton15Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton15Objects1[k] = gdjs.lista_32viaCode.GDboton15Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton15Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Oración final" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor y Dios nuestro, fuente de alegría y de esperanza, hemos vivido con tu Hijo los acontecimientos de su Resurrección y Ascensión hasta la venida del Espíritu Santo; haz que la contemplación de estos misterios nos llene de tu gracia y nos capacite para dar testimonio de Jesucristo en medio del mundo. Te pedimos por tu Santa Iglesia: que sea fiel reflejo de las huellas de Cristo en la historia y que, llena del Espíritu Santo, manifieste al mundo los tesoros de tu amor, santifique a tus fieles con los sacramentos y haga partícipes a todos los hombres de la resurrección eterna. Por Jesucristo nuestro Señor. Amén.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(15);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton1"), gdjs.lista_32viaCode.GDboton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton1Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton1Objects1[k] = gdjs.lista_32viaCode.GDboton1Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("En el nombre del Padre, y del Hijo, y del Espíritu Santo." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "1ª Estación - ¡Cristo vive! ¡Ha resucitado!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Mateo 28, 1-7." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Pasado el sábado, al alborear el primer día de la semana, fueron María la Magdalena y la otra María a ver el sepulcro. Y de pronto tembló fuertemente la tierra, pues un ángel del Señor, bajando del cielo y acercándose, corrió la piedra y se sentó encima. Su aspecto era de relámpago y su vestido blanco como la nieve; los centinelas temblaron de miedo y quedaron como muertos. El ángel habló a las mujeres: «Vosotras no temáis, ya sé que buscáis a Jesús el crucificado. No está aquí: ¡ha resucitado!, como había dicho. Venid a ver el sitio donde yacía e id aprisa a decir a sus discípulos: 'Ha resucitado de entre los muertos y va por delante de vosotros a Galilea. Allí lo veréis'. Mirad, os lo he anunciado»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, hemos querido seguirte en los momentos difíciles de tu Pasión y Muerte, sin avergonzarnos de tu cruz redentora. Ahora queremos vivir contigo la verdadera alegría, la alegría que brota de un corazón enamorado y entregado, la alegría de la resurrección. Pero enséñanos a no huir de la cruz, porque antes del triunfo suele estar la tribulación. Y sólo tomando tu cruz podremos llenarnos de ese gozo que nunca acaba");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton2"), gdjs.lista_32viaCode.GDboton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton2Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton2Objects1[k] = gdjs.lista_32viaCode.GDboton2Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("2ª Estación - El encuentro con María Magdalena" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 20, 10-18." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Los dos discípulos se volvieron a casa. Estaba María fuera, junto al sepulcro, llorando. Mientras lloraba, se asomó al sepulcro y vio dos ángeles vestidos de blanco, sentados, uno a la cabecera y otro a los pies, donde había estado el cuerpo de Jesús. Ellos le preguntan: «Mujer, ¿por qué lloras?». Ella les contesta: «Porque se han llevado a mi Señor y no sé dónde lo han puesto». Dicho esto, se vuelve y ve a Jesús, de pie, pero no sabía que era Jesús. Jesús le dice: «Mujer, ¿por qué lloras?, ¿a quién buscas?». Ella, tomándolo por el hortelano, le contesta: «Señor, si tú te lo has llevado, dime dónde lo has puesto y yo lo recogeré». Jesús le dice: «¡María!». Ella se vuelve y le dice: «¡Rabbuní!», que significa: «¡Maestro!». Jesús le dice: «No me retengas, que todavía no he subido al Padre. Pero, anda, ve a mis hermanos y diles: 'Subo al Padre mío y Padre vuestro, al Dios mío y Dios vuestro'». María la Magdalena fue y anunció a los discípulos: «He visto al Señor y ha dicho esto»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Virgen María, Madre de Dios y Madre nuestra, la tradición cristiana nos dice que la primera visita de tu Hijo resucitado fue a ti, no para fortalecer tu fe, que en ningún momento había decaído, sino para compartir contigo la alegría del triunfo. Nosotros te queremos pedir que, como María Magdalena, seamos testigos y mensajeros de la Resurrección de Jesucristo, viviendo contigo el gozo de no separarnos nunca del Señor");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton3"), gdjs.lista_32viaCode.GDboton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton3Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton3Objects1[k] = gdjs.lista_32viaCode.GDboton3Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("3ª Estación - Jesús se aparece a las mujeres" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Mateo 28, 8-10." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Ellas se marcharon a toda prisa del sepulcro; llenas de miedo y de alegría corrieron a anunciarlo a los discípulos. De pronto, Jesús les salió al encuentro y les dijo: «Alegraos». Ellas se acercaron, le abrazaron los pies y se postraron ante él. Jesús les dijo: «No temáis: id a comunicar a mis hermanos que vayan a Galilea; allí me verán»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, danos la valentía de aquellas mujeres, su fortaleza interior para hacer frente a cualquier obstáculo. Que, a pesar de las dificultades, interiores o exteriores, sepamos confiar y no nos dejemos vencer por la tristeza o el desaliento, que nuestro único móvil sea el amor, el ponernos a tu servicio porque, como aquellas mujeres, y las buenas mujeres de todos los tiempos, queremos estar, desde el silencio, al servicio de los demás");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton4"), gdjs.lista_32viaCode.GDboton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton4Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton4Objects1[k] = gdjs.lista_32viaCode.GDboton4Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("4ª Estación - Los soldados custodian el sepulcro de Cristo" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Mateo 28, 11-15." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Mientras las mujeres iban de camino, algunos de la guardia fueron a la ciudad y comunicaron a los sumos sacerdotes todo lo ocurrido. Ellos, reunidos con los ancianos, llegaron a un acuerdo y dieron a los soldados una fuerte suma, encargándoles: «Decid que sus discípulos fueron de noche y robaron el cuerpo mientras vosotros dormíais. Y si esto llega a oídos del gobernador, nosotros nos lo ganaremos y os sacaremos de apuros». Ellos tomaron el dinero y obraron conforme a las instrucciones. Y esta historia se ha ido difundiendo entre los judíos hasta hoy." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, danos la limpieza de corazón y la claridad de mente para reconocer la verdad. Que nunca negociemos con la ella para ocultar nuestras flaquezas, nuestra falta de entrega, que nunca sirvamos a la mentira, para sacar adelante nuestros intereses. Que te reconozcamos, Señor, como la Verdad de nuestra");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton5"), gdjs.lista_32viaCode.GDboton5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton5Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton5Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton5Objects1[k] = gdjs.lista_32viaCode.GDboton5Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("5ª Estación - Pedro y Juan contemplan el sepulcro vacío" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 20, 3-10." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Salieron Pedro y el otro discípulo camino del sepulcro. Los dos corrían juntos, pero el otro discípulo corría más que Pedro; se adelantó y llegó primero al sepulcro; e, inclinándose, vio los lienzos tendidos; pero no entró. Llegó también Simón Pedro detrás de él y entró en el sepulcro: vio los lienzos tendidos y el sudario con que le habían cubierto la cabeza, no con los lienzos, sino enrollado en un sitio aparte. Entonces entró también el otro discípulo, el que había llegado primero al sepulcro; vio y creyó. Pues hasta entonces no habían entendido la Escritura: que él había de resucitar de entre los muertos. Los dos discípulos se volvieron a casa." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, también nosotros como Pedro y Juan, necesitamos encaminarnos hacia Ti, sin dejarlo para después. Por eso te pedimos ese impulso interior para responder con prontitud a lo que puedas querer de nosotros. Que sepamos escuchar a los que nos hablan en tu nombre para que corramos con esperanza a buscarte");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton6"), gdjs.lista_32viaCode.GDboton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton6Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton6Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton6Objects1[k] = gdjs.lista_32viaCode.GDboton6Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("6ª Estación - Jesús en el Cenáculo muestra sus llagas a los apóstoles" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Lucas 24, 36-43." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Estaban hablando de estas cosas, cuando él se presentó en medio de ellos y les dice: «Paz a vosotros». Pero ellos, aterrorizados y llenos de miedo, creían ver un espíritu. Y él les dijo: «¿Por qué os alarmáis?, ¿por qué surgen dudas en vuestro corazón? Mirad mis manos y mis pies: soy yo en persona. Palpadme y daos cuenta de que un espíritu no tiene carne y huesos, como veis que yo tengo». Dicho esto, les mostró las manos y los pies. Pero como no acababan de creer por la alegría, y seguían atónitos, les dijo: «¿Tenéis ahí algo de comer?». Ellos le ofrecieron un trozo de pez asado. Él lo tomó y comió delante de ellos." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, que sepamos descubrir en los sacerdotes otros Cristos, porque has hecho de ellos los dispensadores de los misterios de Dios. Y, cuando nos alejemos de Ti por el pecado, ayúdanos a sentir la alegría profunda de tu misericordia en el sacramento de la Penitencia. Porque la Penitencia limpia el alma, devolviéndonos tu amistad, nos reconcilia con la Iglesia y nos ofrece la paz y serenidad de conciencia para reemprender con fuerza el combate cristiano.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(6);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton7"), gdjs.lista_32viaCode.GDboton7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton7Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton7Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton7Objects1[k] = gdjs.lista_32viaCode.GDboton7Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton7Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("7ª Estación - En el camino de Emaús" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Lucas 24, 13-32." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Aquel mismo día, dos de ellos iban caminando a una aldea llamada Emaús, distante de Jerusalén unos sesenta estadios; iban conversando entre ellos de todo lo que había sucedido. Mientras conversaban y discutían, Jesús en persona se acercó y se puso a caminar con ellos. Pero sus ojos no eran capaces de reconocerlo. Él les dijo: «¿Qué conversación es esa que traéis mientras vais de camino?». Ellos se detuvieron con aire entristecido. Y uno de ellos, que se llamaba Cleofás, le respondió: «¿Eres tú el único forastero en Jerusalén que no sabes lo que ha pasado allí estos días?». Él les dijo: «¿Qué?». Ellos le contestaron: «Lo de Jesús el Nazareno, que fue un profeta poderoso en obras y palabras, ante Dios y ante todo el pueblo; cómo lo entregaron los sumos sacerdotes y nuestros jefes para que lo condenaran a muerte, y lo crucificaron. Nosotros esperábamos que él iba a liberar a Israel, pero, con todo esto, ya estamos en el tercer día desde que esto sucedió. Es verdad que algunas mujeres de nuestro grupo nos han sobresaltado, pues habiendo ido muy de mañana al sepulcro, y no habiendo encontrado su cuerpo, vinieron diciendo que incluso habían visto una aparición de ángeles, que dicen que está vivo. Algunos de los nuestros fueron también al sepulcro y lo encontraron como habían dicho las mujeres; pero a él no lo vieron». Entonces él les dijo: «¡Qué necios y torpes sois para creer lo que dijeron los profetas! ¿No era necesario que el Mesías padeciera esto y entrara así en su gloria?». Y, comenzando por Moisés y siguiendo por todos los profetas, les explicó lo que se refería a él en todas las Escrituras. Llegaron cerca de la aldea adonde iban y él simuló que iba a seguir caminando; pero ellos lo apremiaron, diciendo: «Quédate con nosotros, porque atardece y el día va de caída». Y entró para quedarse con ellos. Sentado a la mesa con ellos, tomó el pan, pronunció la bendición, lo partió y se lo iba dando. A ellos se les abrieron los ojos y lo reconocieron. Pero él desapareció de su vista." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, ¡cuántas veces estamos de vuelta de todo y de todos! ¡tantas veces estamos desengañados y tristes! Ayúdanos a descubrirte en el camino de la vida, en la lectura de tu Palabra y en la celebración de la Eucaristía, donde te ofreces a nosotros como alimento cotidiano. Que siempre nos lleve a Ti, Señor, un deseo ardiente de encontrarte también en los hermanos");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(7);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton8"), gdjs.lista_32viaCode.GDboton8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton8Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton8Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton8Objects1[k] = gdjs.lista_32viaCode.GDboton8Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("8ª Estación - Jesús da a los apóstoles el poder de perdonar los pecados" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 20, 19-23." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Al anochecer de aquel día, el primero de la semana, estaban los discípulos en una casa, con las puertas cerradas por miedo a los judíos. Y en esto entró Jesús, se puso en medio y les dijo: «Paz a vosotros». Y, diciendo esto, les enseñó las manos y el costado. Y los discípulos se llenaron de alegría al ver al Señor. Jesús repitió: «Paz a vosotros. Como el Padre me ha enviado, así también os envío yo». Y, dicho esto, sopló sobre ellos y les dijo: «Recibid el Espíritu Santo; a quienes les perdonéis los pecados, les quedan perdonados; a quienes se los retengáis, les quedan retenidos»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, que sepamos descubrir en los sacerdotes otros Cristos, porque has hecho de ellos los dispensadores de los misterios de Dios. Y, cuando nos alejemos de Ti por el pecado, ayúdanos a sentir la alegría profunda de tu misericordia en el sacramento de la Penitencia. Porque la Penitencia limpia el alma, devolviéndonos tu amistad, nos reconcilia con la Iglesia y nos ofrece la paz y serenidad de conciencia para reemprender con fuerza el combate cristiano.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(8);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton9"), gdjs.lista_32viaCode.GDboton9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton9Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton9Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton9Objects1[k] = gdjs.lista_32viaCode.GDboton9Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton9Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("9ª Estación - Jesús fortalece la fe de Tomás" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 20, 26-29." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "A los ocho días, estaban otra vez dentro los discípulos y Tomás con ellos. Llegó Jesús, estando cerradas las puertas, se puso en medio y dijo: «Paz a vosotros». Luego dijo a Tomás: «Trae tu dedo, aquí tienes mis manos; trae tu mano y métela en mi costado; y no seas incrédulo, sino creyente». Contestó Tomás: «¡Señor mío y Dios mío!». Jesús le dijo: «¿Porque me has visto has creído? Bienaventurados los que crean sin haber visto»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, auméntanos la fe, la esperanza y el amor. Danos una fe fuerte y firme, llena de confianza. Te pedimos la humildad de creer sin ver, de esperar contra toda esperanza y de amar sin medida, con un corazón grande. Como dijiste al apóstol Tomás, queremos, aún sin ver, rendir nuestro juicio y abrazarnos con firmeza a tu palabra y al magisterio de la Iglesia que has instituido, para que tu Pueblo permanezca en la verdad que libera.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(9);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton10"), gdjs.lista_32viaCode.GDboton10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton10Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton10Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton10Objects1[k] = gdjs.lista_32viaCode.GDboton10Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton10Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("10ª Estación - Jesús resucitado en el lago de Galilea" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 21, 1-6a." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Después de esto Jesús se apareció otra vez a los discípulos junto al lago de Tiberíades. Y se apareció de esta manera: Estaban juntos Simón Pedro, Tomás, apodado el Mellizo; Natanael, el de Caná de Galilea; los Zebedeos y otros dos discípulos suyos. Simón Pedro les dice: «Me voy a pescar». Ellos contestan: «Vamos también nosotros contigo». Salieron y se embarcaron; y aquella noche no cogieron nada. Estaba ya amaneciendo, cuando Jesús se presentó en la orilla; pero los discípulos no sabían que era Jesús. Jesús les dice: «Muchachos, ¿tenéis pescado?». Ellos contestaron: «No». Él les dice: «Echad la red a la derecha de la barca y encontraréis». La echaron, y no podían sacarla, por la multitud de peces." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, haz que nos sintamos orgullosos de estar subidos en la barca de Pedro, en la Iglesia. Que aprendamos a amarla y respetarla como madre. Enséñanos, Señor, a apoyarnos no sólo en nosotros mismos y en nuestra actividad, sino sobre todo en Ti. Que nunca te perdamos de vista, y sigamos siempre tus indicaciones, aunque nos parezcan difíciles o absurdas, porque sólo así recogeremos frutos abundantes que serán tuyos, no nuestros.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton11"), gdjs.lista_32viaCode.GDboton11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDboton11Objects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDboton11Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDboton11Objects1[k] = gdjs.lista_32viaCode.GDboton11Objects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDboton11Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("11ª Estación - Jesús confirma a Pedro en el amor" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℣.Verdaderamente ha resucitado el Señor. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "℟.Como anunciaron las Escrituras. Aleluya." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Del Evangelio según San Juan 21, 15-19." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Después de comer, dice Jesús a Simón Pedro: «Simón, hijo de Juan, ¿me amas más que estos?». Él le contestó: «Sí, Señor, tú sabes que te quiero». Jesús le dice: «Apacienta mis corderos». Por segunda vez le pregunta: «Simón, hijo de Juan, ¿me amas?». Él le contestó: «Sí, Señor, tú sabes que te quiero». Él le dice: «Pastorea mis ovejas». Por tercera vez le pregunta: «Simón, hijo de Juan, ¿me quieres?». Se entristeció Pedro de que le preguntara por tercera vez: «¿Me quieres?» y le contestó: «Señor, tú conoces todo, tú sabes que te quiero». Jesús le dice: «Apacienta mis ovejas. En verdad, en verdad te digo: cuando eras joven, tú mismo te ceñías e ibas adonde querías; pero, cuando seas viejo, extenderás las manos, otro te ceñirá y te llevará adonde no quieras». Esto dijo aludiendo a la muerte con que iba a dar gloria a Dios. Dicho esto, añadió: «Sígueme»." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Señor Jesús, que sepamos reaccionar antes nuestros pecados, que son traiciones a tu amistad, y volvamos a Ti respondiendo al amor con amor. Ayúdanos a estar muy unidos al sucesor de Pedro, al Santo Padre el Papa, con el apoyo eficaz que da la obediencia, porque es garantía de la unidad de la Iglesia y de la fidelidad al Evangelio.");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Via Lucis");
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(11);
}
{runtimeScene.getGame().getVariables().getFromIndex(17).setString("via");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visor via", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.lista_32viaCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lista_32viaCode.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.lista_32viaCode.GDatrasObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lista_32viaCode.GDatrasObjects1[k] = gdjs.lista_32viaCode.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.lista_32viaCode.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lista can or", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber()) > 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber()), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).mul(0.88);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), 1300, 3500), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.lista_32viaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lista_32viaCode.GDfondoObjects1.length = 0;
gdjs.lista_32viaCode.GDfondoObjects2.length = 0;
gdjs.lista_32viaCode.GDT_95237tuloObjects1.length = 0;
gdjs.lista_32viaCode.GDT_95237tuloObjects2.length = 0;
gdjs.lista_32viaCode.GDatrasObjects1.length = 0;
gdjs.lista_32viaCode.GDatrasObjects2.length = 0;
gdjs.lista_32viaCode.GDboton2Objects1.length = 0;
gdjs.lista_32viaCode.GDboton2Objects2.length = 0;
gdjs.lista_32viaCode.GDboton3Objects1.length = 0;
gdjs.lista_32viaCode.GDboton3Objects2.length = 0;
gdjs.lista_32viaCode.GDboton4Objects1.length = 0;
gdjs.lista_32viaCode.GDboton4Objects2.length = 0;
gdjs.lista_32viaCode.GDboton5Objects1.length = 0;
gdjs.lista_32viaCode.GDboton5Objects2.length = 0;
gdjs.lista_32viaCode.GDboton6Objects1.length = 0;
gdjs.lista_32viaCode.GDboton6Objects2.length = 0;
gdjs.lista_32viaCode.GDtapaObjects1.length = 0;
gdjs.lista_32viaCode.GDtapaObjects2.length = 0;
gdjs.lista_32viaCode.GDboton1Objects1.length = 0;
gdjs.lista_32viaCode.GDboton1Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSpriteObjects1.length = 0;
gdjs.lista_32viaCode.GDNewSpriteObjects2.length = 0;
gdjs.lista_32viaCode.GDtapitaObjects1.length = 0;
gdjs.lista_32viaCode.GDtapitaObjects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite2Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite2Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite3Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite3Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite4Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite4Objects2.length = 0;
gdjs.lista_32viaCode.GDboton7Objects1.length = 0;
gdjs.lista_32viaCode.GDboton7Objects2.length = 0;
gdjs.lista_32viaCode.GDboton8Objects1.length = 0;
gdjs.lista_32viaCode.GDboton8Objects2.length = 0;
gdjs.lista_32viaCode.GDboton9Objects1.length = 0;
gdjs.lista_32viaCode.GDboton9Objects2.length = 0;
gdjs.lista_32viaCode.GDboton10Objects1.length = 0;
gdjs.lista_32viaCode.GDboton10Objects2.length = 0;
gdjs.lista_32viaCode.GDboton11Objects1.length = 0;
gdjs.lista_32viaCode.GDboton11Objects2.length = 0;
gdjs.lista_32viaCode.GDboton12Objects1.length = 0;
gdjs.lista_32viaCode.GDboton12Objects2.length = 0;
gdjs.lista_32viaCode.GDboton13Objects1.length = 0;
gdjs.lista_32viaCode.GDboton13Objects2.length = 0;
gdjs.lista_32viaCode.GDboton14Objects1.length = 0;
gdjs.lista_32viaCode.GDboton14Objects2.length = 0;
gdjs.lista_32viaCode.GDboton15Objects1.length = 0;
gdjs.lista_32viaCode.GDboton15Objects2.length = 0;

gdjs.lista_32viaCode.eventsList0(runtimeScene);
gdjs.lista_32viaCode.GDfondoObjects1.length = 0;
gdjs.lista_32viaCode.GDfondoObjects2.length = 0;
gdjs.lista_32viaCode.GDT_95237tuloObjects1.length = 0;
gdjs.lista_32viaCode.GDT_95237tuloObjects2.length = 0;
gdjs.lista_32viaCode.GDatrasObjects1.length = 0;
gdjs.lista_32viaCode.GDatrasObjects2.length = 0;
gdjs.lista_32viaCode.GDboton2Objects1.length = 0;
gdjs.lista_32viaCode.GDboton2Objects2.length = 0;
gdjs.lista_32viaCode.GDboton3Objects1.length = 0;
gdjs.lista_32viaCode.GDboton3Objects2.length = 0;
gdjs.lista_32viaCode.GDboton4Objects1.length = 0;
gdjs.lista_32viaCode.GDboton4Objects2.length = 0;
gdjs.lista_32viaCode.GDboton5Objects1.length = 0;
gdjs.lista_32viaCode.GDboton5Objects2.length = 0;
gdjs.lista_32viaCode.GDboton6Objects1.length = 0;
gdjs.lista_32viaCode.GDboton6Objects2.length = 0;
gdjs.lista_32viaCode.GDtapaObjects1.length = 0;
gdjs.lista_32viaCode.GDtapaObjects2.length = 0;
gdjs.lista_32viaCode.GDboton1Objects1.length = 0;
gdjs.lista_32viaCode.GDboton1Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSpriteObjects1.length = 0;
gdjs.lista_32viaCode.GDNewSpriteObjects2.length = 0;
gdjs.lista_32viaCode.GDtapitaObjects1.length = 0;
gdjs.lista_32viaCode.GDtapitaObjects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite2Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite2Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite3Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite3Objects2.length = 0;
gdjs.lista_32viaCode.GDNewSprite4Objects1.length = 0;
gdjs.lista_32viaCode.GDNewSprite4Objects2.length = 0;
gdjs.lista_32viaCode.GDboton7Objects1.length = 0;
gdjs.lista_32viaCode.GDboton7Objects2.length = 0;
gdjs.lista_32viaCode.GDboton8Objects1.length = 0;
gdjs.lista_32viaCode.GDboton8Objects2.length = 0;
gdjs.lista_32viaCode.GDboton9Objects1.length = 0;
gdjs.lista_32viaCode.GDboton9Objects2.length = 0;
gdjs.lista_32viaCode.GDboton10Objects1.length = 0;
gdjs.lista_32viaCode.GDboton10Objects2.length = 0;
gdjs.lista_32viaCode.GDboton11Objects1.length = 0;
gdjs.lista_32viaCode.GDboton11Objects2.length = 0;
gdjs.lista_32viaCode.GDboton12Objects1.length = 0;
gdjs.lista_32viaCode.GDboton12Objects2.length = 0;
gdjs.lista_32viaCode.GDboton13Objects1.length = 0;
gdjs.lista_32viaCode.GDboton13Objects2.length = 0;
gdjs.lista_32viaCode.GDboton14Objects1.length = 0;
gdjs.lista_32viaCode.GDboton14Objects2.length = 0;
gdjs.lista_32viaCode.GDboton15Objects1.length = 0;
gdjs.lista_32viaCode.GDboton15Objects2.length = 0;


return;

}

gdjs['lista_32viaCode'] = gdjs.lista_32viaCode;
