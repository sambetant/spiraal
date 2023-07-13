let X = 0
let Y = 0
let tijd = 40
basic.forever(function () {
    basic.clearScreen()
    basic.pause(tijd)
    X = 0
    Y = 0
    led.plot(X, Y)
    for (let index = 0; index < 4; index++) {
        X += 1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 4; index++) {
        Y += 1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 4; index++) {
        X += -1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 3; index++) {
        Y += -1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 3; index++) {
        X += 1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 2; index++) {
        Y += 1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 2; index++) {
        X += -1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 1; index++) {
        Y += -1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    for (let index = 0; index < 1; index++) {
        X += 1
        led.plot(X, Y)
        basic.pause(tijd)
    }
    basic.pause(1000)
})
