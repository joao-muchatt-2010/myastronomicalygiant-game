input.onButtonPressed(Button.A, function () {
    if (game.isRunning()) {
        if (Move == 0) {
            Move = 1
        } else if (Move == 1) {
            Move = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (game.isRunning()) {
        if (Updown == -1) {
            Updown = 1
        } else if (Updown == 1) {
            Updown = -1
        }
    }
})
let Randomizer_2 = 0
let Randomizer_3 = 0
let Randomizer_1 = 0
let Wall3: game.LedSprite = null
let Wall2: game.LedSprite = null
let Wall1: game.LedSprite = null
let Wallmove = 0
let Updown = 0
let Move = 0
game.pause()
let Character = game.createSprite(0, 2)
Character.turn(Direction.Right, 90)
Move = 1
Updown = 1
basic.forever(function () {
    if (game.isPaused() && input.buttonIsPressed(Button.AB)) {
        game.resume()
    }
})
basic.forever(function () {
    if (game.isRunning()) {
        while (Wallmove == 1) {
            basic.pause(500)
            Wall1.move(-1)
            Wall2.move(-1)
            Wall3.move(-1)
        }
        while (Wallmove == 2) {
            basic.pause(500)
            Wall1.move(-1)
        }
    }
})
basic.forever(function () {
    if (game.isRunning()) {
        basic.pause(1000)
        Randomizer_1 = randint(1, 3)
        if (Randomizer_1 == 1) {
            Wall1 = game.createSprite(4, 0)
            Wall2 = game.createSprite(4, 1)
            Wall3 = game.createSprite(4, 2)
            Wallmove = 1
        } else if (Randomizer_1 == 2) {
            Randomizer_3 = randint(0, 5)
            Wall1 = game.createSprite(4, Randomizer_3)
            Wallmove = 2
        } else if (Randomizer_1 == 3) {
            Randomizer_2 = randint(1, 2)
            if (Randomizer_2 == 1) {
                Wall1 = game.createSprite(4, 0)
                Wall3 = game.createSprite(4, 3)
                Wall2 = game.createSprite(4, 4)
                Wallmove = 1
            } else {
                Wall1 = game.createSprite(4, 0)
                Wall2 = game.createSprite(4, 1)
                Wall3 = game.createSprite(4, 4)
                Wallmove = 1
            }
        }
        basic.pause(2500)
        Wallmove = 0
        if (Randomizer_1 == 2) {
            Wall1.delete()
        } else {
            Wall1.delete()
            Wall2.delete()
            Wall3.delete()
        }
        game.addScore(5)
    }
})
basic.forever(function () {
    if (game.isRunning()) {
        if (Wallmove == 1) {
            if (Character.isTouching(Wall1)) {
                game.gameOver()
            } else if (Character.isTouching(Wall3)) {
                game.gameOver()
            } else if (Character.isTouching(Wall2)) {
                game.gameOver()
            }
        } else if (Wallmove == 2) {
            if (Character.isTouching(Wall1)) {
                game.gameOver()
            }
        }
    }
})
basic.forever(function () {
    if (Move == 1) {
        if (game.isRunning()) {
            Character.move(Updown)
            Character.ifOnEdgeBounce()
            basic.pause(300)
        }
    }
})
