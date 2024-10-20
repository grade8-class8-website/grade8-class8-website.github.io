const sidebarcomputer = document.getElementsByClassName("computer-open-bar");

function sidebaropen(){
  document.getElementById("close-menu").style.display = "block";
}


function sidebarclose(){
  document.getElementById("close-menu").style.display = "none";
  event.target.r.style.setProperty('--into', 'leave');
  var r = document.querySelector(':root');
}

sidebarcomputer.addEventListener('mouseleave', function(event) {
  event.target.r.style.setProperty('--into', 'leave');
  var r = document.querySelector(':root');
});

function get_set(){
  var bodyheight = document.body.scrollWidth;
  r.style.setProperty('--side-bar-height', bodyheight);
  var r = document.querySelector(':root');
}

get_set()
