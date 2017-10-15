function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty")
  })
}

function pressIt() {
  $("form").on("keydown", function() {
    if ($( "input:first" ).val() === 71) {
      alert("g is pressed")
    }
  })
}

$(document).ready(function(){

return getIt()
return frameIt()

});
