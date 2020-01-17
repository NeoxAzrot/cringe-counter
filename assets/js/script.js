const fs = require('fs');

$(".body").click(function() {
    console.log("test");
})

$(document).on('keydown',function(e) {
    if(e.which == 32) {
        console.log("bite");
    }
})

