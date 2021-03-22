$(document).ready(function(){
$('.floor, .date, .price').click(function() {
  alert('here');
$( this ).find('.dropdown').toggleClass('hidden');
});
});
