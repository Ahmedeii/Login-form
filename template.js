let first = document.querySelector(".firstname");
let last = document.querySelector(".Lastname");
let email = document.querySelector(".emailaddress");
let password = document.querySelector(" input.password");
let form = document.querySelector("form");
let fieldfirst = document.querySelector(".field.first");
let fieldlast = document.querySelector(".field.last");
let fieldemail = document.querySelector(".field.email");
let fieldpassword = document.querySelector(".field.password");

first.addEventListener("input", () => {
  fieldfirst.classList.remove("error");
});

last.addEventListener("input", () => {
  fieldlast.classList.remove("error");
});

email.addEventListener("input", () => {
  fieldemail.classList.remove("error");
});

password.addEventListener("input", () => {
  fieldpassword.classList.remove("error");
});

form.onsubmit = (e) => {
  e.preventDefault();
  if (first.value === "") {
    fieldfirst.classList.add("error");
  } 

  if (last.value === "") {
    fieldlast.classList.add("error");
  }

  if (email.value === "") {
    fieldemail.classList.add("error");
  }

  if (password.value === "") {
    fieldpassword.classList.add("error");
  }
  if (
    !fieldfirst.classList.contains("error") &&
    !fieldlast.classList.contains("error") &&
    !fieldemail.classList.contains("error") &&
    !fieldpassword.classList.contains("error")
  ) {
    window.location.href = "#";
  }
};
