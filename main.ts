radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendNumber(1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendNumber(3)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    Zufallszahl = randint(1, 3)
    if (Zufallszahl == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufallszahl == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            `)
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Punkte += 1
    basic.showNumber(Punkte)
})
let Zufallszahl = 0
let Punkte = 0
radio.setGroup(12)
Punkte = 0
