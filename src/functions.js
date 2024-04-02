function randomMove(field) {
    var flag = true
    while (flag) {
        var num = $reactions.random(8)
        if (field[num] !== 0) continue
        else flag = false
    }
    return num
}

function checkWin(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i * 3] === field[i * 3 + 1] && field[i * 3] === field[i * 3 + 2] && field[i * 3] !== 0) {
            return field[i * 3]
        }
        if (field[i] === field[i + 3] && field[i] === field[i + 6] && field[i] !== 0) {
            return field[i]
        }
    }
    if (field[0] === field[4] && field[0] === field[8] && field[0] !== 0) {
        return field[0]
    }
    if (field[2] === field[4] && field[2] === field[6] && field[2] !== 0) {
        return field[2]
    }
    return 0
}

function checkWinAnswer(field) {
    var won = checkWin(field)
    if (won == 0) {
        return 'Пока никто не победил'
    }
    if (won == 1) {
        return 'Победили крестики!'
    }
    if (won == 2) {
        return 'Победили нолики!'
    }
}