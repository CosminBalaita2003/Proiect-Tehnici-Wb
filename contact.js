document.getElementById("myForm").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var nameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneNumberRegex = /^\d{10}$/;

  if (!nameRegex.test(name)) {
    showError("Numele este invalid.");
    event.preventDefault();
    return;
  }

  if (!emailRegex.test(email)) {
    showError("Adresa de email este invalidă.");
    event.preventDefault();
    return;
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    showError("Numărul de telefon trebuie să conțină exact 10 cifre.");
    event.preventDefault();
    return;
  }

  // Validare reușită - afișare mesaj de succes
  showSuccess("Formularul a fost trimis cu succes!");

  // Ascunde formularul și afișează imaginea
  document.getElementById("myForm").style.display = "none";
  document.getElementById("success").style.display = "block";

  event.preventDefault();
});

function showError(errorMessage) {
  var errorElement = document.getElementById("error");
  errorElement.innerHTML = errorMessage;
  errorElement.style.display = "block";
}

function showSuccess(successMessage) {
  var successElement = document.getElementById("success");
  successElement.innerHTML = successMessage;
  successElement.style.display = "block";

}
