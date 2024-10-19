function sidebaropen(){
  document.getElementById("close-menu").style.display = "block";
}


function sidebarclose(){
  document.getElementById("close-menu").style.display = "none";
}

function get_set() {
  var r = document.querySelector(':root');
  var bodyH = window.innerHeight + "px";
  r.style.setProperty('--side-bar-height', bodyH);
}

get_set()

