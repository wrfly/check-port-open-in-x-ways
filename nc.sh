#!/bin/sh

TARGET=${1:-127.0.0.1:8080}
TARGET=$(echo $TARGET | tr ":" " ")

nc -zv -w 5 $TARGET