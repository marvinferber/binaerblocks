let ergebnis = ""
let rest = 0
let zahl = 0
let binstring = ""
function dez2bin (zahl: number) {
    ergebnis = ""
    while (true) {
        // Division mit Rest, speichere nur den Rest
        rest = zahl % 2
        // Division mit Rest, speichere den ganzzahligen Quotient
        zahl = Math.idiv(zahl, 2)
        // füge dem Ergebnis ein weiteres Bit rechts hinzu
        ergebnis = "" + rest + ergebnis
        // Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if (zahl == 0) {
            break;
        }
    }
    return ergebnis
}
basic.forever(function () {
    binstring = dez2bin(8)
    basic.showString(binstring)
    basic.pause(2000)
})
