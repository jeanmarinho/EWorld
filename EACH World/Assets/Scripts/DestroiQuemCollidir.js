#pragma strict
var quemColidiu: Collider;

function OnTriggerEnter (other : Collider){
 quemColidiu = other;
 Destroy(quemColidiu.gameObject);
}
 

