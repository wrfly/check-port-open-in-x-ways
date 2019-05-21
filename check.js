// https://github.com/sindresorhus/is-port-reachable
var net = require('net');

function isPortReachable(host,port){
    return new Promise((resolve => {
        const socket = new net.Socket();
    
        const onError = () => {
            socket.destroy();
            resolve(false);
        };
    
        socket.setTimeout(1000);
        socket.once('error', onError);
        socket.once('timeout', onError);
    
        socket.connect(port, host, () => {
            socket.end();
            resolve(true);
        });
    }));
}

var target = "127.0.0.1:8080";

if (process.argv.length >= 3) {
    target = process.argv[2];
}

var host = target.split(":")[0];
var port = target.split(":")[1];
(async () => {
    if (await isPortReachable(host, port)){
        console.log(target, "is open");
    }else{
        console.log(target, "is closed");
    }
})();