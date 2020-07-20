var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
/*context.fillStyle="#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);*/

/*
window.onresize=function(){ //responsive- pencere boyutu değiştiğinde de çizim yapılabilmesini sağlamak için..
    var image=context.getImageData(0,0,canvas.width,canvas.height);
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    context.putImageData(image,0,0);
    ciz(e); // resize işleminden sonra canvas otomatik olarak resetleniyor. bu sorunu imageData ile çözebiliyoruz ama. çizim işlemi (fırça) tam olarak çalışmıyor...
};
*/

//--Global Degişkenler--
var radius=10;
var dragging=false;
var shape=false;
var brush=false;
context.lineWidth=radius*2; //noktalar arasındaki cizgilerin kalınlığı..


var ciz=function (e) {
	if (dragging) {
		context.lineTo(e.offsetX,e.offsetY); // noktalar arasına line atıyor..
		context.stroke();
		context.beginPath();
		context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2); //full circle-çember
		context.fill();//içini dolduruyoruz..
		context.beginPath();
		context.moveTo(e.offsetX,e.offsetY);
		// yeni bir path oluştuyor ve önceki ve sonraki noktaların arasına line atıyoruz.
	}
}


var tusBasili=function (e) { // Mouse tuşu basılı ise değişken değeri true olucak.
	 if (e.which==1){ //sadece mouse sol tuşu ile boyama yapılabilecek...
		 if (shape){ //eğer şekil toolbarı seçildiyse şekil çizecek...
			context.rect(e.offsetX,e.offsetY,radius*2,radius*2); //noktalar ile aynı boyutlarda olması için.
			context.fill();
		 }
		 else {
		 	dragging=true;
		  	ciz(e); //mouse tık yapınca cember çizsin.
		 }
	 }

}

var tusBasiliDegil=function () {
	 dragging=false;
	 context.beginPath(); // mouse bırakıldığında yeni bir noktadan çizme işlemi başlaması için..
}

canvas.addEventListener("mousemove",ciz);
canvas.addEventListener("mousedown",tusBasili);
canvas.addEventListener("mouseup",tusBasiliDegil);
 //canvas dışına mouse tuş basılı olarak çıklıdıpğında tuş basılı olmadan çizim yapıyor?!


window.addEventListener('touchstart', function() {
  alert("dokundu");
});




/*
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
	HTMLden de sağ tık engelleme konuldu...
*/