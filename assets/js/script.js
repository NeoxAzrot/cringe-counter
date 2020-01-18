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

var counter = $('.counter').html();
var last_number_counter = counter.substr(counter.length - 2);
var audio = $('.myAudio');

if(last_number_counter == "00") {
    audio.append("<audio src='assets/musiques/cringe.mp3' autoplay></audio>");
}