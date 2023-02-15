länge = 0
index = 0
c = ""
four = ""
ret = ""
ergebnis = ""
rest = 0
zahl2 = 0
binstring = ""
def bin2hex(bin1: str):
    global länge, c, four, ret, index
    länge = len(bin1) / 4
    while index <= länge:
        c = ""
        four = bin1.substr(index * 4, 4)
        if four == "0000":
            c = "0"
        elif four == "0001":
            c = "1"
        elif four == "0010":
            c = "2"
        elif four == "0011":
            c = "3"
        elif four == "0100":
            c = "4"
        elif four == "0101":
            c = "5"
        elif four == "0110":
            c = "6"
        elif four == "0111":
            c = "7"
        elif four == "1000":
            c = "8"
        elif four == "1001":
            c = "9"
        elif four == "1010":
            c = "A"
        elif four == "1011":
            c = "B"
        elif four == "1100":
            c = "C"
        elif four == "1101":
            c = "D"
        elif four == "1110":
            c = "E"
        elif four == "1111":
            c = "F"
        ret = "" + ret + c
        index += 1
    return ret
def dez2bin(zahl22: number):
    global ergebnis, rest
    ergebnis = ""
    while True:
        # Division mit Rest, speichere nur den Rest
        rest = zahl22 % 2
        # Division mit Rest, speichere den ganzzahligen Quotient
        zahl22 = Math.idiv(zahl22, 2)
        # füge dem Ergebnis ein weiteres Bit rechts hinzu
        ergebnis = "" + str(rest) + ergebnis
        # Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if zahl22 == 0:
            break
    return ergebnis

def on_forever():
    global binstring
    binstring = bin2hex("11000110")
    basic.show_string(binstring)
    basic.pause(2000)
basic.forever(on_forever)
