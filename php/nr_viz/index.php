<?php 
    $f = fopen("a.txt", "r") or die("EROARE!");
    $nr_f = fread($f, filesize("a.txt"));
    $nr_f++;
    fclose($f);
    $f = fopen("a.txt", "w") or die("EROARE!");
    fwrite($f, $nr_f);
    fclose($f);
?>