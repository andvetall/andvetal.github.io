//1

let one = `pure JS

Создайте элемент 'p', при клике на котором появляется картинка размером 100px

При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px

При клике на картинке она должна исчезать`
function homeWorkOne() {


    var parag = document.querySelector('.result1').appendChild(document.createElement('p'))
    parag.innerText = "Click Me!"
    parag.style = `color: black;`
    var image = document.createElement('img')
    image.src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
    image.style = `height: 100px;`
    parag.onclick = function (event) {
        event.target ? document.querySelector('.result1').appendChild(image) : null
    }
    image.addEventListener('mouseenter', function (event) {
        event.target ? image.style = `height: 200px; transition: all 2s;` : null
    })
    image.addEventListener('mouseleave', function (event) {
        event.target ? image.style = `height: 100px; transition: all 2s;` : null
    })
    image.addEventListener('click', function (event) {
        event.target ? image.remove() : null
    })
}
// 2
let two = `Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout

var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель

Установите значение #ff00ff50 атрибута background-color каждому элементу

Установите значение dotted 1px yellow; атрибута border каждому элементу

При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050

При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение

При наступлении события click элемент должен быть удален

При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" )`
function homeWorkTwo() {
    var elemData = {
        name: "div",
        attrs: {
            className: "container",
            title: ["first", "second", "third", "fourth"],
            style: `
           border: dotted 1px yellow;
           background-color: #ff00ff50;
       `
        }
    }


    function over(event) {
        event.target.style.backgroundColor = "#ffff0050"
    }

    function out(event) {
        event.target.style.backgroundColor = "#ff00ff50"
    }

    function clickHandler(event) {
        event.target.remove()
    }

    function insert(elemNum, parentElem) {
        var elem = parentElem.appendChild(document.createElement(elemData.name))
        for (var attr in elemData.attrs)
            elem[attr] = elemData.attrs[attr]
        elem.title = elemData.attrs.title[elemNum]
        elem.style.width = `${200 - elemNum * 25}px`
        elem.style.height = `${200 - elemNum * 25}px`

        elem.addEventListener('click', clickHandler)
        elem.addEventListener('mouseover', over)
        elem.addEventListener('mouseout', out)
        return elem
    }

    var collection = []
    collection [0] = insert(0, document.querySelector('.result2'))
    for (var x = 1; x < 4; x++) {
        collection[x] = insert(x, collection[x - 1])
    }
}

//3
let three = `Условия предыдущего задания изменить так:

var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
 при удалении элемента его потомки должны оставаться`
function homeWorkThree() {
    var elemData = {
        name: "div",
        attrs: {
            className: "container",
            title: [1, 2, 3, 4, 5, 6, 7],
            style: `
           border: dotted 1px yellow;
           background-color: #ff00ff50;
       `
        }
    }

    function enter(event) {
        event.target.style.backgroundColor = "#ffff0050"
    }

    function leave(event) {
        event.target.style.backgroundColor = "#ff00ff50"
    }

    function clickHandler(event) {
        event.target.children.length ?
            event.target.parentNode.appendChild(event.target.children[0]) : null
        event.target.remove()
    }

    function insert(elemNum, parentElem) {
        var elem = parentElem.appendChild(document.createElement(elemData.name))
        for (var attr in elemData.attrs)
            elem[attr] = elemData.attrs[attr]
        elem.title = elemData.attrs.title[elemNum]
        elem.style.width = `${200 - elemNum * 25}px`
        elem.style.height = `${200 - elemNum * 25}px`

        elem.addEventListener('click', clickHandler)
        elem.addEventListener('mouseenter', enter)
        elem.addEventListener('mouseleave', leave)
        return elem
    }

    var collection = []
    collection [0] = insert(0, document.querySelector('.result3'))
    for (var x = 1; x < elemData.attrs.title.length; x++) {
        collection[x] = insert(x, collection[x - 1])
    }
}

