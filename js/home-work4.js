// 1 (3 points)
var womansBag = {
    content: [
        "Passpor",
        "Lipstick",
        "Mobile",
        "Mirrow",
        "Notepad",
        "Tablet"
    ],
    addItem: function ( item ) {
        this.content.push ( item )
    } ,
    deleteITEM: function ( num ) {
        this.content.splice ( num, 1 )
    }
}
console.log (womansBag)

//3 (5 points)
function testConstructor(age, hobby){
    this.age = age || 50
    this.hobby = hobby || "Tenis"
    this.addProperty = function( name, value){
        this[name] = value
    }
}
var test = new testConstructor