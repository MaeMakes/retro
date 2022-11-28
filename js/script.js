//$("<.text, .image").hide();
//
//$("h1").click(function(){
//    $(".text").fadeIn();
//});
//$(".text").click(function(){
//    $(".image").show();
//});

$(".bigimage, .ex").hide();

$(".image").click(function(){
     $(".bigimage, .ex").show();
});

$(".ex").click(function(){
    $(".bigimage, .ex").hide();
});


$("button").click(function(){
    $(".bigimage, .ex").fadeToggle();
});


$("button").click(function(){
    $(this).fadeOut();
});

