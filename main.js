const AlljsonList = document.querySelector(".all-json");
const resultCheckbox = document.querySelector(".result-checkbox");
const selectItem = [];

const url = `https://jsonplaceholder.typicode.com/users`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const users = data.map(
      (user) => `
         <ul class="json-list">
              <li class="json-list-item">
                <div class="json-img">
                  <img src="./images/user_no_photo_600x600.png" alt="">
                </div>
                <div class="json-div">
                  <h4>${user.email}</h4>
                  <p>Updated 1 day ago</p>
                </div>
              </li>
              <li class="json-list-item1">
                <h4>${user.name}</h4>
                <p>on 24.05.2019</p>
              </li>
              <li class="json-list-item2">
                <h4>May 26, 2019</h4>
                <p>6:30 PM</p>
              </li>
              <li class="json-list-item3">
                <input type="checkbox" id="checkbox-${user.id}" onchange="ResultQosh(${user.id})">
              </li>
              <li class="json-list-item4">
                <a href="#"><i class="fa-solid fa-align-center"></i></a>
              </li>
            </ul>
        `
    );
    AlljsonList.innerHTML = users.join("");
  });




