const sidebarcomputer = document.getElementsByClassName("computer-open-bar");
const close = document.getElementById("close-menu")

function sidebaropen() {
    document.getElementById("close-menu").style.display = "block";
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--into', 'leave');
}

function sidebarclose() {
    document.getElementById("close-menu").style.display = "none";
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--into', 'into');
}

function pseudoForEach(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
    }
}

pseudoForEach(sidebarcomputer, element => {
    element.addEventListener('mouseleave', function(event) {
        const rootElement = document.querySelector(':root');
        rootElement.style.setProperty('--into', 'leave');
    });
});

pseudoForEach(close, element => {
    element.addEventListener('click', function(event) {
        const rootElement = document.querySelector(':root');
        rootElement.style.setProperty('--into', 'into');
    });
});


function get_set() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--side-bar-height', scrollHeight + 'px');
    rootElement.style.setProperty('--side-bar-width', pageWidth + 'px');
    const pageWidth = window.innerWidth;
}

window.addEventListener('resize', () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--side-bar-height', scrollHeight + 'px');
    rootElement.style.setProperty('--side-bar-width', pageWidth + 'px');
    const pageWidth = window.innerWidth;
});


get_set()
