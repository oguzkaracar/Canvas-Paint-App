var saveButton=document.getElementById("save");
var clearButton=document.getElementById("clearButton");
saveButton.addEventListener("click",saveImage);
clearButton.addEventListener("click",clearStage);

function randomName() { //rastgele resim ismi oluşturma işlemii....
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function saveImage(){
    var data=canvas.toDataURL(); // KANVAS ÖZELLİĞİ.. BAK!
    var link = document.createElement('a'); //otomatik kaydetmek için link oluşturuyoruz....
	link.href = data;
    var imgName=randomName();
	link.download =imgName+".png";
	document.body.appendChild(link);
	link.click();//otomatik link tetikleme işlemi ile indirme yapılıyor...
	document.body.removeChild(link); // gizlice eklenen a tag i siliniyor..

            //PHP - BACKEND İLE YAPILMASI İÇİN....
    /*var request=new XMLHttpRequest();
    request.onreadystatechange=function () {
    	if (request.readyState==4 && request.status==200) {
    		var response=request.responseText;
    		window.open(response, '_blank', 'location=0, menubar=0');
    	}
    }
    request.open('POST','save.php',true);
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.send('img='+data);*/

    //window.open(data, '_blank', 'location=0, menubar=0');
}

function clearStage () { //silme onay işlemi.... 
    var r=confirm("Silmek istediğine emin misin?");
    if (r)
        context.clearRect( 0, 0, window.innerWidth, window.innerHeight);
    else
        return false;
}


