function sidebaropen(){
  document.getElementById("close-menu").style.display = "block";
}


function sidebarclose(){
  document.getElementById("close-menu").style.display = "none";
}


function get_set(){
  var bodyheight = document.body.scrollWidth;
  root.style.setProperty('--side-bar-height', bodyheight);
  var root = document.querySelector(':root');
}

get_set()
