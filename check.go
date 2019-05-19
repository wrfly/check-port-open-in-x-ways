package main

// usage:
// go run main.go 1.2.3.4:8080

import (
	"fmt"
	"net"
	"os"
	"time"
)

func main() {
	target := "127.0.0.1:8080"
	if len(os.Args) >= 2 {
		target = os.Args[1]
	}

	c, err := net.DialTimeout("tcp", target, time.Second/2)
	if err != nil {
		fmt.Println(err)
		fmt.Println(target, "is closed")
	} else {
		c.Close()
		fmt.Println(target, "is open")
	}
}
