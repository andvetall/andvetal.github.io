function func1() {


    var clock = document.querySelector('.result1').appendChild(
        document.createElement('h3')
    )
    clock.style = `color: gray;`


    for (var x = 0; x < 100; x++) {
        (function (arg) {
            return function () {
                setTimeout(
                    () => clock.innerText = new Date().toLocaleString().split(', ')[1],
                    1000 * arg
                )
            }
        })(x)()
    }
}

function func2() {
    var typeMessage = ( function ( velocity ) {
        let container = document.querySelector('.result2')
            // document.getElementById ( "demo" ) :
            // document.body.appendChild (
            //     document.createElement ( "h3" )
            // )
        // container.style = `color: magenta;`
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




    function User ( name ) {
        this.name = name,
            this.id = this.counter()
    }

    User.prototype.counter = (function(){
        var id = 0
        return function(){
            return typeof this.id === 'number' ? id : id++
        }
    })()

    var users = [
        new User ( "Семен" ),
        new User ( "Антон" ),
        new User ( "Демьян" ),
        new User ( "Василий" )
    ]
