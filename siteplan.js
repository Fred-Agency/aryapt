$(document).ready(function() {
$('.floor, .date, .price, .beds').click(function() {
$('.dropdown').addClass('hidden');
$( this ).find('.dropdown').removeClass('hidden');
});
});

$( ".floor .fp-filter-bttn-option" ).click(function() {
var dataflr = $( this ).data('filter');
alert(dataflr);
});
