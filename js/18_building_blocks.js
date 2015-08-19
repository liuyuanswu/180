$(document).ready(function () {
	makeShapes();

	$(".block").draggable({
		containment: 'window',
		stack: '.block',
		snap: true,
		snapMode: 'outer',
		snapTolerance: 13,
	});

	$(".sidebar").on("mousedown", function () {
		$(".content").hide();
	});

	function makeShapes() {
		var shapes = ['square', 'rectup', 
					  'trileft', 'triright',
					  'paraleft', 'pararight', 'circle', 
					  'semitop', 'quartleft', 'quartright'];

		for (var i = 0; i < 10; i++) {
			var shape = shapes[i];
			makeShape(shape);
		}
	};

	function makeShape(shape) {
		$(".sidebar").append("<div class='block " + shape + "'></div>");	
	};
});