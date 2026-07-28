const params = new URLSearchParams(window.location.search);

const id = params.get("id");


fetch("catalog.json")

.then(response => response.json())

.then(data => {


const sutta = data.find(item => item.id === id);


if(!sutta){

document.getElementById("title").textContent =
"Sutta not found";

return;

}



document.getElementById("title").textContent =
sutta.title;



document.getElementById("subtitle").textContent =
sutta.subtitle;



const pdf =
document.getElementById("pdf");


if(sutta.visual){

pdf.href = sutta.visual;

}

else{

pdf.style.display = "none";

}



const video =
document.getElementById("video");


if(sutta.video){

video.href = sutta.video;

}

else{

video.style.display = "none";

}



const original =
document.getElementById("original");


original.href = "sutta.html?id=" + sutta.id;



})

.catch(error => {

console.log("Error loading catalog:", error);

});
