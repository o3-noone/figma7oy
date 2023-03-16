function tanlangalarBlok() {
  resultCheckbox.style.display = "block";
}

function tanlanganlarNone() {
  resultCheckbox.style.display = "none";
}

const tanlash = document.querySelector("#tanlanganlar");
const chiqishDel = document.querySelector("#chiqish-del");

tanlash.addEventListener("click", function () {
  tanlangalarBlok();
});
chiqishDel.addEventListener("click", function () {
  tanlanganlarNone();
});












// chatGPT ko'di

// const selectItem = [];
// const resultCheckbox = document.querySelector(".result-checkbox");

// function ResultQosh(id) {
//   const usersss = data.find((item) => item.id === id);
//   selectItem.push(usersss);
//   chiqarItem();
// }

// const tanlash = document.querySelector("#tanlanganlar");
// const chiqishDel = document.querySelector("#chiqish-del");

// tanlash.addEventListener("click", function () {
//   tanlangalarBlok();
// });

// function tanlangalarBlok() {
//   resultCheckbox.style.display = "block";
// }

// chiqishDel.addEventListener("click", function () {
//   tanlanganlarNone();
// });

// function tanlanganlarNone() {
//   resultCheckbox.style.display = "none";
// }

// const checkboxitem = document.querySelector("#checkbox")
// checkboxitem.addEventListener("click", function () {
//     ResultQosh(id);
// })
// function chiqarItem() {
//   let korzinkaItems = "";
//   selectItem.forEach(function (item) {
//     korzinkaItems += `<ul class="json-list">
//             <li class="json-list-item">
//               <div class="json-img">
//                 <img src="./images/user_no_photo_600x600.png" alt="">
//               </div>

//               <div class="json-div">
//                 <h4>${item.email}</h4>
//                 <p>Updated 1 day ago</p>
//               </div>
//             </li>
//             <li class="json-list-item1">
//               <h4>${item.name}</h4>
//               <p>on 24.05.2019</p>
//             </li>
//             <li class="json-list-item2">
//               <h4>May 26, 2019</h4>
//               <p>6:30 PM</p>
//             </li>
//             <li class="json-list-item3">
//               <input type="checkbox">
//             </li>
//           </ul>`;
//   });
//   const selectItemDiv = document.querySelector(".select-item");
//   selectItemDiv.innerHTML = korzinkaItems;
// }
