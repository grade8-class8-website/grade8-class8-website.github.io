const sidebarcomputer = document.getElementsByClassName("computer-open-bar");

function sidebaropen(){
  document.getElementById("close-menu").style.display = "block";
}


function sidebarclose(){
  document.getElementById("close-menu").style.display = "none";
}

sidebarcomputer.addEventListener('mouseleave', function(event) {
  event.target.root.style.setProperty('into', 'leave');
  var root = document.querySelector(':root');
});

function get_set(){
  var bodyheight = document.body.scrollWidth;
  root.style.setProperty('--side-bar-height', bodyheight);
  var root = document.querySelector(':root');
}

get_set()
