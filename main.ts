let länge = 0
let index = 0
let c = ""
let four = ""
let ret = ""
let ergebnis = ""
let rest = 0
let zahl2 = 0
let binstring = ""
function bin2hex(bin1: string): string {
    
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

function dez2bin(zahl22: number): string {
    
    ergebnis = ""
    while (true) {
        //  Division mit Rest, speichere nur den Rest
        rest = zahl22 % 2
        //  Division mit Rest, speichere den ganzzahligen Quotient
        zahl22 = Math.idiv(zahl22, 2)
        //  füge dem Ergebnis ein weiteres Bit rechts hinzu
        ergebnis = "" + ("" + rest) + ergebnis
        //  Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if (zahl22 == 0) {
            break
        }
        
    }
    return ergebnis
}

basic.forever(function on_forever() {
    
    binstring = bin2hex("11000110")
    basic.showString(binstring)
    basic.pause(2000)
})
