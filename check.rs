// build and run it
// rustc check.rs && ./check 127.0.0.2:8082

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let mut target = "127.0.0.1:8080";
    if args.len() >= 2 {
        target = &args[1];
    }
    if !target.contains(":"){
        println!("bad target {}, missing port", target);
        return;
    }

    if let Ok(_stream) = std::net::TcpStream::connect(target) {
        println!("{} is open", target);
    } else {
        println!("{} is closed", target);
    }
}
