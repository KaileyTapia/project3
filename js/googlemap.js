function init() {
    //alert('it works');
    var el = document.getElementById('canvas');
    var myLocation = new google.maps.LatLng(32.69966590714928, 35.30354681431254);
    var mapOptions = {
        zoom: 13,
        center: myLocation,
        mapTypeId: 'satellite'
    };
    var myMap = new google.maps.Map(el, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        title: "Nazareth, Israel",
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/cross_resize.png'

    });

    var contentString = '<h1>Nazareth, Israel</h1><p>This is the humble city in which the savior of the world, Jesus Christ, was born around 2,000 years ago! John 3:16 in the Bible explains that "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." Easter is coming up soon and its important to remember that Jesus died for all the sinners of the world and then rose up from death 3 days later! Thanks to this free gift we were given, we can now accept him into our hearts, understanding that he is the son of God. You are loved! Happy Easter!</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
    });

    marker.addListener("click", toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}



google.maps.event.addDomListener(window, 'load', init);
