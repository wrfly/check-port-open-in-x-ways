#!/bin/bash

TARGET=${1:-127.0.0.1:8080}
TARGET=$(echo $TARGET | tr ":" "/")

head -n0 < /dev/tcp/$TARGET && echo "$TARGET is open"