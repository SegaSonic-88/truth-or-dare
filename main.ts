input.onButtonPressed(Button.A, function () {
    Fate = randint(0, 1)
    if (Fate == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("DARE!")
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Direction2 = randint(0, 6)
    if (Direction2 == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Direction2 == 1) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (Direction2 == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else if (Direction2 == 3) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (Direction2 == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (Direction2 == 5) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (Direction2 == 6) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (Direction2 == 6) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let Direction2 = 0
let Fate = 0
music.playMelody("C E G B - G A - ", 140)
basic.showString("Truth-OR-Dare!")
