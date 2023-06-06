// Așteaptă ca întregul document HTML să fie încărcat complet
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".container");

  const styles = getComputedStyle(element);
  const position = styles.position;
  const color = styles.color;
  const display = styles.display;

  console.log(position, color, display);
    // Obține toate elementele cu clasa "dropdown-content"
    var elements = document.querySelectorAll(".dropdown-content");
  
    // Iterează prin fiecare element și modifică stilul
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "red";
      elements[i].style.color = "white";
      elements[i].style.padding = "10px";
    }
    const titles = document.getElementsByClassName("titlue");

    for (let i = 0; i < titles.length; i++) {
      console.log(titles[i].textContent);
    }
    
    const galleryElements = document.getElementsByClassName("gallery");
    const colors = ["red", "maroon", "white", "gray", "pink"];
    
    for (let i = 0; i < galleryElements.length; i++) {
      // Alegerea unei culori aleatoare din lista de culori
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
    
      // Aplicarea culorii aleatoare la proprietatea 'border-color' a elementului
      galleryElements[i].style.borderColor = randomColor;
    }
    
  
    var lista = document.getElementById('filme-lista');
    var durataTotala = 0;
    var numarFilmeBifate = 0;
    var initializare = true;
    
    if (lista) {
      lista.addEventListener('change', function(e) {
        if (!initializare) {
          durataTotala = 0;
          numarFilmeBifate = 0;
    
          var checkboxe = lista.querySelectorAll('input:checked');
          checkboxe.forEach(function(checkbox) {
            durataTotala += parseInt(checkbox.value);
            numarFilmeBifate++;
          });
    
          var durataTotalaElement = document.getElementById('durata-totala');
          durataTotalaElement.textContent = durataTotala;
    
          localStorage.setItem('durataTotala', durataTotala);
    
          var durataMedie = Math.round(durataTotala / numarFilmeBifate);
          console.log("Durata medie:", durataMedie);
          var durataTotalaStocata = localStorage.getItem('durataTotala');
          if (durataTotalaStocata) {
            var durataTotalaElement = document.getElementById('durata-totala');
            durataTotalaElement.textContent = durataTotalaStocata;
          }
          
          console.log("Durata totală stocată:", durataTotalaStocata)
        } else {
          initializare = false;
        }
      });
    }
    
   ;
  
  });    
  function getValue() {
    var checkbox = document.getElementById("myCheckbox");
    var value = checkbox.checked;
    console.log(value);
    
  }


