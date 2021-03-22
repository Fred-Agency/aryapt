$(document).ready(function() {
$('.floor, .date, .price').click(function(){
$('.dropdown').addClass('hidden');
$( this ).find('.dropdown').removeClass('hidden');
});
});
