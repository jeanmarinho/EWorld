#pragma strict

var velocidadeBalaPistol : float ;

function Start () {

velocidadeBalaPistol= 60*Time. deltaTime;

}

function Update () {

transform.Translate(0,0,velocidadeBalaPistol);


	
}