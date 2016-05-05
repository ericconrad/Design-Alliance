// HOLY COW PLEASE DELETE THIS IMMEDIATELY
$(document).ready( function() {
  console.log("I'M WORKING");
});

$("#carousel nav a").click(function(){
  var ind = $(this).index("#carousel nav a");
  console.log(ind);
  $("carousel ul").animate({"margin-left": "-"+ind*650)};

  )
}
)
