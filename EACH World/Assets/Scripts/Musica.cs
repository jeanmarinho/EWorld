using UnityEngine;
using System.Collections;

public class Musica : MonoBehaviour {
	
	public Texture2D musicOn; 
	public Texture2D musicOff; 
	public bool ativo;
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (ativo) {
			gameObject.audio.mute = false;
			gameObject.guiTexture.texture = musicOn;
		} else {
			gameObject.audio.mute = true;
			gameObject.guiTexture.texture = musicOff;
		}
	}
	
	void OnMouseDown() {
		ativo = !ativo;
	}
	
}
