function PrintLoop() {
    for(var i = 0; i < 7; i++) {
        for(var j = 0; j<i; j++) {
            process.stdout.write("*")
        }
        console.log("");
    }

    console.log("");

    for(var i = 0; i<6; i++) {
        for(var j = 0; j<6-i; j++) {
            process.stdout.write(" ")
        }
        for(var j = 0; j<i; j++) {
            process.stdout.write("*")
        }
        console.log("");
    }
}

PrintLoop()