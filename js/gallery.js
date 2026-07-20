function upDate(previewPic){

    console.log("Mouse Over or Focus");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){

    console.log("Mouse Leave or Blur");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex(){

    console.log("Page Loaded");

    let images = document.querySelectorAll(".preview");

    for(let i = 0; i < images.length; i++){

        images[i].setAttribute("tabindex","0");

        console.log("Tabindex added to image " + (i+1));
    }

}