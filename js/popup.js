//"Options" page, instead of using options.html

$(document).ready(function() {

	console.log("Adding event listener");

	$("body").on("click", function() {
		console.log("Clicked!");
		// TODO: Save clipboard texts to localStorage
	});

});
