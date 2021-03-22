$(document).ready(function(){
$('.fp-filters-bttn-cont.floor, .fp-filters-bttn-cont.date, .fp-filters-bttn-cont.price').click(function() {
  alert('here');
$( this ).find('.dropdown').toggleClass('hidden');
});
});
