let select = document.querySelector("select");

fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => {
    let breedList = Object.keys(data.message);
    breedList.forEach(breed => {
      let option = document.createElement("option");
      option.setAttribute("value", breed);
      option.innerHTML = breed;
      select.append(option);
    });
  })
  .catch(err => console.log(err.message));

document.querySelector("button").addEventListener("click", () => {
  if (select.value === "") {
    alert("Please select a breed.");
    return;
  }

  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then(res => res.json())
    .then(data => {
      let img = document.createElement("img");
      img.setAttribute("src", data.message);
      img.setAttribute("height", "200px");
      img.setAttribute("width", "200px");
      document.querySelector("#dogImage").prepend(img);
    })
    .catch(err => console.log(err.message));
});
