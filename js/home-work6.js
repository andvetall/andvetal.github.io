// 1
let one = `Создайте массив tags с именами валидных тегов HTML5

Теперь создайте массив classes с именами классов

( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )

Создайте элемент style и вставьте его в head документа

Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes

Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes`
function homeWorkOne () {
    var tags = ["header", "div", "div", "p", "footer"]
    var classes = ["top", "logo", "container", "parag", "bottom"]

    var style = document.head.appendChild(
        document.createElement('style'))
    style.innerHTML =
        `
.top{ width 100%; height: 100px; background-color: green; }
.logo{ width 100%; height: 100px; background-color: red; }
.container{ width 100%; height: 100px; background-color: blue; }
.parag{ width 100%; height: 100px; background-color: orange; }
.bottom{ width 100%; height: 100px; background-color: gray; }
`

    for (var tag in tags) {
        document.querySelector('.result1').appendChild(
            document.createElement(`${tags[tag]}`))
            .setAttribute('class', `${classes[tag]}`)
    }
    }



    // 2
let two = `Результат должен быть аналогичен тому, что получится в предыдущем упражнении

Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, но и его атрибуты, а так же хотя бы один обработчик события

Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, используя как атрибуты тегов, так и свойства элементов DOM`
function homeWorkTwo() {
    var tags = [
        {
            name: 'header',
            attrs: {
                className: 'header',
                innerText: 'Hello World',
            }
        },
        {
            name: 'section',
            attrs: {
                className: 'section',
                innerText: 'Good Morning',
            }
        },
        {
            name: 'div',
            attrs: {
                className: 'div',
                innerText: 'Good afternoon',
                title: 'Title'
            }

        },
        {
            name: 'img',
            attrs: {
                src: 'http://www.primusdatabase.com/images/a/a0/Collideratom.png',
                title: 'Title'
            }
        },
        {
            name: 'p',
            attrs: {
                className: 'paragraph',
                innerText: '***',
            }
        },
        {
            name: 'footer',
            attrs: {
                className: 'footer',
                innerText: 'Omfg!'
            }

        }
    ]

    var style = document.head.appendChild(
        document.createElement('style')
    )
    style.textContent = `
  .footer,.paragraph,.div,.section,.header {
    height: 100px;
        width: 100%;
    
  }
  img{
    width: 200px;
  }
  .footer {
        background-color: gray;
  }
  .paragraph {
        background-color: yellow;
     
  }
  .div {
        background-color: purple;
     
  }
  .section {
        background-color: green;
     
  }
  .header {
        background-color: orange;
     
  }
`

    function clickHandler(event) {
        function randomColor() {
            return Math.round(Math.random() * 255)
        }

        event.target.style.color =
            `rgb(${randomColor()},${randomColor()},${randomColor()})`
    }

    for (var tag of tags) {
        var elem = document.querySelector('.result2').appendChild(
            document.createElement(`${tag.name}`)
        )
        for (var attr in tag.attrs)
            elem[attr] = tag.attrs[attr]
        elem.onclick = function (event) {
            clickHandler(event)
        }
    }
}

// 3
let three = `Напилить код, который выбирает все элементы-потомки body ( :warning: кроме элементов script ) и добавляет им класc:

.redBack {
    background-color: red!important;
}
Альтернативный вариант - выбрать все заранее заданные элементы:

var tags = [ "header", "footer", "main", "div", "p" ]
Запустить код в консоли любой страницы

Подсказка: используйте методы объекта classList

`
function homeWorkThree() {
    var style = document.head.appendChild(
        document.createElement('style'))

    style.textContent = `
    .redBack {
        background-color: red!important;
    } `
    for (var elem of document.body.children) {
        elem.tagName === "SCRIPT" ? null :
            elem.className = "redBack"
    }
}

