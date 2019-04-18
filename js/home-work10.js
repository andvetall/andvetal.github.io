// 1(3 points)
let one = `Логирование поступающих сообщений в объекте log
Задан массив сообщений и пустой объект log:

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}
Далее, есть функция, отправляющая сообщения в случайном порядке в случайное время:

var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
Обратите внимание, что эта функция получает при вызове не только текст сообщения, но и кллбэк-функцию, которой нужно передать это сообщение

С помощью кода:

messages.forEach (
    message => sendMessage ( message, handler )
)
инициируем отправку сообщений

:warning:

Ваша задача - напилить код функции handler,

которая получает сообщение и заносит его в объект log

в виде нового свойства,

значение которого - текст поступившего сообщения,

а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )

log
{
    19:34:08: "control"
    19:34:08[2]: "backspace"
    19:34:09: "subtract"
    19:34:09[2]: "enter"
    19:34:11: "delete"
    19:34:11[2]: "shift"
}
В помощь вам уже есть функция, которая формирует ключ очередного сообщения:

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}
На случай, если два сообщения поступят одновременно, функция getKey добавляет "[2]" к значению ключа ( иначе значения ключей двух сообщений будут совпадать )

`
function homeWorkOne() {
    let messages = [
        "backspace",
        "enter",
        "shift",
        "control",
        "delete",
        "space",
        "subtract"
    ]

    var log = {}
    var sendMessage = (message, callback) =>
        setTimeout(
            () => callback(message),
            Math.random() * 7000
        )
    getKey = () => {
        var key = new Date().toLocaleString().split(", ")[1]
        return log [key] ? key + "[2]" : key
    }
    var handler = function (message) {
        Object.defineProperty(log, getKey(), {value: message})
    }
    messages.forEach(
        message => sendMessage(message, handler)
    )
}

// 2(4 points)
let two = `Допилите код конструктора User, дополнив его акцессорами приватного свойства presence так, чтобы после выполнения скрипта:

function User ( name ) {
    this.name = name
    var presence = false
    ...
}

let user = new User ( "Ivan" )
console.info ( user.presence )
в консоли было:

"Ivan is absent"
а после выполнения кода:

user.presence = "+"
console.info ( user.presence )
в консоли было:

"Ivan is present"`
function homeWorkTwo() {

    function User(name) {
        this.name = name
        var presence = false
        Object.defineProperty(this, 'presense', {
            get: function () {
                return presence ? `${this.name} is present` : `${this.name} is absent`
            },
            set: function (newPresence) {
                presence = newPresence + ''
            },
            enumerable: true,
            configurable: true,

        })
    }

    let user = new User("Ivan")
    alert(user.presense)
}

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}