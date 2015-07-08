#pragma strict

var Skin : GUISkin;

function OnGUI () {

GUI.skin = Skin;

  if(GUI.Button(Rect(Screen.width/2 +400,Screen.height/2 +175,150,30),"Voltar")){
        Application.LoadLevel("MenuInicial");
         
        }
        }