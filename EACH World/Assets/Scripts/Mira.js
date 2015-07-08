 function Start () {

}

function Update () {

if(Input.GetButtonDown("Fire2")){ animation.Play("Mira"); }

if(Input.GetButtonUp("Fire2")){ animation.Play("Mira_back"); }

} 
