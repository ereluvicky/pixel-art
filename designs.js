// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	$('#pixelCanvas').empty();
	var rows = $('#inputHeight').val();
	var columns = $('#inputWeight').val();
// Populate the table with the number of row (inputHeight) and columns (inputWeight)
	for (var i = 0; i < rows; i++) {
		$newrow = $('<tr>')
		for (var j = 0; j < columns; j++) {
			$newrow.append('<td id="row'+i+'col'+j+'">')
		}
		$('#pixelCanvas').append($newrow)
	}
}
$(function(){
	$("form#sizePicker").on('submit',function(e){
		e.preventDefault();
		makeGrid();
	})
	$('#pixelCanvas').on('click', 'td', function(e){
		$(e.target).attr('style',"background-color:"+ $("#colorPicker").val())
	})
})