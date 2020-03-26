function generator(){
  var x = Math.floor((Math.random() * 6) + 1);
  document.getElementById('imgdiv').innerHTML =
  `<img src= "images/dice${x}.png" style = "width: 200px; height: 200px;">`;
}

function generator2(){
  var z = Math.floor((Math.random() * 6 ) + 1);
  document.getElementById('imgdiv2').innerHTML =
  ` <img src= "images/dice${z}.png" style="width: 200px; height: 200px;">`;
}
