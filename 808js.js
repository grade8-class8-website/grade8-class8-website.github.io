const sidebarcomputer = document.getElementsByClassName("computer-open-bar");
const rootElement = document.querySelector(':root');

function sidebaropen() {
  document.getElementById("close-menu").style.display = "block";
}

function sidebarclose() {
  document.getElementById("close-menu").style.display = "none";
  rootElement.style.setProperty('--into', 'leave');
}

sidebarcomputer.forEach(element => {
  element.addEventListener('mouseleave', function(event) {
    rootElement.style.setProperty('--into', 'leave');
  });
});

function get_set() {
  const bodyheight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  rootElement.style.setProperty('--side-bar-height', bodyheight + 'px');
}

get_set();
