$(document).ready(function() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    for(var i = 0; i < channels.length; i++) {
      $.ajax({
        'url' : 'https://wind-bow.gomix.me/twitch-api/channels/' + channels[i] + '?callback=?',
        'type': 'GET',
        'dataType': 'json',
        'success': function(data) {
          // console.log(data);

          var status_light;
          
          if (data.status === null) {
            data.status = "offline";
            status_light = 'class="offline"';
          } else {
            status_light = 'class="online"';
          }

          $("#streamers").append(
            '<tr ' + status_light + '>' +       
              '<td class="channel_logo_cell">' + '<img src=' + "'" + data.logo + "'" + 'class="channel_logo"' + '/>' + '</td>' +
              '<td>' + '<a href=' + data.url + ' ' + 'target=_blank' + ' ' + 'class="channel_name"' + '>' + data.display_name + '</a>' + '</td>' +
              '<td>' + '<h3>' + data.status + '</h3>' + '</td>' +
            '</tr>'
          );
        }
      });    
    }
});