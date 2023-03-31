const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Waiting for your e-mail address");
    } else if(email.validity.tooShort) {
      email.setCustomValidity("Your e-mail address is too short");
    } else {
      email.setCustomValidity("");
    }
  });