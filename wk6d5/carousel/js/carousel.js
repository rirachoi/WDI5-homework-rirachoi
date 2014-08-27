$(document).ready(function(){
    $('#next').click(function(){
      $('img1').css("left", "-=612px");
    });
});

// $(document).ready(function(){
//     var direction = $('.carousel-direction');
//     var next = $('#next');
//     var pre = $('#previous');
//     $(direction).click(function(){
//         switch(direction){
//             case next:
//                 $('#img1').animate("{left:"-=612px"}", 'fast');
//                 break;
//             case pre:
//                 $('#img1').animate({left:"+=612px"}, 'fast');
//                 break;
//             default:
//                 break;
//         };
//     });
// });
