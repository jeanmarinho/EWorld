#pragma strict

var tempo: float;
public var proximaFase: int;

function Start () {




}

function Update () {
	tempo = PlayerPrefs.GetFloat("tempo"); // este comando da load no tempo de sobrvivencia
	if( tempo == 30){


		Application.LoadLevel("Cena2");
 	}
}
