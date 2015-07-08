var vida = 100;


function OnGUI(){
 GUI.Label (Rect (10,30,80,20), "Vida:");
 GUI.TextField (Rect (90,30,80,20), vida.ToString());
}