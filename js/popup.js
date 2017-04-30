// popup.js

$(document).ready(function() {
	// Load stored clipboard values from storage if available
	chrome.storage.sync.get(["clipboard_1", "clipboard_2", "clipboard_3"], function(obj) {
    	$("#clipboard_1").val(obj.clipboard_1);
    	$("#clipboard_2").val(obj.clipboard_2);
    	$("#clipboard_3").val(obj.clipboard_3);
    });

	// Save clipboard values on change
	$("#clipboard_1").change(function () {
		chrome.storage.sync.set({'clipboard_1': $("#clipboard_1").val()}, function() {
			console.log('Settings 1 saved');
		});
	});
	$("#clipboard_2").change(function () {
		chrome.storage.sync.set({'clipboard_2': $("#clipboard_2").val()}, function() {
			console.log('Settings 2 saved');
		});
	});
	$("#clipboard_3").change(function () {
		chrome.storage.sync.set({'clipboard_3': $("#clipboard_3").val()}, function() {
			console.log('Settings 3 saved');
		});
	});
});

