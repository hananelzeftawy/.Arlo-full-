// loading Screen
$(document).ready(function(){
    $("#loadingScreen .spinner").fadeOut(10, function(){
        $("#loadingScreen").fadeOut(10, function(){
            $("body").css("overflow-y", "visible")
        })
    })
})
// color settings
let colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor" , "orange");
colorItem.eq(1).css("backgroundColor" , "tomato");
colorItem.eq(2).css("backgroundColor" , "teal");
colorItem.eq(3).css("backgroundColor" , "#e65f78");
colorItem.eq(4).css("backgroundColor" , "purple");

colorItem.click(function(){
    let bgColor = $(this).css("backgroundColor");
    $(".main-color").css("color" , bgColor)
})

$("#sideBarIcon").click(function(){
    let boxWidth =  $(".color-box").innerWidth();
    if( $("#sideBar").css("right") == "0px")
    {
     $("#sideBar").animate({right :- boxWidth}, 1000)
    }
    else
    {
        $("#sideBar").animate({right : "0px"}, 1000)
    }
})

// navigations
let biographyOffset = $("#demo1").offset().top;
$(window).scroll(function(){
  let navOffset =  $(".navbar").offset().top;
  if(navOffset > biographyOffset - 130)
  {
      $(".navbar").css("backgroundColor" , "rgba(0,0,0,0.6)");
      $("#scrollBtn").fadeIn(1000);
  }
  else
  {
      $(".navbar").css("backgroundColor" , "transparent");
      $("#scrollBtn").fadeOut(1000);
  }
});

$("a[href^='#']").click(function(){
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop : sectionOffset}, 2000)
});

$("#scrollBtn").click(function(){
    $("html,body").animate({scrollTop : 0}, 2000)
})

$(".continue-read").click(function(){
    let footerOffset = $("#footer").offset().top;
    $("html,body").animate({scrollTop: footerOffset},2000)
})
