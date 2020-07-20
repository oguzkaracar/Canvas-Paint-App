var setRadius=function (newRadius) {
	if (newRadius<minRad)
		newRadius=minRad;
	else if (newRadius>maxRad) 
		newRadius=maxRad;
	radius=newRadius;
	context.lineWidth=radius*2;
	radSpan.innerHTML=radius;
}



var minRad=1,
	maxRad=100,
	defaultRad=10,
	aralik=5,
	radSpan=document.getElementById("radval"),
	decRad=document.getElementById("decrad"),
	incRad=document.getElementById("incrad");

decRad.addEventListener("click",function () {
	setRadius(radius-aralik);
});

incRad.addEventListener("click",function () {
	if (radius==1) {
		setRadius(radius+4); //1 olduktan sonra 5 eklenip 6 olmasın diye önlem alındı...
		return false;
	}
	setRadius(radius+aralik);
});

setRadius(defaultRad);