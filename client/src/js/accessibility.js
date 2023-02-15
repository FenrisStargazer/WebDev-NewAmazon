function colorTheme() {
    const body = document.getElementsByTagName('body')[0];
    const intro = document.getElementById('intro-block');
    const nav = document.getElementById('nav-bar');
    const foot = document.getElementById('footer');
    body.classList.toggle("dark");
    intro.classList.toggle("dark");
    nav.classList.toggle("dark");
    footer.classList.toggle("dark");
}

function changeFontSize() {
    const elem = document.getElementById('font-range');
    const body = document.getElementsByClassName('text-resize');
    for(let i = 0; i < body.length; i++) {
        body[i].style.fontSize = `${elem.value}px`;
    }
}