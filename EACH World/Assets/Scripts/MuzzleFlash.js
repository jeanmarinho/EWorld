var muzzleFlash : Renderer;
var muzzleLight : Light;
  
function Start()
{
    muzzleFlash.enabled = false;
    muzzleLight.enabled = false;
}
  
function Update()
{
    if(Input.GetButton("Fire1"))
    {
        Shoot();
    }
}
  
function Shoot()
{
    muzzleFlash.renderer.enabled = true;
    muzzleLight.enabled = true;
    yield WaitForSeconds(0.03);
    muzzleFlash.renderer.enabled = false;
    muzzleLight.enabled = false;
}