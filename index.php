<!DOCTYPE html>
<html>
    <head>
        <title>Game Jam - CRINGE</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,800|Roboto:300,500&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <body class="body">
        <?php
            $monfichier = fopen('counter.txt', 'r+');
 
            $pages_vues = fgets($monfichier);
             
            fclose($monfichier);
        ?>
        <h1>Cringe.</h1>
        <p class="countdown"></p>
        <p class="counter"><?php echo $pages_vues ?><span>/ 1000</span></p>

        <footer>
            <p>Press « space » or touch the screen.</p>
        </footer>

        <div class="myAudio"></div>
        
        

        <?php echo 'User IP - '.$_SERVER['REMOTE_ADDR']; ?>
        
        <script src="assets/js/script.js"></script>
    </body>
</html>
