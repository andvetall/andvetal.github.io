document.querySelector('.sidebar_top').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.list').style =
        `
        display: block;
        ` : null
})
document.querySelector('.main_article').addEventListener('click', function ( event ) {
    window.innerWidth < 769 ? document.querySelector('.list').style.display = 'none' : null
})


