const tags = document.querySelectorAll("#tags span.front-end");

// getting className of selected profile
const fakeIDs = "front-end";

// adding active class to selected ids
console.log(tags);
Array.from(tags).map((data) =>
  data.classList.contains(fakeIDs)
    ? data.classList.add("active")
    : data.classList.remove("active")
);
