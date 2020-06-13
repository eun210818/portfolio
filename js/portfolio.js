$(function(){
   // skip menu
   $('.skip_menu>li>a').focus(function(){
      $(this).parent().css('top',0);
   });
   $('.skip_menu>li>a').focusout(function(){
      $(this).parent().css('top','-100%'); 
   });


   // header
   $(window).scroll(function(){
      var scrTop=$(document).scrollTop();
      if(scrTop>=120){
         $('.header,.mo_openbtn').addClass('active');
      }else{
         $('.header,.mo_openbtn').removeClass('active');
      }
   });

     // mo_btn
   $('.mo_openbtn').click(function(){
      $('.mobile_wrap').css('right',0);
   });
   $('.mo_closebtn').click(function(){
      $('.mobile_wrap').css('right','-300px');
   });
   $('.mo_menu').click(function(){
      $('.mobile_wrap').css('right','-300px');
   });
});