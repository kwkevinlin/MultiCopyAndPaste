//When Document Ready
$(document).ready(function() {
    console.log("Content Script loaded");

    // TODO: Strenghten logic on cmd + v + 1/2/3 pasting
    // Ie. Catch paste, catch cmd + 1, or incorporate catching in key capture conditionals below
    $(document).bind('paste', function(evt) {
        console.log('Overriding pasting function!');
        evt.preventDefault();
    });

    var map = {}; // You could also use an array
    onkeydown = onkeyup = function(evt){
        map[evt.keyCode] = evt.type == 'keydown';
    
        // Key capture conditionals
        // cmd = 91
        // v = 86
        // ctrl = 17
        if (map[91] && map[86]){  // CMD + V
            console.log('Command V');
            if (document.activeElement.id == "first_name") {  // Testing safeguard
                document.activeElement.value = "test";
            }
        }
    };

});
