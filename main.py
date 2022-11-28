ergebnis = ""
rest = 0
zahl = 0
binstring = ""
def dez2bin(zahl2: number):
    global ergebnis, rest
    ergebnis = ""
    while True:
        # Division mit Rest, speichere nur den Rest
        rest = zahl2 % 2
        zahl2 = Math.idiv(zahl2, 2)
        ergebnis = "" + str(rest) + ergebnis
        if zahl2 == 0:
            break
    return ergebnis

def on_forever():
    global binstring
    binstring = dez2bin(8)
    basic.show_string(binstring)
    basic.pause(2000)
basic.forever(on_forever)
