$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var words = $("p").text().split(" ");
  $("p").empty();
  $.each(words, function(i, v) {
    $("p").append($("<span>").text(v));
  });
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  var colors = ['red','green','blue','orange'];
  var callFunc = function(){
    $("p").find('span').css( "color", colors[Math.floor(Math.random() * colors.length)] );
  };
  setInterval(callFunc, 1000);
});