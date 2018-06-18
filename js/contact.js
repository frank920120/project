(function(){

     // When the window has finished loading create our google map below
     google.maps.event.addDomListener(window, 'load', init);
        
     function init() {
         // Basic options for a simple Google Map
         // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
         var mapOptions = {
             // How zoomed in you want the map to start at (always required)
             zoom: 15,

             // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(49.2834511, -123.1152548), 

             // How you would like to style the map. 
             // This is where you would paste any style found on Snazzy Maps.
             styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
            };


         // Get the HTML DOM element that will contain your map 
         // We are using a div with id="map" seen below in the <body>
         var mapElement = document.getElementById('tMap');

         // Create the Google Map using our element and options defined above
         var map = new google.maps.Map(mapElement, mapOptions);

         // Let's also add a marker while we're at it
         var marker = new google.maps.Marker({
             position: new google.maps.LatLng(49.2834511, -123.1152548),
             map: map,
             title: 'Snazzy!'
         });
     }


                //Check search bar  input vaild

            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                // in case the input is already filled..
                if( inputEl.value.trim() !== '' ) {
                    classie.add( inputEl.parentNode, 'input--filled' );
                }

                // events:
                inputEl.addEventListener( 'focus', onInputFocus );
                inputEl.addEventListener( 'blur', onInputBlur );
            } );

            function onInputFocus( ev ) {
                classie.add( ev.target.parentNode, 'input--filled' );
            }

            function onInputBlur( ev ) {
                if( ev.target.value.trim() === '' ) {
                    classie.remove( ev.target.parentNode, 'input--filled' );
                }
            }


            $('.textarea-title').on('click',function(){
                $('.email-content').slideToggle();
            });




})(jQuery)