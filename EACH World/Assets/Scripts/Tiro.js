#pragma strict
var bala : GameObject;
var som_tiro: GameObject;
function Start () {

}

function Update () { 

if ( Input.GetMouseButtonDown (0) )

{


Instantiate (bala,transform.position,transform.rotation) ;
Instantiate(som_tiro,transform.position,transform.rotation);


}

}