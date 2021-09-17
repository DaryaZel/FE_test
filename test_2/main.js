(function print() {
    let end = 99
    let i = 0
    while (i <= 99) {
        if (i % 3 == 0 && i % 7 == 0) {
            console.log('OpenSource')
        }
        else if (i % 3 == 0) {
            console.log('Open')
        }
        else if (i % 7 == 0) {
            console.log('Source')
        }
        else {
            console.log(i)
        }
        i++
    }
})()