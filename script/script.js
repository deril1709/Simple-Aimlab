let count = 1;

//show target image (random place)
function tampilkanGambar(){
    var top = Math.random()* 400;
    var left = Math.random()* 400;

    document.getElementById("target").style.height = 60  + "px";
    document.getElementById("target").style.width = 60  + "px";
    document.getElementById("target").src = 'img/target.png';
    document.getElementById("target").style.top = top + "px";
    document.getElementById("target").style.left = left + "px";
    document.getElementById("target").style.position = "relative";
    document.getElementById("target").style.display = "block";
}
tampilkanGambar();

//function to change the image
document.getElementById("target").onclick = function (){
    document.getElementById("target").src = "img/boom.png"; 
    document.getElementById("target").style.height = 120 + "px"; 
    document.getElementById("target").style.width = 120 + "px"; 
    setTimeout(hideImage,500);

    if (count <= 5) {
        setTimeout(tampilkanGambar,600);
        count++;
    }else{
        alert("selesai")
    }
}

function hideImage(){
    document.getElementById("target").style.display = "none";
}