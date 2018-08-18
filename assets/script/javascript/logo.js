$(window).on('load', function(){
  $(".loader").hide();
  $(".loading_text").hide();
  $("#skip").show();
  //Typed js function to type the strings
  $(function() {
    $("#hello").typed({
      strings: ["<p>Hello!</p>^1000<p>My name is Rishab.<p>\
      ^1000<p>I am a...</p>^1000<span id = \"logo\"></span>"],
      typeSpeed: 5,

      callback: function() {
        $(".typed-cursor").remove(); //removing cursor
        $("#logo").typed({
          strings: ["Programmer","Designer","Developer!"],
          typeSpeed: 30,

          callback: function(){
            $(".typed-cursor").remove(); //removing cursor

            //Click the developer button and the div disappears
            $("#logo").click(removeHome);
            setTimeout(removeHome, 2000);
          }
        });
      }
    });
  }
)
});

$("#skip").click(removeHome);

function removeHome() {
  $("body").css("overflow-y", "auto");
  $("#canvas-row").slideUp("slow", function() {
    $('.everything').css("display", "block");
    adjustVideo();
    $("#nav").addClass("navbar-fixed-top");
    $("#canvas-row").remove();
  });
}
