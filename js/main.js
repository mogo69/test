
$(function() {
  $('#message-text').hover(function() {
    $('#message').css('background-color', '#FEFD00');
  }, function() {
    // on mouseout, reset the background colour
    $('#message').css('background-color', '#ECEFF4');
  });
});

$(function() {
  $('#phone-text').hover(function() {
    $('#phone').css('background-color', '#FEFD00');
  }, function() {
    // on mouseout, reset the background colour
    $('#phone').css('background-color', '#ECEFF4');
  });
});