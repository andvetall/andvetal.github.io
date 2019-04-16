let one = `Нарисуйте блок-схему алгоритма, который проверяет значение входного параметра x, и если это значение больше или равно 0, то возвращает в качестве результата строку "Число положительное", в противном случае - строку "Число отрицательное"`
let two = `Нарисуте блок-схему алгоритма суммирования 10 чисел, кратных 5 ( начиная с 0 )

 просуммировать нужно десять чисел 5, 10, 15, 20, 25, 30, 35, 40, 45, 50`
let three = `Напилите кодец, который работает с массивом произвольных целых чисел

var numbers = [ 254, 115, 78, 25, 91, 45, 37 ]
Ваш скрипт должен вывести в консоль все числа больше 50

Посказка: используйте оператор цикла и условный оператор`
function homeWorkThree() {
    var numbers = [254, 115, 78, 25, 91, 45, 37]
    var res = []
    for (var i = 0; i < numbers.length; i++) {
        (numbers[i] > 50) ? res.push(numbers[i]) : null
    }
    alert(res)
}

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}