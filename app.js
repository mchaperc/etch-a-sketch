(function() {

	var gridSize = 0;

$(document).ready(function() {

})

$('#size').submit(function(event) {
	gridSize = $('#sizeInput').val();
	console.log(gridSize);
	iterate(gridSize);
	$('header').hide();
	$('.grid-control').show();
	event.preventDefault();
});

function iterate(gridSize) {

	var grid = '';

	for (var i = 0; i < gridSize; i++) {
		grid += '<tr>';
		for (var j = 0; j < gridSize; j++) {
			grid += '<td></td>';
		}
		grid += '</tr>';
	}

	// var measure = 960 / gridSize;

	// $('#grid').children().css({
	// 	'height': measure,
	// 	'width': measure
	// })

	$('#grid').html(grid);
}

$('table').on('mouseenter', 'td', function() {
	$(this).toggleClass('lit');
})

$('table').on('mouseleave', 'td', function() {
	$(this).toggleClass('lit');
	$(this).addClass('drawn');
})

$('#clearGrid').on('click', function() {
	$('td').removeClass('drawn');
})

$('#restart').on('click', function() {
	$('#grid').html('');
	$('.grid-control').hide();
	$('#sizeInput').val('');
	$('header').show();
})

})();