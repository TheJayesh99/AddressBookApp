window.addEventListener("DOMContentLoaded", (event) => {
  //validate first name
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      new Contact().name = name.value;
      nameError.textContent = "";
    } catch (error) {
      nameError.textContent = error;
    }
  });

  //validation for phone number
  const phoneNumber = document.querySelector("#phoneNumber");
  const numberError = document.querySelector(".tel-error");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      numberError.textContent = "";
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      numberError.textContent = "";
    } catch (error) {
      numberError.textContent = error;
    }
  });

  //validation for zip code
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector(".zip-error");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      zipError.textContent = "";
      return;
    }
    try {
      new Contact().zip = zip.value;
      zipError.textContent = "";
    } catch (error) {
      zipError.textContent = error;
    }
  });
});

function save() {
  try {
    let newContact = createContacts();
    createAndUpdateStorage(newContact)
    resetForm()
  } catch (error) {
    alert(error);
  }
}

function createContacts() {
  let contact = new Contact();
  contact.id = new Date().getTime()
  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name-error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel-error", error);
    throw error
  }
  contact.address = getInputValueById("#address");
  contact.city = getInputValueById("#city");
  contact.state = getInputValueById("#state");
  try {
    contact.zip = getInputValueById("#zip");
  } catch (error) {
    setTextValue(".zip-error", error);
    throw error
  }

  alert(contact.toString());
  return contact;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

function setTextValue(component, problem) {
  let textError = document.querySelector(component);
  textError.textContent = problem;
}

function resetForm() {
  setValue("#name", "");
  setValue("#phoneNumber", "");
  setValue("#address", "");
  setValue("#city", "Select City");
  setValue("#state", "Select State");
  setValue("#zip", "");
}

function setValue(id, value) {
  const element = document.querySelector(id);
  element.value = value;
}

function createAndUpdateStorage(contact) {
    let contactList = JSON.parse(localStorage.getItem("AddressBook"))
    if (contactList != undefined) {
      contactList.push(contact)
    } else {
      contactList = [contact]
    }
    alert(contactList.toString())
    localStorage.setItem("AddressBook",JSON.stringify(contactList))
  }
