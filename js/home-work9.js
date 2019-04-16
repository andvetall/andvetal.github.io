let one =`Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = \`color: magenta;\`
    ...
}

typeMessage ( \`Welcome to the hell\`, 1 )`
function homeWorkOne() {
    function typeMessage(message, velocity) {
        var container = document.querySelector('.result1')
        // document.getElementById ( "demo" ) :
        // document.body.appendChild (
        //     document.createElement ( "h3" )
        // )
        // container.style = `color: magenta;`

        Array.from(message).forEach(function (leter, velocity) {
            setTimeout(
                () => container.textContent += leter, 1000 * velocity)
        })


    }

    typeMessage(`Welcome to the hell`, 1)
}
// 2 (4 points)
let two =`Напилите код методов setUserPresent, showPresent и showAbsent

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                ...
            },
            showPresent () {
                ...
            },
            showAbsent () {
                ...
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
После запуска кода результат в консоли должен быть таким:

Иван
Дмитрий
Степан
Михаил
а после выполнения кода:

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
результат в консоли должен быть таким:

Иван
Степан
Михаил`
function homeWorkTwo() {
    var users = (
        function (list) {
            var users = []
            for (var user of list)
                users.push({
                    name: user,
                    present: false
                })

            return {
                setUserPresent(userName, present) {
                    let user = users.find(
                        item => item.name === userName
                    )
                    user ? user.present = present : null
                },
                showPresent() {
                    console.log(
                        users.filter(
                            item => item.present
                        )
                    )

                },
                showAbsent() {
                    console.log(
                        users.filter(
                            item => !item.present
                        )
                    )
                }
            }
        }
    )(["Иван", "Дмитрий", "Степан", "Михаил"])
    users.setUserPresent('Иван', '+')
    users.setUserPresent('Степан', true)
}


// 3 (5 points)
let three =`Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, а затем меняет атрибуты стиля этого класса

let changeClass = ( classname, styleString ) => ( 
   ...
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = \`.{classname} {{styleString}}\`
После вызова функции:

changeClass ( "second-level-menu", "background-color: red!important;" )
в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный`
function homeWorkThree() {
    let changeClass = (classname, styleString) =>
        Array.from(document.styleSheets).filter(
            sheet => !sheet.href
        ).forEach(
            sheet =>
                Array.from(sheet.cssRules)
                    .filter(
                        rule => rule.selectorText === classname
                    ).forEach(
                    rule => rule.style[styleString.split(':')[0]] = styleString.split(':')[1]
                )
        )
    changeClass("paper-button", "opacity:0")
}


function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}