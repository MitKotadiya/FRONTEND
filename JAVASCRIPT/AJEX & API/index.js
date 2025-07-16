// Ajex

// document.querySelector("button").addEventListener("click", () => {

//     let xhr = new XMLHttpRequest();

//     xhr.open("GET" , "data.text");

//     xhr.onload = function () {
//        document.getElementById("datatag").innerHTML = xhr.responseText
//     }
//     xhr.send()
// })

// document.querySelector("button").addEventListener("click" , () => {

//     let xhr = new XMLHttpRequest();

//     xhr.open("GET" , "https://jsonplaceholder.typicode.com/todos/");

//     xhr.onload = function () {
//         data = JSON.parse(xhr.responseText);
//         data.forEach(element => {
//         let li = document.createElement("li")
//         li.innerHTML = element.title
//         document.getElementById("datatag").append(li)
//         });
        
//     }
//     xhr.send()
// })


// fetch 

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(element => {
//       let li = document.createElement("li");
//       li.innerHTML = element.title;
//       document.getElementById("datatag").append(li);
//     });
//   })
//   .catch(err => console.log("Error", err));

fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = data.message;
    img.alt = "Random Dog";
    img.style.width = "200px";

    li.appendChild(img);
    document.getElementById("datatag").appendChild(li);
  })
  .catch(err => console.log("Error", err));

