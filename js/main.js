$(document).ready( function() {

  // HOLY COW PLEASE DELETE THIS IMMEDIATELY
  console.log("I'M WORKING");

  // Put things that you actually want to have happen here.
  $("#carousel nav button").click(function(){
    var ind = $(this).index("#carousel nav button");
    // console.log(ind);
    $("#carousel ul").animate({"margin-left": "-"+ind*650});

    $("#carousel nav button").removeClass("active");
    $(this).addClass("active");
    return false;
  });

});
