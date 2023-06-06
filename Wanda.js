// Așteaptă ca întregul document HTML să fie încărcat complet
document.addEventListener("DOMContentLoaded", function() {
    // Obține toate elementele cu clasa "dropdown-content"
    var elements = document.querySelectorAll(".dropdown-content");
  
    // Iterează prin fiecare element și modifică stilul
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "red";
      elements[i].style.color = "white";
      elements[i].style.padding = "10px";
    }
  
    // Selectare după tag
    var paragraf = document.getElementsByTagName("h1");
    for (var i = 0; i < paragraf.length; i++) {
      console.log(paragraf[i].textContent);
    }
    
  });

  var container = document.getElementsByClassName("block2")[1];

  function showText() {
    var newDiv = document.createElement("h1");
    newDiv.textContent = "Who's been messing up everything? It's been Agatha all along!";
  
    container.appendChild(newDiv);
  
    // Așteaptă 2 secunde
    setTimeout(function() {
      container.removeChild(newDiv);
      // Apelează recursiv funcția după 2 secunde
      setTimeout(showText, 2000);
    }, 2000);
  }
  
  // Porniți afișarea textului inițial
  showText();
  
  const textElement = document.getElementById("subtitlu");
  const newText = "You're supposed to be a myth. A being capable of spontaneous creation … This is Chaos Magic, Wanda. That makes you the Scarlet Witch";
  
  textElement.addEventListener("mouseover", function() {
    textElement.textContent = newText;
    textElement.style.backgroundColor = "rgba(150, 0, 255, 0.5)"; // Înlocuiți textul cu textul nou când se face hover
  });
  
  textElement.addEventListener("mouseout", function() {
    textElement.textContent = "You break the rules and become a hero. I do it, and become the enemy. That doesn't seem fair ";// Înlocuiți
    textElement.style.backgroundColor ="rgba(96, 0, 0, 0.43)";
  });

const inputElement = document.getElementById("myInput");
const outputElement = document.getElementById("output");

inputElement.addEventListener("keydown", function(event) {
  // Obțineți valoarea introdusă
  const inputValue = parseInt(inputElement.value);

  // Verificați dacă valoarea este mai mică, egală sau mai mare decât 5
  if (inputValue < 5) {
    outputElement.textContent = "Gresit";
  } else if (inputValue >= 5) {
    outputElement.textContent = "Corect";
  }

});
function handleClick(event) {
  const currentElement = event.currentTarget;
  console.log(currentElement);
}
