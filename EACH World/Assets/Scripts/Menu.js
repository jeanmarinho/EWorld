
var Skin : GUISkin;

function OnGUI () {
 GUI.skin = Skin;
 
 		       
        if(GUI.Button(Rect(Screen.width /2 - -400,Screen.height /2 -150,200,50),"Jogar")){
         
        Application.LoadLevel("Cena1");
         
        }

        
		
		if(GUI.Button(Rect(Screen.width /2 - -400,Screen.height /2 -50,200,50),"Creditos")){
         
        Application.LoadLevel("Logo");
         
        }
         
         
         
         
        if(GUI.Button(Rect(Screen.width /2 - -400,Screen.height /2 +200,200,50),"Sair")){
         
        Application.Quit();
         
        }
         
}