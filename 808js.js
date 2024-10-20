const sidebarcomputer = document.getElementsByClassName("computer-open-bar");

function sidebaropen() {
    document.getElementById("close-menu").style.display = "block";
}

function sidebarclose() {
    document.getElementById("close-menu").style.display = "none";
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--into', 'leave');
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


function get_set() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--side-bar-height', scrollHeight);
    console.log(scrollHeight);
}

window.addEventListener('resize', () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--side-bar-height', scrollHeight);
    console.log(scrollHeight);
});


get_set()
