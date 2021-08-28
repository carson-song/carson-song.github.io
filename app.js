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
