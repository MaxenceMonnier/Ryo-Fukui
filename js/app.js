let i = 0;
    
$('.slide').click(function() {
  $('.active').addClass('nonActive')
  $(this).removeClass('nonActive').addClass('active')
  $('.textbox').hide(); 
  i = $(this).index();
  $('.textbox', this).show(); 
})









// ------------------------------------------------------

// setItner = setInterval(go, 6000);

// function go() {
//   $('.active').addClass('nonActive')
//   $($('.slide')[i % 5]).removeClass('nonActive').addClass('active')
//   // $('.textbox').hide(); 
//   // $('.textbox').show();
//   i++;
   
// }








// let i=0 ;
    
// $('.slide').click(function(){
//   $('.active').addClass('nonActive')
//    $(this).removeClass('nonActive').addClass('active')
//    i= $(this).index()
// })

//     setItner = setInterval(go,6000);
    
//     function go(){
//       $('.active').addClass('nonActive')
//        $($('.slide')[i%6]).removeClass('nonActive').addClass('active')
//        i++;
//    }
   


