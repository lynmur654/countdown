for (let index = 0; index <= 4; index++) {
    index += 1
    basic.showNumber(3 + index)
    music.playTone(262, music.beat(BeatFraction.Whole))
}
basic.showString("GO")
