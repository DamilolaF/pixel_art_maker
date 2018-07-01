// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var rows,cols,color;


$ (document).ready(function() {
	$('#sizePicker').submit(function (grid) {
		grid.preventDefault();
		
		
		var rows= $('#inputHeight').val(); //declare height
		var cols= $('#inputWeight').val(); //declare width
		makeGrid(rows, cols);
		// console.log('Height: ' + rows + 'and width: ' + cols);
        function makeGrid(i,j){
        	$('tr').remove();
        }
		for (var i =1; i<=rows;i++) {
			$('table').append ('<tr></tr>');
			for (var j =1; j<=cols;j++) {
				$('tr:last').append('<td></td>');
				$('td').attr('class','cells');
			}
		}
		grid.preventDefault();
		
		$('.cells').click(function(event) {
			var paint= $('#colorPicker').val();
			$(event.target).css('background-color', paint);
		});
	});
	
});


