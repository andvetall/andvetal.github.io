document.querySelector('.sidebar_top').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.list').style = `display: block; z-index: 999;` : null
})
document.querySelector('.main_article').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.list').style.display = 'none' : null
})

document.querySelector('.sidebar_top').addEventListener('mouseenter', function ( event ) {
    window.innerWidth > 769 ? document.querySelector('.list').style = `display: block; transition: all 1s;` : null
})
document.querySelector('.sidebar').addEventListener('mouseleave', function ( event ) {
    window.innerWidth > 769 ? document.querySelector('.list').style = `display: none;  transition: all 1s;` : null
})

