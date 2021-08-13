window.addEventListener("DOMContentLoaded", (event) => {
  //validate first name
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    let nameRegex = RegExp("^[A-Z]{1}[A-z ]{2,}$");
    if (nameRegex.test(name.value)) {
      nameError.textContent = "";
    } else {
      nameError.textContent = "invalid name";
    }
  });

  //validation for phone number
  const phoneNumber = document.querySelector("#phoneNumber");
  const numberError = document.querySelector(".tel-error");
  phoneNumber.addEventListener("input", function () {
    let phoneNumberRegex = RegExp("^[0-9]{2}[ ][0-9]{10}$");
    if (phoneNumberRegex.test(phoneNumber.value)) {
      console.log(phoneNumber.value);
      numberError.textContent = "";
    } else {
      numberError.textContent = "incorrect number";
    }
  });

});
