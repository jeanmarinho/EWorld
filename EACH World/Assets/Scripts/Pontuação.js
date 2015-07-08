public static var pontos : float; // variavel que guarda os pontos
var TempodeSobrevivencia: float; // variavel responsavel por guardar a distancia maxima percorrida
var tempo: float;

function Start () { 
TempodeSobrevivencia =PlayerPrefs.GetFloat("TempodeSobrevivencia"); // este comando da load na distancia maxima percorrida
} 
tempo = 0;
for(var tempo: int = 1; tempo > 0; tempo++){
yield WaitForSeconds (1);
pontos = tempo; // aqui eu igualo a variavel pontos a distancia percorrida em X
PlayerPrefs.SetFloat("tempo", tempo); // aqui salva
if(pontos>TempodeSobrevivencia){ // se os pontos superarem a distancia maxima ja percorrida
TempodeSobrevivencia = pontos;  // max distancia recebe o valor dos pontos atuais
PlayerPrefs.SetFloat("TempodeSobrevivencia",TempodeSobrevivencia); // aqui salva o score, caso tenha feito mais pontos que o score atual ( pois esta dentro do if )
}
}

function OnGUI () {
   GUI.Label(Rect(Screen.width/2-Screen.width/22f,Screen.height/2-Screen.height/2.10f,Screen.width/4,Screen.height/8), "PONTOS: " + pontos); // MOSTRA OS PONTOS NA TELA
   GUI.Label(Rect(Screen.width/2-Screen.width/22f,Screen.height/2-Screen.height/2.30f,Screen.width/4,Screen.height/8), "RECORD: " + TempodeSobrevivencia); // MOSTRA O RECORD NA TELA
}