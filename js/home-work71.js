//1


function func1() {


    var parag = document.querySelector('.result1').appendChild(document.createElement('p'))
    parag.innerText = "Click Me!"
    parag.style = `color: black;`
    var image = document.createElement('img')
    image.src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
    image.style = `height: 100px; width: 100px;`
    parag.onclick = function (event) {
        event.target ? document.querySelector('.result1').appendChild(image) : null
    }
    image.addEventListener('mouseover', function (event) {
        event.target ? image.style = `height: 200px; transition: all 2s;` : null
    })
    image.addEventListener('mouseout', function (event) {
        event.target ? image.style = `height: 100px; transition: all 2s;` : null
    })
    image.addEventListener('click', function (event) {
        event.target ? image.remove() : null
    })

// 2
}
function func2() {
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
function func3() {
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