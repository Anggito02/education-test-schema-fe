var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function CheckStatus(arguments) {
    var status = true
    var error = ""

    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] < 'A' && arguments[i] != '!' && arguments[i] != ' ') {
            status = false
            error += arguments[i]
        }
    }

    if(!status) {
        console.log("Sistem kami menolak untuk inputan berisi angka " + error)
    }
    else {
        console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + arguments)
    }
}

CheckStatus(input1)
CheckStatus(input2)
CheckStatus(input3)
CheckStatus(input4)