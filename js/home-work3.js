//1 (3 points)
let one = `Объявите функцию без формальных параметров, которая выводит в консоль сама себя и все переданные ей аргументы

Вызовите эту функцию с аргументами 10, false, "google"`
function homeWorkOne () {
    for(var arg of homeWorkOne.arguments)
        alert ( arg )
}




//2 (4 points)
let two = 'Объявите функцию userInfo, которая выводит в консоль:\n' +
    '\n' +
    'свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true\n' +
    'сообщение "Незарегистрированный пользователь: " + свойство name в противном случае\n' +
    '( используйте переменные в литералах )\n' +
    '\n' +
    'Создайте два объекта с одинаковым набором свойств:\n' +
    '\n' +
    'name ( строка )\n' +
    'registered ( логическое значение )\n' +
    'data ( дата в формате "дд.мм.гг" )\n' +
    'Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo\n' +
    '\n' +
    'Вызовите каждый метод'
function homeWorkTwo() {
    var user1 = {
        name: "Vasya",
        registered: true,
        data: new Date(1991, 3, 15),
        getInfo: userInfo
    }
    var user2 = {
        name: "Petya",
        registered: false,
        data: new Date(),
        getInfo: userInfo
    }
    function userInfo() {
        this.registered == true ?
            alert(`Дата регистрации: ${this.data}`)
            : alert(`Незарегистрированный пользователь: ${this.name}`)
    }
    user1.getInfo()
    user2.getInfo()
}


//3 (5 points)
let three = 'Есть три объекта: users, posts и comments\n' +
    'Написать код функции getPostComments ( postId ),\n' +
    'которая возвращает массив всех комментариев к посту\n' +
    'с идентификатором postId\n' +
    '( с именем автора комментария и текстом комментария )'
function homeWorkThree() {


    var users = {
        14587: {
            name: "Ivan",
            email: "ivan78@gmail.com"
        },
        28419: {
            name: "Georg",
            email: "georg.klep@gmail.com"
        },
        41457: {
            name: "Stephan",
            email: "stephan.borg@gmail.com"
        }
    }
    var posts = {
        7891451: {
            author: 14587,
            text: "Imagine we can encapsulate these secondary responsibilities in functions"
        },
        7891452: {
            author: 28419,
            text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор.
                        Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора.
                        Ключевое слово super также может быть использовано для вызова функций родительского объекта`
        },
        7891453: {
            author: 28419,
            text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое.
                        Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
        },
        7891454: {
            author: 14587,
            text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
        }
    }
    var comments = {
        91078454: {
            postId: 7891451,
            author: 28419,
            text: `The static String.fromCharCode() method returns a string created
                        from the specified sequence of UTF-16 code units`
        },
        91078455: {
            postId: 7891451,
            author: 41457,
            text: `HTML элемент 'template' — это механизм для отложенного рендера клиентского контента,
                        который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
        },
        91078457: {
            postId: 7891452,
            author: 41457,
            text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
        },
        91078458: {
            postId: 7891452,
            author: 14587,
            text: `The Element.namespaceURI read-only property returns the namespace URI of the element,
                        or null if the element is not in a namespace`
        }
    }


    function getCurrentPostComments(postId) {
        var res = []
        for (var comment in comments) {
            (comments[comment].postId === postId) ? res.push({
                author: users[comments[comment].author].name,
                comments: comments[comment].text
            }) : null

        }
        return res
    }

    function alertComments() {
        for (var post of getCurrentPostComments(7891451)) {
            for (var comment in post)
                alert(post[comment])
        }
    }
    alertComments()
}

