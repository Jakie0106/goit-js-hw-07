const formRegister = document.querySelector("form.login-form");

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const login = form.elements.email.value.trim();

  const password = form.elements.password.value.trim();

  const inputData = {};
  //===============================
  if (login === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  inputData.email = login;
  inputData.password = password;
  console.log(inputData);
  form.reset();
});
