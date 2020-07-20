var colors=['black','grey','white','red','orange','yellow','green','indigo','violet'];

for (var i = 0; i < colors.length; i++) { 
	//renk paletine swatchları ve renklerini dinamik olarak ekledik.
	var swatch=document.createElement("div");
	swatch.className="swatch";
	swatch.style.backgroundColor=colors[i];
	swatch.addEventListener("click",setSwatch);
	document.getElementById("colors").appendChild(swatch);

}

function setColor (color) {
   context.fillStyle=color;
   context.strokeStyle=color;
   var active=document.getElementsByClassName("active")[0]; //active olan swatchı seçtik.
   if (active) {
   		active.className="swatch"; 
   		// active classı resetledik. ve yeni swatch a ekleme işlemi yapılacak.
   }

}
function setSwatch(e) {
	var swatch=e.target;	
	setColor(swatch.style.backgroundColor);
	//secilen swatchın arkaplan rengini color olarak atadık.
	swatch.className += " active";
}

setSwatch({target:document.getElementsByClassName("swatch")[0]});