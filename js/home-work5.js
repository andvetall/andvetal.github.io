// 1 (3 points)
let one = `Напилить код функции modificator, такой, чтобы в результате работы кода:

function sampleFunc () {
    console.log ( '{arguments.callee.name}: {arguments[0]} | {arguments[1]}' )
}

function modificator ( func ) {
    ...
}

testFunc = modificator( sampleFunc )

testFunc()
в консоли было:

sampleFunc: test | sample`

function homeWorkOne() {

    function sampleFunc () {
        alert ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
    }
    function modificator ( func ) {
        return func.bind(null, "test", "sample")
    }
    testFunc = modificator( sampleFunc )
    testFunc()
}


// 2 (4 points)
let two = `Напилить код функции modificator, такой, чтобы в результате работы кода:

function sampleFunc () {
    console.info ( \`Symbols in my code: {arguments.callee + 0}\` )
}

function modificator ( func ) {
    ...
}

modificator( sampleFunc )

sampleFunc()
в консоль было выведено число символов в коде функции sampleFunc, т.е.:

Symbols in my code: 93`
function homeWorkTwo() {

    function sampleFunc () {
        alert ( `Symbols in my code: ${arguments.callee + 0}` )
    }
    function modificator ( func ) {
        func.valueOf = function () {
            return  func.toString().length
        }
    }
    modificator( sampleFunc )
    sampleFunc()
}


// 3 (5 points)
let three = `Напилите код функции generateError, такой, чтобы в результате работы кода:

function testArguments () {
    function generateError ( numArgs ) {
        ...
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    } 
    catch ( err ) {
        console.error ( \`{err.name}: {err.message}\\n{err.stack}\` )
    }
}

testArguments ( "Google" )
в консоли было сообщение от ошибке:

► Application: Invalid arguments
Function needs 3 arguments, but only 1 present`
function homeWorkThree() {

    function testArguments() {
        function generateError(numArgs) {
            if (arguments.length) {
                var err = new Error("Invalid arguments")
                err.name = "Application:"
                err.stack = `Function needs 3 arguments, but only ${numArgs} present`
                throw err
            }
        }

        try {
            arguments.length >= 3 ? null : generateError(arguments.length)
        } catch (err) {
            alert(`${err.name}: ${err.message}\n${err.stack}`)
        }
    }

    testArguments("Google")
}

