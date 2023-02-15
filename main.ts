function bin2hex (bin1: string) {
    ret = ""
    länge = bin1.length / 4
    while (index <= länge) {
        c = ""
        four = bin1.substr(index * 4, 4)
        if (four == "0000") {
            c = "0"
        } else if (four == "0001") {
            c = "1"
        } else if (four == "0010") {
            c = "2"
        } else if (four == "0011") {
            c = "3"
        } else if (four == "0100") {
            c = "4"
        } else if (four == "0101") {
            c = "5"
        } else if (four == "0110") {
            c = "6"
        } else if (four == "0111") {
            c = "7"
        } else if (four == "1000") {
            c = "8"
        } else if (four == "1001") {
            c = "9"
        } else if (four == "1010") {
            c = "A"
        } else if (four == "1011") {
            c = "B"
        } else if (four == "1100") {
            c = "C"
        } else if (four == "1101") {
            c = "D"
        } else if (four == "1110") {
            c = "E"
        } else if (four == "1111") {
            c = "F"
        }
        ret = "" + ret + c
        index += 1
    }
    return ret
}
function dez2bin (zahl22: number) {
    ergebnis = ""
    while (true) {
        // Division mit Rest, speichere nur den Rest
        rest = zahl22 % 2
        // Division mit Rest, speichere den ganzzahligen Quotient
        zahl22 = Math.idiv(zahl22, 2)
        // füge dem Ergebnis ein weiteres Bit rechts hinzu
        ergebnis = "" + rest + ergebnis
        // Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if (zahl22 == 0) {
            break;
        }
    }
    return ergebnis
}
function hex2bin (hex1: string) {
    länge = hex1.length
    ret = ""
    while (index <= länge) {
        c = ""
        four = hex1.substr(index, 1)
        if (four == "0") {
            c = "0000"
        } else if (four == "1") {
            c = "0001"
        } else if (four == "2") {
            c = "0010"
        } else if (four == "3") {
            c = "0011"
        } else if (four == "4") {
            c = "0100"
        } else if (four == "5") {
            c = "0101"
        } else if (four == "6") {
            c = "0110"
        } else if (four == "7") {
            c = "0111"
        } else if (four == "8") {
            c = "1000"
        } else if (four == "9") {
            c = "1001"
        } else if (four == "A") {
            c = "1010"
        } else if (four == "B") {
            c = "1011"
        } else if (four == "C") {
            c = "1100"
        } else if (four == "D") {
            c = "1101"
        } else if (four == "E") {
            c = "1110"
        } else if (four == "F") {
            c = "1111"
        }
        ret = "" + ret + c
        index += 1
    }
    return ret
}
let binstring = ""
let zahl22 = 0
let rest = 0
let ergebnis = ""
let four = ""
let c = ""
let index = 0
let länge = 0
let ret = ""
let zahl2223 = 0
let zahl2 = 0
let zahl2222 = 0
let zahl222 = 0
basic.forever(function () {
    binstring = hex2bin("5A")
    basic.showString("" + (binstring))
    basic.pause(2000)
})
