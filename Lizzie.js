var elements = document.querySelectorAll(".Poza");

elements.forEach(function(element) {
  element.addEventListener("mouseover", function(event) {
    // Modificați stilul elementului la trecerea mouse-ului peste el
    element.style.transform = "rotate(12deg)";
  });

  element.addEventListener("mouseout", function(event) {
    // Resetați stilul elementului când mouse-ul părăsește elementul
    element.style.transform = "none";
  });
});

// Obține elementul p cu clasa "paragraph"
const paragraph = document.querySelector(".block");

// Adaugă evenimentul de click la elementul p
paragraph.addEventListener("click", function(event) {
  // Utilizează proprietatea "target" pentru a obține elementul specific pe care s-a produs evenimentul
  const elementTinta = event.target;

  // Utilizează proprietatea "currentTarget" pentru a obține elementul pe care s-a atașat evenimentul (elementul p)
  const elementCurent = event.currentTarget;

  // Utilizează proprietatea "classList" pentru a adăuga sau elimina clasa "highlight" pe elementul țintă
  elementTinta.classList.toggle("highlight");

  // Utilizează proprietatea "classList" pentru a adăuga sau elimina clasa "highlight" pe elementul curent (elementul p)
  elementCurent.classList.toggle("highlight");
});