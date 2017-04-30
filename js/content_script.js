//When Document Ready
$(document).ready(function() {
    console.log("Content Script loaded");

    // TODO: Add paste function with key bind
    $("body").click(function() {
        console.log("Clicked ID : ", document.activeElement.id);  
    });
});
