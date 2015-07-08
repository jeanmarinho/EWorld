#pragma strict
var TempodeSobrevivencia: float; // variavel responsavel por guardar a distancia maxima percorrida
function Start () {
TempodeSobrevivencia =PlayerPrefs.GetFloat("TempodeSobrevivencia"); // este comando da load na distancia maxima percorrida

}

function Update () {


}

function OnGUI () {
   
   GUI.Label(Rect(Screen.width/2 - 50,Screen.height /2 -0,200,200), "SEU RECORDE FOI: " + TempodeSobrevivencia); // MOSTRA O RECORD NA TELA
}