document.querySelector("button").addEventListener("click" , () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        let img = document.createElement("img")
        img.setAttribute("src" , data.message)
        img.setAttribute("height" , "200px")
        img.setAttribute("width" , "200px")
        document.querySelector("#dogImage").prepend(img);
    })
    .catch(err => console.log(err.message));
})