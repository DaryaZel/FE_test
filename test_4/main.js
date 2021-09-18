function getSum(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Number.isInteger(parseFloat(element))) {
            sum += parseInt(element)
        }
    }
    console.log(sum)
}
getSum(['1', 'a', '25', '13.1'])