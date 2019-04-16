// 1 (3 points)
let one = `Создайте объект, свойства которого описывают содержимое дамской сумочки

Создайте метод объекта, позволяющий удалить что-то из сумочки

Создайте метод объекта, позволяющий положить что-то в сумочку

`
function homeWorkOne() {

    var womansBag = {
        content: [
            "Passpor",
            "Lipstick",
            "Mobile",
            "Mirrow",
            "Notepad",
            "Tablet"
        ],
        addItem: function (item) {
            this.content.push(item)
        },
        deleteITEM: function (num) {
            this.content.splice(num, 1)
        }
    }
    alert(womansBag.content)
    womansBag.addItem('AddedItem')
    alert(womansBag.content)
    womansBag.deleteITEM(1)
    alert(womansBag.content)
}

//3 (5 points)
let three = `Объявите конструктор, который создает экземпляры с унаследованным методом addProperty

Метод addProperty должен принимать два аргумента:

имя свойства
значение свойства
и добавлять экземпляру новое свойство с указанным именем и значением`
function homeWorkThree() {

    function testConstructor(age, hobby) {
        this.age = age || 50
        this.hobby = hobby || "Tenis"
        this.addProperty = function (name, value) {
            this[name] = value
        }
    }

    var test = new testConstructor
    alert(testConstructor)
    test.addProperty('Masha', 'Married')
    alert(test.Masha)
}

function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
function showTask(param1, param2){
    document.querySelector(param1).innerHTML = param2
}