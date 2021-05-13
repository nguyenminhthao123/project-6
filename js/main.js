$(document).ready(function () {
    new WOW().init();
   console.log($('.photo .top:nth-child(1)'))
     $(window).scroll(function () { 
        var a= $('.stylelish').offset().top;
    //    console.log($('html').scrollTop())
       var vitri=$('html').scrollTop();
    //    console.log(vitri)
        if(vitri>=500)
        {
          $(".stylelish").addClass('left')
        } 
        if(vitri>=800)
        {
           $('.services__item').addClass("left")
        }
        if(vitri>=1500)
        {
            // $(".our__Work h1").addClass("left")
            // $(".img:nth-child(1)").addClass('animate__fadeInLeft')
            // $(".img:nth-child(2)").addClass('animate__fadeInRight', 'animate__animated')
          
            
        }
        if(vitri>=2726)
        {
            $('.click__me').addClass("click_left");
            $('.look_at').addClass("click_right")
        }
     });  
   
    
        $(".tab__bar").click(function(){
            $(".menu__right").addClass("show")
        });
        $(".close").click(function(){
            $(".menu__right").removeClass("show")
        });
        $(".menu__right ul li:nth-child(1)").click(function(){
            $(".menu__right").removeClass("show")
            $('html').animate({scrollTop:$('.header').offset().top},1000)
        });
        $(".menu__right ul li:nth-child(2)").click(function(){
            $(".menu__right").removeClass("show")
            $('html').animate({scrollTop:$('.stylelish').offset().top},1000)
        });
        $(".menu__right ul li:nth-child(3)").click(function(){
            $(".menu__right").removeClass("show")
            $('html').animate({scrollTop:$('.Our__Services').offset().top},1000)
            
        });
        $(".menu__right ul li:nth-child(4)").click(function(){
            $(".menu__right").removeClass("show")
            $('html').animate({scrollTop:$('.our__Work').offset().top},1000)
            TweenMax.staggerFrom($('.img'), 2 ,{y:200,opacity:0},2)
        });
        $(".menu__right ul li:nth-child(5)").click(function(){
            $(".menu__right").removeClass("show")
            $('html').animate({scrollTop:$('.map').offset().top},1000)
        });
        $(".back_top").click(function(){
            
            $('html').animate({scrollTop:0},1000)
        });

        
      
});