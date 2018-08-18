$(document).ready(
  function(){
    adjustVideo();
    $(window).resize(adjustVideo);
  }
)
function adjustVideo(){
  $('.homepage-hero-module').height($("#row_video").height());
  $(".video-container video").height($("#row_video").height());
}
