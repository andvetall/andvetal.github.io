function homeWorkOne() {


    var numbers = [254, 115, 78, 25, 91, 45, 37]
    var res = []
    for (var i = 0; i < numbers.length; i++) {
        (numbers[i] > 50) ? res.push(numbers[i]) : null
    }
    alert(res)
}
