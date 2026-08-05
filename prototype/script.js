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


const dhammaTalk =
document.getElementById("dhammaTalk");

if(sutta.dhammaTalks){

dhammaTalk.href =
"../dhammatalk.html?id=" + sutta.id;

}

else{

dhammaTalk.style.display = "none";

}


const returnLink =
document.getElementById("return");


const number =
parseInt(id.replace("MN",""));


let start =
Math.floor((number - 1) / 10) * 10 + 1;


let end =
start + 9;


if(number >= 151){

end = 152;

}


returnLink.href =
"MN" + start + "-" + end + ".html";


})

.catch(error => {

console.log("Error loading catalog:", error);

});
