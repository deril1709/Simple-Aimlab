let count = 1;
var start = "";
var end = "";
var totalWaktu = "";

<<<<<<< HEAD
//show target image (random place)
function tampilkanGambar() {
  var top = Math.random() * 400;
  var left = Math.random() * 400;

  start = new Date().getTime();

  document.getElementById("target").style.height = 60 + "px";
  document.getElementById("target").style.width = 60 + "px";
  document.getElementById("target").src = "img/target.png";
  document.getElementById("target").style.top = top + "px";
  document.getElementById("target").style.left = left + "px";
  document.getElementById("target").style.position = "relative";
  document.getElementById("target").style.display = "block";
=======

//show target image (random place)
function tampilkanGambar(){
    var top = Math.random()* 400;
    var left = Math.random()* 400;

    start = new Date().getTime();

    document.getElementById("target").style.height = 60  + "px";
    document.getElementById("target").style.width = 60  + "px";
    document.getElementById("target").src = 'img/target.png';
    document.getElementById("target").style.top = top + "px";
    document.getElementById("target").style.left = left + "px";
    document.getElementById("target").style.position = "relative";
    document.getElementById("target").style.display = "block";
>>>>>>> fb50264d085fdb73aa5368e0a7f8505ec9a6cb5e
}
tampilkanGambar();

//function to change the image
<<<<<<< HEAD
document.getElementById("target").onclick = function () {
  document.getElementById("target").src = "img/boom.png";
  document.getElementById("target").style.height = 120 + "px";
  document.getElementById("target").style.width = 120 + "px";
  setTimeout(hideImage, 500);

  // set total waktu
  if (count <= 10) {
    setTimeout(tampilkanGambar, 600);
    count++;
  } else {
    alert("selesai");
    end = new Date().getTime();
    totalWaktu = (end - start) / 1000;
    document.getElementById("totalWaktu").innerHTML = totalWaktu + "s";
  }
};
function hideImage() {
  document.getElementById("target").style.display = "none";
}
=======
document.getElementById("target").onclick = function (){
    document.getElementById("target").src = "img/boom.png"; 
    document.getElementById("target").style.height = 120 + "px"; 
    document.getElementById("target").style.width = 120 + "px"; 
    setTimeout(hideImage,500);



    // set total waktu
    if (count <= 5) {
        setTimeout(tampilkanGambar,600);
        count++;
    }else{
        alert("selesai")
        end = new Date().getTime();
        totalWaktu = (end - start) / 1000;
        document.getElementById("totalWaktu").innerHTML = totalWaktu + "s"
    }
}
function hideImage(){
    document.getElementById("target").style.display = "none";
}


>>>>>>> fb50264d085fdb73aa5368e0a7f8505ec9a6cb5e
