let x = 1;
let count = 0;

$(document).ready(function(){
  $(".desc1").hide();

  $(".div1").hover(function(){
        // $(".div1").fadeToggle ("3000");
        $(".desc1").slideDown ("3000");
        // $(".hoverB button").text("thanks");
        // $(".div1").animate({left: '250px'});
  }
  , function() {     // $(".div1").fadeToggle ("3000");
      $(".desc1").slideUp ("3000");
      // $(".hoverB button").text("hover here");
      // $(".div1").animate({left: '250px'});
})
  ;



$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

var folder = "./02. england/";
var name = "england_";
// var picNum = 0;

for (let i = 1; i < 27; i++) {

  // picNum += 1;
  name = name + i + ".JPG";

$(document.body).append(' <div class="col-sm-3"> <div class=".thumbnail"> \
<a href=" ' +folder + name + ' "> \
<img src=" '+ folder + name + ' " alt="england 1" width="100%" height="auto"> </a> <h1> </h1></div> </div>');

 name = "england_";

};






  // $("button").click(function(){
  //       // $(".div1").fadeToggle ("3000");
  //       // $(".div1").slideToggle ("3000");
  //       // $(".div1").animate({left: '250px'});
  //   $("p").toggle();
  //   $("#demo_p2").html("Hello, World!"+x);
  //   x+=1;
  //
  //   $("#demo_p2").addClass("jquery");
  //
  //
  // });
});
