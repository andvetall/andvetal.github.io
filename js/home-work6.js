

// 1
function func1 () {
    var tags = ["header", "div", "div", "p", "footer"]
    var classes = ["top", "logo", "container", "parag", "bottom"]

    var style = document.head.appendChild(document.createElement('style'))
    style.innerHTML =
        `
.top{ width 100%; height: 100px; background-color: green; }
.logo{ width 100%; height: 100px; background-color: red; }
.container{ width 100%; height: 100px; background-color: blue; }
.parag{ width 100%; height: 100px; background-color: orange; }
.bottom{ width 100%; height: 100px; background-color: gray; }
`

    for (var tag in tags) {
        document.querySelector('.result1').appendChild(document.createElement(`${tags[tag]}`))
            .setAttribute('class', `${classes[tag]}`)
    }
    }



    // 2
function func2 () {
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
                src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
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

        event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
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
function func3 () {
    var style = document.head.appendChild(document.createElement('style'))

    style.textContent = `
    .redBack {
        background-color: red!important;
    } `
    for (var elem of document.body.children) {
        elem.tagName === "SCRIPT" ? null :
            elem.className = "redBack"
    }
}