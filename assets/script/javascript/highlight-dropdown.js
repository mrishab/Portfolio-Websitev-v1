var highlights = $("#highlights h2");
highlights.click(displayHl);

function displayHl(){
  deselectAll();

  var drop = $(this).next();
  $(this).addClass("selected");
  drop.slideDown("slow");
}
function deselectAll(){
  highlights.next().slideUp("fast");
  highlights.removeClass("selected");
}
