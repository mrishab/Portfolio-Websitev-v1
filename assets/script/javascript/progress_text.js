$(document).ready(
  function(){
    var text = document.getElementsByClassName("loading_text")[0];

    var text_arr = [
      "Loading",
      "Loading.",
      "Loading..",
      "Loading...",
    ];

    var add = function(){
      var count = 0;

      return function(){
        count++;
        if (count >= text_arr.length)
          count = 0;
        return count;
      }
    }();

    setInterval(function(){
      text.innerHTML = text_arr[add()];
    }, 500);
  }
);
