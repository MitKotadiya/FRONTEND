let form = document.querySelector("form");
editindex = null

form.addEventListener("submit" , (event) => {

  event.preventDefault();
  clearError();

  let image = document.getElementById("productimage").value;
  let name = document.getElementById("productname").value;
  let description = document.getElementById("productdes").value;
  let price = document.getElementById("productprice").value;

    if (image === "") {
      document.getElementById("imageerror").innerHTML = "Plase Enter image url"
      return;
    }
    if (name === "") {
      document.getElementById("nameerror").innerHTML = "Plase Enter Product Name"
      return;
    }
    if (description === "") {
      document.getElementById("decerror").innerHTML = "Plase Enter Product description"
      return;
    }
    if (price == "" || price < 0) {
      document.getElementById("priceerror").innerHTML = "Enater Price in Positive Number"
      return;
    } else{

        let user = JSON.parse(localStorage.getItem("key")) || []

        let productobj = {
          image: image,
          name: name,
          description: description,
          price: price
        };
        
        user.push(productobj);
        localStorage.setItem("key" , JSON.stringify(user))
        form.reset();
        display()
    }
});


// CLEAR ERROR


let clearError = () => {
 let errors =  document.querySelectorAll(".error");
 errors.forEach((element) => {
  element.innerHTML = "";
 });
}


// ADD DATA


let display = () => {
  let user = JSON.parse(localStorage.getItem("key")) || [];
  let show = document.querySelector(".row");
  show.innerHTML = "";

user.forEach((item , index) => {
  let col =`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div class="shop-content me-4">
              <div class="shop-imge mb-4">
                <img src="${item.image}" alt="">
              </div>
              <div class="shop-description mb-4">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
              </div>
              <div class="shop-control d-flex justify-content-between align-items-center">
                <span>₹${item.price}</span>
                <div class="shop-btn me-3">
                  <button class="ms-2"><i class="ri-heart-line"></i></button>
                  <button class="ms-2" onClick = "addCart(${index})" ><i class="ri-shopping-bag-line"></i></button> <br>
                  <button class="ms-2 mt-2"  data-bs-toggle="modal" data-bs-target="#edit-modal" onClick = "editItem(${index})"><i class="ri-edit-line"></i></button>
                  <button class="ms-2 mt-2" onClick = "deleteItem(${index})"><i class="ri-delete-bin-line"></i></button>
                </div>
              </div>
            </div>
          </div>` ;
  show.innerHTML += col;
});
};
display();

// DELETE PRODUCT

let deleteItem = (id) => {

  let user = JSON.parse(localStorage.getItem("key")) || [];
  user.splice(id , 1);
  localStorage.setItem("key" , JSON.stringify(user));
  display();

}

// EDIT PRODUCT

let editItem = (id) => {
  let user = JSON.parse(localStorage.getItem("key")) || [];
  editvalue = user[id];
  
  let edimage = document.getElementById("edproductimage");
  let edname = document.getElementById("edproductname");
  let eddescription = document.getElementById("edproductdes"); 
  let edprice = document.getElementById("edproductprice");   

  edimage.value = editvalue.image;
  edname.value = editvalue.name;
  eddescription.value = editvalue.description;
  edprice.value = editvalue.price;
  
  editindex = id

}

  let edform = document.getElementById("edit-form");
  edform.addEventListener("submit" , (event) => {
    event.preventDefault();
    clearError()

    let user = JSON.parse(localStorage.getItem("key")) || [];
    let edimage = document.getElementById("edproductimage").value
    let edname = document.getElementById("edproductname").value
    let eddescription = document.getElementById("edproductdes").value
    let edprice = document.getElementById("edproductprice").value

    if (edimage === "") {
      document.getElementById("edimageerror").innerHTML = "Plase Enter image url"
      return;
    }
    if (edname === "") {
      document.getElementById("ednameerror").innerHTML = "Plase Enter Product Name"
      return;
    }
    if (eddescription === "") {
      document.getElementById("eddecerror").innerHTML = "Plase Enter Product description"
      return;
    }
    if (edprice == "" || edprice < 0) {
      document.getElementById("edpriceerror").innerHTML = "Enater Price in Positive Number"
      return;
    }
      user[editindex] = {
        image: edimage,
        name: edname,
        description: eddescription,
        price: edprice
    };
    localStorage.setItem("key", JSON.stringify(user));
    display();
    edform.reset();
    editindex = null;
  })

// ADD TO CART












