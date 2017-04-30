// popup.js

$(document).ready(function() {
	// Load stored clipboard values from localStorage if available
	$("#clipboard_1").val(localStorage.getItem("clipboard_1"));
	$("#clipboard_2").val(localStorage.getItem("clipboard_2"));
	$("#clipboard_3").val(localStorage.getItem("clipboard_3"));

	// Save clipboard values on change
	$("#clipboard_1").change(function () {
		localStorage.setItem("clipboard_1", $("#clipboard_1").val());
	});
	$("#clipboard_2").change(function () {
		localStorage.setItem("clipboard_2", $("#clipboard_2").val());
	});
	$("#clipboard_3").change(function () {
		localStorage.setItem("clipboard_3", $("#clipboard_3").val());
	});
});

