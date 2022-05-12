// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que abre o modal
var btn = document.getElementById("myBtn");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, ele é fechado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}