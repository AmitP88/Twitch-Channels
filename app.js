$(document).ready(function() {
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    channels.forEach(function(channel){
      $.ajax({
        'url': 'https://wind-bow.glitch.me/twitch-api/streams/' + channel,
        'type': 'GET',
        'dataType': 'json',
        'success': function(stream_data) {
          console.log(stream_data);

          var status_background;

          if (stream_data.stream === null) {
            // If channel is offline
            status_background = 'class="offline"';
            console.log(channel);            

            $.ajax({
              'url': 'https://wind-bow.glitch.me/twitch-api/channels/' + channel + '?callback=?',
              'type': 'GET',
              'dataType': 'json',
              'success': function(offline_channel_data) {
                console.log(offline_channel_data);

                $("#streamers").append(
                  '<tr ' + status_background + '>' +       
                    '<td class="channel_logo_cell">' + '<img src=' + "'" + offline_channel_data.logo + "'" + 'class="channel_logo"' + '/>' + '</td>' +
                    '<td>' + '<h3 class="channel_name">' + offline_channel_data.display_name + '</h3>' + '</td>' +
                    '<td>' + '<a href=' + offline_channel_data.url + ' ' + 'target=_blank' + ' class="status"' + '>' + "Offline" + '</a>' + '</td>' +
                  '</tr>'
                );
              }
            });              

          } else {
            // If channel is currently streaming
            status_background = 'class="online"';

            $("#streamers").append(
              '<tr ' + status_background + '>' +       
                '<td class="channel_logo_cell">' + '<img src=' + "'" + stream_data.stream.channel.logo + "'" + 'class="channel_logo"' + '/>' + '</td>' +
                '<td>' + '<h3 class="channel_name">' + stream_data.stream.channel.display_name + '</h3>' + '</td>' +
                '<td>'+ '<img class="live-icon" src="live.gif" alt="live" />' + '<a href=' + stream_data.stream.channel.url + ' ' + 'target=_blank' + ' class="status topic"' + '>' + ' ' + stream_data.stream.channel.status + '</a>' +'</td>' +
              '</tr>'
            );
          }
          
        }
      });
    });
});