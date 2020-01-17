<?php

    $myfile = fopen('counter.txt', 'r+');
    
    $number_cringe = fgets($myfile);
    $number_cringe -= 1;
    fseek($myfile, 0);
    fputs($myfile, $number_cringe);
    
    fclose($myfile);

    header('Location: index');

?>