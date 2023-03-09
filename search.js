const searchInput = document.getElementById("qiymat");
const searchBtn = document.getElementById("searchBtn");
const searchResults2=document.querySelector(".search-results2")
const searchResults = document.querySelector(".searchItems");
const url2 = `https://jsonplaceholder.typicode.com/users`;
const chiqish = document.getElementById("chiqish")
searchInput.addEventListener("input", () => {
  const search = searchInput.value.trim();
  if (search === "") {
    return;
  }
  const searchUrl = `${url2}?q=${search}`;

  fetch(searchUrl)
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
              <input type="checkbox">
            </li>
          </ul>
        `
      );
      searchResults.innerHTML = users.join("");
    })
        .catch((error) => console.error(error));
    searchResults.innerHTML = "<p>Loading...</p>";
});
searchBtn.addEventListener("click", function () {
    BlockSearch();
})
chiqish.addEventListener("click", function () {
    NoneBtn();
})
function BlockSearch() {
    searchResults2.style.display = "block";
}
function NoneBtn() {
    searchResults2.style.display = "none";
}