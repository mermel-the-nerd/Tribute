// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("spoiler");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let alreadyopen = false;

// When the user clicks on the button, open the modal
btn.onmouseover = function() {
  if(alreadyopen==false){
  modal.style.display = "block";
  alreadyopen=true;
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
