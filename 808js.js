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
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.width = '1px';
    tempDiv.style.height = 'auto';
    document.body.appendChild(tempDiv);
    const scrollHeight = tempDiv.scrollHeight + 'px';
    document.body.removeChild(tempDiv);
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--side-bar-height', scrollHeight);
    console.log(scrollHeight)
}

get_set()
