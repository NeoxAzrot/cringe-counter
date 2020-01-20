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

setInterval(function(){ 
    time_actual = new Date().getSeconds();
    $('.countdown').text('Automatic refresh in : ' + ((refresh_time / 1000) - time_actual) + 's.');

    if(time_actual == 59) {
        document.location = "index.php";
    }
}, 1000);

var counter = $('.counter').html();
counter = counter.split("<span>/ 1000</span>");
console.log(counter);

var last_number_counter = parseInt(counter[0]);

var audio = $('.myAudio');

if((last_number_counter % 50) == 0) {
    audio.append("<audio src='assets/musiques/cringe.mp3' autoplay></audio>");
}
