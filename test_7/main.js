function alphabetArray (){
    let array = []
    for (let i = 0; i < 26; i++) {
        array.push(i+65);
     }
    let alphabetArray = array.map(item=>String.fromCharCode(item))
    return alphabetArray
}
alphabetArray ()