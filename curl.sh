#!/bin/sh

TARGET=${1:-127.0.0.1:8080}

echo | curl -m 0.5 telnet://$TARGET -s

C=$?
[ $C -eq 7 ] && echo $TARGET is closed
[ $C -eq 28 ] && echo $TARGET is open