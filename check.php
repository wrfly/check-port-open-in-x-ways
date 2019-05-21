<?php
function checkPort($ip, $port) {
    $fp = @fsockopen($ip, $port, $errno, $errstr, 0.1);
    if (!$fp) {
        return false;
    }
    return fclose($fp);
}

$target = "127.0.0.1:8080";
if ($argv[1] != NULL){
    $target = $argv[1];
}

$x = explode(":", $target);
if (checkPort($x[0], $x[1])) {
    echo $target, " is open\n";
}else{
    echo $target, " is closed\n";
}