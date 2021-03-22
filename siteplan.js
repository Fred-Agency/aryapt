$(document).ready(function() {
$('.floor, .date, .price').click(function() {
alert('here hit');
$( this ).find('.dropdown').toggleClass('hidden');
});
});
