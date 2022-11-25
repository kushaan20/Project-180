var latitude
var longitude

var destination

function location1(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    } else{
        alert("Sorry, Your Browser Does Not Support the Navigator!")
    }
}

function success(position){
    console.log(position)
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    mapboxgl.accessToken = 'pk.eyJ1Ijoia3VzaGFhbmFnYXJ3YWwiLCJhIjoiY2xhMTRzeTIwMDN1NTNvcGZrdTV2MDgxaCJ9.D_6nrH3kon9pDM1b2Jd5sg';
   
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ longitude, latitude],
        zoom: 13
    });
    
    map.addControl(
        new MapboxDirections({
             accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
    
    map.on('click',function(event){
        console.log(event)
        destination = event.lngLat
    })

    var img5 = document.querySelector("#sun")

    var marker5  = new mapboxgl.Marker({
    element: img5
})
.setLngLat([77.3928,23.2630])
.addTo(map);

}

$(document).ready(function(){
    location1()
})

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})