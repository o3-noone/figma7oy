const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const natija=document.querySelector(".alerttt")
const loginUrl = "https://reqres.in/api/login";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => {
        console.log(data);
        window.location="asosiy.html"
    //   window.location.href = "index.html";
    })
    .catch((error) => {
        console.error(error);
         window.location.href = "index.html";
    });
});
