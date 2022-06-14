basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Asleep)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showIcon(IconNames.Tortoise)
            } else {
                basic.clearScreen()
            }
        }
    }
})
