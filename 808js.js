
function sidebaropen() {
    document.getElementById("close-menu").style.display = "block";
}
function sidebarclose() {
    document.getElementById("close-menu").style.display = "none";
}




function get_set() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    const pageWidth = window.innerWidth;
    rootElement.style.setProperty('--side-bar-height', scrollHeight + 'px');
    rootElement.style.setProperty('--side-bar-width', pageWidth + 'px');
}

window.addEventListener('resize', () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const bodyScrollHeight = document.body.scrollHeight;
    const htmlScrollHeight = document.documentElement.scrollHeight;
    const scrollHeight = Math.max(bodyScrollHeight, htmlScrollHeight);
    const rootElement = document.querySelector(':root');
    const pageWidth = window.innerWidth;
    rootElement.style.setProperty('--side-bar-height', scrollHeight + 'px');
    rootElement.style.setProperty('--side-bar-width', pageWidth + 'px');
});


get_set()
