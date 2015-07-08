#pragma strict
var velocidadeFrente : float;


function Start () {

}

function Update () {



//caso o usuario esteja apertado a velocidade ira ser aumentada
if(Input.GetKey(KeyCode.LeftShift))
  {
   velocidadeFrente = 30*Time.deltaTime;
  }

}