let one = `Обязательная часть ( 3 балла )
Создайте пустой массив letters

Создайте строку из нескольких слов, например "Backend As A Service"

Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова

Выведите результат в консоль

Объедините все элементы массива letters в одну строку и выведите ее в консоль`
function homeWorkOne() {
    var letters = []
    var str = "Backend As A Service"
    newStr = str.split(' ')
    for (var i = 0; i < newStr.length; i++){
        letters.push((newStr[i].charAt(0)))
    }
    alert(letters)
}

let two = `Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:

если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
в противном случае возвращает строку "Неверный тип данных"
Вызовите функцию

`
function homeWorkTwo(param) {
    typeof param === 'number' ?
        alert(new Date().toLocaleString()) :
            alert('Неверный тип данных')
}


let three = `Перейдите по ссылке

Откройте Chrome DevTools

В панели навигации найдите файл index01.js ( в папке js/ )

Установите breakpoint на строке вызова функции insertUserText ( строка 10 )

Перезагрузите страницу

Теперь обратите внимание на функцию testUserText

Ваша задача: обезопасить свою страницу от внедрения вредоносного кода с помощью функции валидации testUserText

функция должна вывести на страницу текст пользователя безопасным способом

( т.е. текст должен быть выведен "as is" ( как есть ), но код не должен быть выполнен )`

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}
