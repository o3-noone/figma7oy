const login = document.querySelector("#login-form");
const users = document.querySelector("#email");
const pass = document.querySelector("#password");
const natija = document.querySelector(".alerttt");
import ArryUser from "./malumot.js";
login.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = users.value;
  const password = pass.value;
  const user = ArryUser.find((user) => user.username === username);
  if (user && user.password === password) {
    window.location.href = "./asosiy.html";
  } else {
    natija.innerHTML = "<p>Bunday foydalanuvhi topilmadi</p>";
  }
});