$(document).ready( function() {

  // HOLY COW PLEASE DELETE THIS IMMEDIATELY
  console.log("I'M WORKING");

  // Put things that you actually want to have happen here.
  $("#carousel nav button").click(function(){
    var ind = $(this).index("#carousel nav button");
    var imgWidth = $($("#carousel ul li")[ind]).find("img").outerWidth();
    // console.log(ind);
    // console.log($($("#carousel ul li")[ind]).find("img").outerWidth());
    // console.log(imgWidth);
    $("#carousel ul").animate({"margin-left": "-"+ind*imgWidth});

    $("#carousel nav button").removeClass("active");
    $(this).addClass("active");
    return false;
  });

});
