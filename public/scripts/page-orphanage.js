//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//create map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
const map = L.map('mapid', options).setView([lat,lng], 16);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

//create and add marker
L.marker([lat,lng], {icon}).addTo(map);

// Image Gallery

function selectImage(event) {
    const button = event.currentTarget;

    //remove todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    //select image clicked
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //actualize image container
    imageContainer.src = image.src;
    //add back active for this button
    button.classList.add('active');
};