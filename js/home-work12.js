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
        !res ? document.cookie = `lastVisit=${new Date().toLocaleString()}`
            : document.querySelector('.result1').appendChild(
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

    window.addEventListener( 'hashchange', function(e) {

        var history = {
            pageId: `${window.location.hash}`,
            startTime: `${new Date().getTime() / 1000}`
        }
        localStorage.setItem(
            "history",
            JSON.stringify(history)
        )
        document.querySelector('.result2')
            .appendChild(document.createElement('p'))
                .textContent = 'localStorage was changed from outside'
        document.querySelector('.result2')
            .appendChild(document.createElement('p'))
                .textContent = `${localStorage ["history"]}`


    })

}
function pr(){
    var message = prompt("Enter New 'hash'")
    location.hash = `#${message}`
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

    var addElem = tagName => document.querySelector('.result3').appendChild (
        document.createElement ( tagName )
    )

    var timeOut = time => new Promise (
        resolve => setTimeout ( () => resolve(), time )
    )

    document.body.style.fontFamily = `monospace, Arial`

    var startButton = addElem ( 'button' )
    startButton.innerText = 'Крутить рулетку'

    startButton.onclick = event => {
        var winnwer = Math.round ( Math.random() * 20000 )
        event.target.style.display = "none"
        var user
        function show( photoURL, login ) {
            img.src = photoURL
            user = addElem ( "h4" )
            user.innerText = `winner: ${login}`
        }
        var img = addElem( "img" )
        img.height = "200"
        img.src = "https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif"
        img.style.transition = "all 0.5s"
        timeOut ( 4000 )
            .then ( () => img.src = "https://thumbs.gfycat.com/OddWideHookersealion-small.gif" )
        timeOut ( 3500 )
            .then ( () => img.style.opacity = 0 )
        timeOut ( 4500 )
            .then ( () => img.style.opacity = 1 )
        timeOut ( 5500 )
            .then (
                () => fetch ( `https://api.github.com/users?since=${winnwer}` )
                    .then ( response => response.json()
                        .then ( users => show ( users[0].avatar_url, users[0].login ) )
                    )
            )
        timeOut ( 10000 )
            .then ( () => {
                img.remove()
                user.remove()
                event.target.style.display = "block"
            })
    }
}

