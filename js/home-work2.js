function homeWorkTwoOne() {
    var letters = []
    var str = "Backend As A Service"
    newStr = str.split(' ')
    for (var i = 0; i < newStr.length; i++){
        letters.push((newStr[i].charAt(0)))
    }
    alert(letters)
}


function homeWorkTwoTwo(param) {
    typeof param === 'number' ? alert(new Date().toLocaleString())  : alert('Неверный тип данных')
}

