// 1(3 points)
let one = `Захостить на гитхабе приложение, которое:

читает куки на клиенте, и если там есть дата последнего посещения, выводит ее на страницу
пишет в куки на клиенте текущую дату посещения`
function homeWorkOne() {

    function addToCookie(){
        var res = document.cookie
            .split ( "; " )
            .map ( x =>
                Object.assign (
                    {},
                    (
                        arr => {
                            return { [ arr [0] ] : arr [1] }
                        }
                    ) ( x.split ( "=" ))
                )
            )
            .find(
                date => {
                    return date.lastVisit
                }
            )
        !res.lastVisit ? document.cookie = `lastVisit=${new Date().toLocaleString()}`
            : document.body.appendChild(
            document.createElement('p')).innerText = `Last visit was : ${res.lastVisit}`

    }
    addToCookie()
}

// 2(4 points)
let two =`localStorage
Объявить функцию, которая будет вызываться в момент изменения хэш-части адреса страницы

и сохранять в localStorage клиента hash-часть адреса страницы как pageId

и время входа ( в секундах ) как startTime

Назначить эту функцию обработчиком события hashchange объекта window

Желательно, чтобы при изменении хеш-части адреса происходило обновление контента страницы без перезагрузки

( например, изменялся заголовок и картинка, чтобы создать иллюзию перехода на новую страницу )

Отслеживать в панели разработчика изменения в localStorage

После загрузки страницы меняйте хеш-часть адреса на 0, 1, 2, 3

и наблюдайте изменения на странице и в localStorage`
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
let three = `Рулетка
Напилить код, который:

вставляет кнопку на страницу
добавляет обработчика события click кнопки
Обработчик события click:

вычисляет случайное целое число от 1 до 20000 и помещает его в переменную winner
добавляет :point_right: картинку
ждет 4 секунды
плавно изменяет непрозрачность картинки до 0, в процессе изменяя src картинки на :point_right: новое значение
плавно изменяет непрозрачность картинки до 1
ждет еще 2 секунды, и делает fetch-запрос на гитхабовский API, чтобы получить данные юзера под номером winner
при получении ответа изменяет src картинки на аватарку юзера, а так же вставляет логин юзера под фотографией
ждет еще 10 секунд и удаляет картинку и подпись
На время показа картинок кнопку лучше прятать`
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

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}