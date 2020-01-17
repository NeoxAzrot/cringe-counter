<?php

    $myfile = fopen('counter.txt', 'r+');
    
    $number_cringe = fgets($myfile); // On lit la première ligne (nombre de pages vues)
    $number_cringe += 1; // On augmente de 1 ce nombre de pages vues
    fseek($myfile, 0); // On remet le curseur au début du fichier
    fputs($myfile, $number_cringe); // On écrit le nouveau nombre de pages vues
    
    fclose($myfile);

    header('Location: .');

?>