$(document).click(function() {
    document.location = "addCounter.php";
})

$(document).on('keydown',function(e) {
    if(e.which == 32) {
        document.location = "addCounter.php";
    }
    if(e.which == 109) {
        document.location = "removeCounter.php";
    }
})

var refresh_time = 60000; // 1 minute
var time_actual = 0;

setInterval(function(){ 
    document.location = "index.php";
    time_actual = 0;
}, refresh_time);

setInterval(function(){ 
    time_actual += 1000;
    $('.countdown').text('Automatic refresh in : ' + (refresh_time - time_actual) / 1000 + 's.');
}, 1000);