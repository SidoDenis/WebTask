function increase(){
  let number = parseInt(document.getElementById("number").innerText);
  document.getElementById("number").innerText = (number+1).toString();
}

function decrease(){
  let number = parseInt(document.getElementById("number").innerText);
  document.getElementById("number").innerText = (number-1).toString();
}