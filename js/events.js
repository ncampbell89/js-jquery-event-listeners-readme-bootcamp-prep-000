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
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed')
    }
  })
}

$(document).ready(function(){

return getIt()
return frameIt()
return pressIt()

});
