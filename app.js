$(document).ready(function() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    for(var i = 0; i < channels.length; i++) {
      $.ajax({
        'url' : 'https://wind-bow.gomix.me/twitch-api/channels/' + channels[i] + '?callback=?',
        'type': 'GET',
        'dataType': 'json',
        'success': function(data) {
          // console.log(data);
          
          if (data.status === null) {
             data.status = "offline"
          }
          
          
          $("#streamers").append(
            '<li>' + 
              '<img src=' + "'" + data.logo + "'" + '/>' +
              '<a href=' + data.url + ' ' + 'target=_blank' +'>' + data.display_name + '</a>' +
              '<h3>' + data.status + '</h3>' +
            '</li>'
          );
  
        }
      });    
    }
});