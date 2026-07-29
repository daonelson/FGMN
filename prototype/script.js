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



const visual =
document.getElementById("visual");


if(sutta.visual){

visual.href = sutta.visual;

}

else{

visual.style.display = "none";

}



const video =
document.getElementById("video");


if(sutta.video){

video.href = "video.html?id=" + sutta.id;

}

else{

video.style.display = "none";

}



const original =
document.getElementById("original");


original.href = "sutta.html?id=" + sutta.id;



const external =
document.getElementById("external");


if(sutta.external){

external.href = sutta.external;

}

else{

external.style.display = "none";

}



})

.catch(error => {

console.log("Error loading catalog:", error);

});
