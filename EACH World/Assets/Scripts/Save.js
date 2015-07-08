#pragma strict

var Save: float; // variavel responsavel por guardar proguesso

function Start () {

}

function Update () {

if (Input.GetKey("1")) {
			PlayerPrefs.SetFloat("Save",Save); // aqui salva o score, caso tenha feito mais pontos que o score atual
		}

}