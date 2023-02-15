def bin2hex(bin1: str):
    global ret, länge, c, four, index
    ret = ""
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
def hex2bin(hex1: str):
    global länge, ret, c, four, index
    länge = len(hex1)
    ret = ""
    while index <= länge:
        c = ""
        four = hex1.substr(index, 1)
        if four == "0":
            c = "0000"
        elif four == "1":
            c = "0001"
        elif four == "2":
            c = "0010"
        elif four == "3":
            c = "0011"
        elif four == "4":
            c = "0100"
        elif four == "5":
            c = "0101"
        elif four == "6":
            c = "0110"
        elif four == "7":
            c = "0111"
        elif four == "8":
            c = "1000"
        elif four == "9":
            c = "1001"
        elif four == "A":
            c = "1010"
        elif four == "B":
            c = "1011"
        elif four == "C":
            c = "1100"
        elif four == "D":
            c = "1101"
        elif four == "E":
            c = "1110"
        elif four == "F":
            c = "1111"
        ret = "" + ret + c
        index += 1
    return ret
binstring = ""
zahl222 = 0
rest = 0
ergebnis = ""
four = ""
c = ""
index = 0
länge = 0
ret = ""
zahl2222 = 0
zahl2 = 0
zahl2223 = 0

def on_forever():
    global binstring
    binstring = hex2bin("0F")
    basic.show_string("" + (binstring))
    basic.pause(2000)
basic.forever(on_forever)
