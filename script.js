var userInput = document.getElementById("userInput");
var emailError = document.getElementById("emailError");

function validateInput() {
  if (!userInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,3}$/)) {
    emailError.innerHTML = "Please enter a valid email";
    emailError.style.color = "var(--Light-Red)";
    return false;
  } else {
    emailError.innerHTML = "";
    emailError.style.color = "";
    return true;
  }
}
