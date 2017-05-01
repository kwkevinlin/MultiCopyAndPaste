// On DOM ready
$(document).ready(function() {
    var key = {}; // You could also use an array
    onkeydown = onkeyup = function(evt){
        key[evt.keyCode] = evt.type == 'keydown';
   
        // TODO: Replace current hotkeys with ctrl/cmd + v + 1/2/3
        // Will require evt.preventDefault() for "paste" and ctrl/cmd + 1/2/3 (tabs switching)
        //
        // Current conditionals:
        // CTRL + U -> clipboard 1
        // CTRL + J -> clipboard 2
        // CTRL + K -> clipboard 3
        //
        // Key codes:
        // CMD = 91
        // CTRL = 17
        // U = 85
        // I = 73
        // J = 74
        // V = 86
        if (key[17] && key[85]) {  // Ctrl + U
            chrome.storage.sync.get("clipboard_1", function(obj) {
                console.log("Ctrl U: " + obj.clipboard_1);
                cursorPos = $("#" + document.activeElement.id).prop("selectionStart");
                original = document.activeElement.value;
                document.activeElement.value = original.slice(0, cursorPos) + obj.clipboard_1 + original.slice(cursorPos);
            });
        }
        else if (key[17] && key[73]) {  // Ctrl + I
            chrome.storage.sync.get("clipboard_2", function(obj) {
                console.log("Ctrl I: " + obj.clipboard_2);
                cursorPos = $("#" + document.activeElement.id).prop("selectionStart");
                original = document.activeElement.value;
                document.activeElement.value = original.slice(0, cursorPos) + obj.clipboard_2 + original.slice(cursorPos);
            });
        }
        else if (key[17] && key[74]) {  // Ctrl + J
            chrome.storage.sync.get("clipboard_3", function(obj) {
                console.log("Ctrl J: " + obj.clipboard_3);
                cursorPos = $("#" + document.activeElement.id).prop("selectionStart");
                original = document.activeElement.value;
                document.activeElement.value = original.slice(0, cursorPos) + obj.clipboard_3 + original.slice(cursorPos);
            });
        }
    };
});