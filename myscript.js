function changeImageVoyager() {

    var imageSrc = document.getElementById("voyager-img").src;
    var relativePath = imageSrc.substring(imageSrc.lastIndexOf("/images/") + 1);
    
    if (relativePath == "images/palebluedot.jpg"){
        document.getElementById("voyager-img").src = "./images/palebluedot-notfound.jpg";
    } else {
        document.getElementById("voyager-img").src = "./images/palebluedot.jpg";
    }
}

function changeImageCassini() {

    var imageSrc = document.getElementById("cassini-img").src;
    var relativePath = imageSrc.substring(imageSrc.lastIndexOf("/images/") + 1);
    
    if (relativePath == "images/cassini-palebluedot.jpg"){
        document.getElementById("cassini-img").src = "./images/cassini-palebluedot-notfound.jpg";
    } else {
        document.getElementById("cassini-img").src = "./images/cassini-palebluedot.jpg";
    }
}