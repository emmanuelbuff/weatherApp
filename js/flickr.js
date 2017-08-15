$(document).ready(function() {
  
    // the AJAX part
var longitude;
var latitude;    
 var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/56f5e6d223ee8a0688f15763f039ce1d/";
var comp;
    
function getLocation() {
  var urlIP = "https://freegeoip.net/json?callback=?";
  $.getJSON(urlIP, function(data) {
    latitude = data.latitude;
    longitude = data.longitude; 
    comp = url + latitude + ',' + longitude;
     var picture;
      $.ajax({
  cache: true,
  type: "GET",
  url: comp,
  success:function(data){
      var weather = [{
    "now": "clear-day",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/day.svg"
},
               {
    "now": "clear-night",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/night.svg"
},
               {
    "now": "partly-cloudy-day",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-1.svg"
},
               {
    "now": "partly-cloudy-night",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-night-2.svg"
},
               {
     "now": "cloudy",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg"
},
               {
     "now": "rain",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-7.svg"
},
               {
     "now": "sleet",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-5.svg"
},
               {
     "now": "snow",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-5.svg"
},
               {
     "now": "wind",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg"
},
               {
     "now": "fog",
    "url": "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg"
}];
      var icon = data.currently.icon
     
       
$('#location').text( data.timezone );
      var toggle = [{
          "degree": false,
          "tempertaure": data.currently.temperature 
      }];
      hello();
      $('#data').html( "<br/><p>" + data.currently.temperature + "\xB0F</p>");
      $('button').click(function(){
          
   if( toggle[0].degree === false){
       var fToCel =  Math.round( (data.currently.temperature - 32) * 5 / 9, 2 )  ;
        $('#data').html( "<br/><p>" + fToCel + "\xB0C</p>");
       toggle[0].degree = true;
       hello()
   }       else{
       $('#data').html( "<br/><p>" + data.currently.temperature + "\xB0F</p>");
        toggle[0].degree = false;
       hello();
   } 
     });
       
   function hello(){  
      $('#weather').html( data.currently.summary )
      picture = data.currently.summary ;
       $('body').css('background-image', 'url("  https://source.unsplash.com/random/1600x900/?' + picture + '")');
        
     switch (icon) {
        case 'clear-day':
              $('#data').append( '<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[0].url + '"> ');
        break;
        case 'clear-night':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[1].url + '"> ');
        break;
        case 'partly-cloudy-day':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[2].url + '">  ');
        break;
        case 'partly-cloudy-night':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[3].url + '">  ');
        break;
        case 'cloudy':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[4].url + '">  ');
        break;
        case 'rain':
              $('#data').append( '<p id="hi">' + data.currently.summary + '</p> '+ '<img src="' + weather[5].url + '"> ');
        break;
        case 'sleet':
              $('#icons').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[6].url + '">  ');
        break;
        case 'snow':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[7].url + '" >  ');
        break;
        case 'wind':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[8].url + '"> ');
        break;
        case 'fog':
              $('#data').append('<p id="hi">' + data.currently.summary + '</p> ' + '<img src="' + weather[9].url + '"> ');
        break;
    default: 
              $('#data').html("error getting icon");
                        }
   }
  },
error:$('#location').html("Wait while we fetch your weather")
    });
  });
}
getLocation();
   var geoError = function(error){
               $('#location').html('error fetching weather');
            https://source.unsplash.com/random/800x600    
       $('body').css('background-image', 'url("  https://source.unsplash.com/random/1600x900/?unknown")');
   };  
             
});









