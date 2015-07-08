#pragma strict

function Start () {

}

function Update () {
 
}
function OnCollisionEnter(collision: Collision){
 if (collision.transform.tag == "Player"){
	Application.LoadLevel("Game_Over");
   } 
   
   }