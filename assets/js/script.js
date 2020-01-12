$( document ).ready(function() {


	function genererTableau(x, y) {
		console.log("Generaytion tableau ", x, ";", y);
		$("#table").html("");
		let html = "";

		for(h=0;h<y;h++) {
			html += '<tr>';
			for(l=0;l<x;l++) {
				html += '<td class="colorme">';
					
				html += '</td>';
			}
			html += '</tr>';
		}

		$("#table").append(html);
	}


	

	$("#generateAction").click(function() {
		let x = $('input[name="x"]').val();
		let y = $('input[name="y"]').val();
		genererTableau(x, y);
	});

	$('#main').on('click', '.colorme', function () {
    	console.log('pick');
		//$('#colorpicker').trigger("click");
		let color = $('#colorpicker').val();
		$(this).css('background-color', color);
	});

	$('#applyToAll').click(function() {
		let color = $('#colorpicker').val();
		$('#table tr td').css('background-color', color);
	});

});