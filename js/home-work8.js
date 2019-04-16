let one = `Напилите код, выводящий на страницу текущее время в течение 100 секунд

Подсказка: создайте элемент, в котором будет отображаться текущее время

Контент элемента должен обновляться каждую секунду`
function homeWorkOne() {
    var clock = document.querySelector('.result1').appendChild(
        document.createElement('h3')
    )
    clock.style = `color: white;
                    margin-top: 40px;`


    for (var x = 0; x < 100; x++) {
        (function (arg) {
            return function () {
                setTimeout(
                    () => clock.innerText = new Date()
                        .toLocaleString().split(', ')[1],
                    1000 * arg
                )
            }
        })(x)()
    }
}



let two = `Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = \`color: magenta;\`
    var index = 0
    return function ( message ) {
        ...
    }
})( 1 )

typeMessage ( \`Welcome to the hell\` )`
function homeWorkTwo() {
    var typeMessage = ( function ( velocity ) {
        let container = document.querySelector('.result2')
        var index = 0
        return function ( message ) {
            var num = index
            setTimeout(
                () => container.textContent += message[num]
                ,1000 * velocity * num)
            index++ < message.length -1 ? typeMessage(message) : null
        }
    })( 1 )

    typeMessage ( `Welcome to the hell` )
}


let three = `Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, был унаследованный метод counter(), который считает созданные конструктором экземпляры

Каждый вызов конструктора увеличивает счетчик экземпляров на 1 и помещать новое значение счетчика в свойство id созданного экземпляра:

function User ( name ) {
    this.name = name
    this.id = this.counter()
}

...

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
После выполнения кода:

users[1].id = users[1].counter()
свойство id экземпляра не должно измениться, так же, как и значение счетчика`
function homeWorkThree() {
    function User(name) {
        this.name = name,
            this.id = this.counter()
    }

    User.prototype.counter = (function () {
        var id = 0
        return function () {
            return typeof this.id === 'number' ? id : id++
        }
    })()

    var users = [
        new User("Семен"),
        new User("Антон"),
        new User("Демьян"),
        new User("Василий")
    ]
    alert(`${users[0].name} - id ${users[0].id}`)
    alert(`${users[1].name} - id ${users[1].id}`)
    alert(`${users[2].name} - id ${users[2].id}`)
    alert(`${users[3].name} - id ${users[3].id}`)
}

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}