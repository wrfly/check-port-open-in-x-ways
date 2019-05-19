#!/usr/bin/python

import socket
import sys

target = "127.0.0.1:8080"
if len(sys.argv) >= 2:
    target = sys.argv[1]
x = target.split(":")

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
result = sock.connect_ex((x[0],int(x[1])))
if result == 0:
   print("%s is open" % target)
else:
   print("%s is closed" % target)
sock.close()