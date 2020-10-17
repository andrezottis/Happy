//create map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
const map = L.map('mapid').setView([-30.0428422,-51.2221605], 16);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68]
});

//create and add marker
//L.marker([-30.0428422,-51.2221605], {icon}).addTo(map);
let marker;

map.on('click',(event)=>{
    const lat= event.latlng.lat;
    const lng= event.latlng.lng;

    document.querySelector('[name=lat]').value =lat;
    document.querySelector('[name=lng]').value =lng;

    //remove marker if exists
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng], {icon}).addTo(map);
})


//add photos url
function addPhotoField(){
    //get photo container ID images
    const container = document.querySelector('#images');
    //get container for duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //clone container from last photo addPhotoField
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
    //check if field is empty
    const isEmpty = newFieldContainer.children[0];

    if(isEmpty.value == "") {
        return
    }
    //clean field before load
    newFieldContainer.children[0].value = "";    
    //add the cloned to image container
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){ 
        span.parentNode.children[0].value ="";
        return 
    };

    span.parentNode.remove();

}

//select yes or no 
function toggleSelect(event) {
      //remove class active from all
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active');
    });
    //change active 
    const button = event.currentTarget;
    button.classList.add('active');

    //update input hidden
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

function validate(event) {
    const latToValid = document.querySelector('[name="lat"]').value;
    const lngToValid = document.querySelector('[name="lng"]').value;

    var needLatAndLng = false;

    if(latToValid === '' ){
        needLatAndLng = true;
    }else{
        needLatAndLng =false;
    }

    if(lngToValid === ''  ){
        needLatAndLng = true;
    }else{
        needLatAndLng =false;
    }

    if (needLatAndLng){
        event.preventDefault();
        alert('Selecione um ponto no mapa');
    }
}