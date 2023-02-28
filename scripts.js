let searchBtn = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-input");
let searchbox = document.querySelector(".searchbox");
let searchResults = document.querySelector(".search-results");
let searchList = document.querySelector(".search-list");
let cars = [
  "Bentley",
  "fiat",
  "ford",
  "gmc",
  "hummer",
  "honda",
  "jeep",
  "kia",
  "mazda",
  "nissan",
];

searchBtn.onclick = () => {
  searchInput.classList.toggle("open-input");
  searchbox.classList.toggle("open-searchbox");

  if (searchBtn.classList.contains("bx-search-alt-2")) {
    searchBtn.classList.replace("bx-search-alt-2", "bx-x");
    searchbox.classList.add("searchbox-bg");
  } else {
    searchBtn.classList.replace("bx-x", "bx-search-alt-2");
    searchbox.classList.remove("searchbox-bg");
    searchResults.classList.remove("open-search-results");
  }
};

searchInput.addEventListener("input", (e) => {
  if (e.target.value) {
    let f = cars.filter(function (i) {
      return i.startsWith(e.target.value.toLowerCase());
    });
    searchList.innerHTML = "";
    f.map((i) => {
      var li = document.createElement("li");
      li.innerHTML = i;
      searchList.appendChild(li);
    });
    if (f.length > 0) {
      if (searchResults.classList.contains("open-search-results")) {
      } else {
        searchResults.classList.add("open-search-results");

        searchbox.classList.remove("searchbox-bg");
      }
    } else {
      searchResults.classList.remove("open-search-results");
      searchbox.classList.add("searchbox-bg");
    }
  }
});

function updateValue(e) {
  log.textContent = e.target.value;
}
