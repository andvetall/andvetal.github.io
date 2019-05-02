// 1(3 points)
let one = `Создать файл с данными в формате JSON

Это должен быть массив объектов с двумя свойствами: title и ref

title - название картинки
ref - ссылка на картинку
Задание:
Загрузить данные из JSON-файла
Распарсить данные в массив
Вывести на страницу картинки и подписи к ним
`
function homeWorkOne() {

    var files = [

        {
            title: 'picture',
            ref: 'https://st2.depositphotos.com/1053646/6104/i/450/depositphotos_61040615-stock-photo-dubai-downtown-night-scene.jpg'
        },
        {
            title: 'picture',
            ref: 'https://s1.1zoom.ru/big3/559/347133-admin.jpg'
        },
        {
            title: 'picture',
            ref: 'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg'
        },
        {
            title: 'picture',
            ref: 'https://www.zastavki.com/pictures/originals/2014/Cities_A_city_of_skyscrapers_083208_.jpg'
        }
    ]
    var fileJson = JSON.stringify(files)


    JSON.parse(fileJson).forEach(
        function (item) {
            var elem = document.createElement("img")
            elem.style = `width: 200px; height: 133.33px`
            elem.src = item.ref
            document.querySelector('.result1').appendChild(elem)
        }
    )
}

// 2(4 points)
let two =`Исходные данные
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
}

var log = {}
sendMessage
var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)
Задача: напилить код, который вызывает функцию sendMessage для каждого элемента массива messages и логирует полученные сообщения в объекте log следующим образом:

log
{
    22:25:57: "backspace"
    22:25:58: "shift"
    22:25:59: "subtract"
    22:25:59[2]: "enter"
    22:25:59[3]: "delete"
    22:26:01: "control"
    22:26:01[2]: "space"
}`
function homeWorkTwo() {

    var messages = [
        "backspace",
        "enter",
        "shift",
        "control",
        "delete",
        "space",
        "subtract"
    ]

    messages.getKey = () => {
        var key = new Date().toLocaleString().split(", ")[1]
        return log [key] ? log [key + "[2]"] ? key + "[3]" : key + "[2]" : key
    }

    var log = {}

    var sendMessage = message => new Promise(
        resolve => setTimeout(
            () => resolve(message),
            Math.random() * 7000
        )
    )

    messages.forEach(
        (message, index, arr) => sendMessage(message)
            .then(
                mess => Object.assign(log,
                    {[arr.getKey()]: message}
                )
            )
    )
    console.log(log)
}
// 3(5 points)
let three = `Изменим условие предыдущего задания

Массив messages, объект log и функция sendMessage остаются теми же

Немного изменится метод getKey:

messages.getKey = () => new Date().toLocaleString().split(", ")[1]
Нужно напилить код рекурсивной функции recursive, которая вызывает sendMessage поочередно с каждым элементом массива messages, но только после того, как предыдущий месседж будет залогирован в объекте log

var sendAll = () => {
    var index = 0
    function recursive () {
        ...
    }
    recursive ()
}

sendAll()`
function homeWorkThree() {

    var messages = [
        "backspace",
        "enter",
        "shift",
        "control",
        "delete",
        "space",
        "subtract"
    ]

    messages.getKey = () => new Date().toLocaleString().split(", ")[1]

    var log = {}

    var sendMessage = message => new Promise(
        resolve => setTimeout(
            () => resolve(message),
            Math.random() * 5000
        )
    )

    var sendAll = () => {
        var index = 0

        function recursive() {
            sendMessage(messages [index++])
                .then(
                    response => {
                        if (!response) return
                        Object.assign(log,
                            {[messages.getKey()]: response}
                        )
                        recursive()
                    }
                )
        }

        recursive()
    }

    sendAll()
    console.log(log)
}

