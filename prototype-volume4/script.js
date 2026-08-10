const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch("catalog.json")

.then(response => response.json())

.then(data => {

const item = data.find(entry => entry.id === id);

if (!item) {

document.getElementById("title").textContent =
"Selection not found";

return;

}


/* TITLE */

document.getElementById("title").textContent =
item.title;


/* SUBTITLE */

document.getElementById("subtitle").textContent =
item.subtitle;


/* VISUAL COMPANION */

const visual =
document.getElementById("visual");

if (item.visual) {

visual.href = item.visual;

}

else {

visual.style.display = "none";

}


/* VIDEO SUMMARY */

const video =
document.getElementById("video");

if (item.video) {

video.href = "video.html?id=" + item.id;

}

else {

video.style.display = "none";

}


/* ORIGINAL TEXT */

const original =
document.getElementById("original");

if (item.original) {

original.textContent = "Original Text";

original.href = item.original;

}

else {

original.style.display = "none";

}


/* AUDIO */

const audioReading =
document.getElementById("audioReading");

if (item.audio) {

audioReading.href =
"../audio.html?id=" + item.id;

}

else {

audioReading.style.display = "none";

}


/* DHAMMA TALK */

const dhammaTalk =
document.getElementById("dhammaTalk");

if (item.dhammaTalks) {

dhammaTalk.href =
"../dhammatalk.html?id=" + item.id;

}

else {

dhammaTalk.style.display = "none";

}


/* RETURN LINK */

const returnLink =
document.getElementById("return");


/*
Volume IV navigation.
For now, IV1–20 is the first
Volume IV listing page.
*/

if (id === "IV-TOC" || (id && id.startsWith("IV"))) {

returnLink.href =
"IV1-20.html";

}

else {

returnLink.href =
"IV1-20.html";

}

})

.catch(error => {

console.log(
"Error loading Volume IV catalog:",
error
);

});
