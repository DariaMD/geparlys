$(document).ready(function () {
  console.log('done');

  $('#main-ul li').hover(function(){
    $(this).find('.dropdown').hide().fadeIn(500)
  }, function () {
    $(this).find('.dropdown').show().fadeOut(500)
  })

})
