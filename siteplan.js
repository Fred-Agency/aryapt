$(document).ready(function() {
$('.floor, .date, .price, .beds').click(function() {
$('.dropdown').addClass('hidden');
$( this ).find('.dropdown').removeClass('hidden');
});
});
