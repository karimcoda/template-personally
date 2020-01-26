$(document).ready(function(){
    
    $(".bth-style").click(function(){
        $("div.open").slideToggle()
        });
      
    $(".button1").click(function(){
    $("div.last1").fadeToggle();
    
    });
    $(".button2").click(function(){
        $("div.last2").fadeToggle();
        
    });
    $(".button3").click(function(){
        $("div.last3").fadeToggle();
        
    });
    $(".button4").click(function(){
        $("div.last4").fadeToggle();
        
        });
    $(".button5").click(function(){
        $("div.last5").fadeToggle();
        
        });
    $(".button6").click(function(){
        $("div.last6").fadeToggle();
        
        });


    $(".click-homepage").click(function(){
        $(".homepage").css("display", "block");
        $(".about").css("display", "none");
        $(".contact").css("display", "none");
        $(".blog").css("display", "none");
        $(".work").css("display", "none");
        });

    $(".click-about").click(function(){
        $(".homepage").css("display", "none");
        $(".contact").css("display", "none");
        $(".blog").css("display", "none");
        $(".work").css("display", "none");
        $(".about").css("display", "block");
        });
    $(".click-contact").click(function(){
        $(".homepage").css("display", "none");
        $(".about").css("display", "none");
        $(".blog").css("display", "none");
        $(".work").css("display", "none");
        $(".contact").css("display", "block");
        });
    $(".click-blog").click(function(){
        $(".homepage").css("display", "none");
        $(".about").css("display", "none");
        $(".contact").css("display", "none");
        $(".work").css("display", "none");
        $(".blog").css("display", "block");
        });
    $(".click-work").click(function(){
        $(".homepage").css("display", "none");
        $(".about").css("display", "none");
        $(".contact").css("display", "none");
        $(".blog").css("display", "none");
        $(".work").css("display", "block");
        });

        
    
    
        
        
         
           

});