let selectDate = document.getElementById("crdate");


 let conDate =() =>{
    
  return new Date().toISOString().slice(0, 10);

 }

selectDate.value = conDate();

document.querySelector("form").addEventListener("submit" , (event) => {
    event.preventDefault();
    clearerror();

    let number = Number(document.getElementById("number").value);

    if (number == "") {
    document.getElementById("errorshow").innerHTML = "Enter Number For Forwerd Date"
    return;
    }
    if (number < 0) {
        document.getElementById("errorshow").innerHTML = "Enter Valid Number"
        
    }else {

      let date = new Date(selectDate.value);
      date.setDate(date.getDate() + number); 

      
    let day = date.getDate().toString().padStart(2, '0');      
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let year = date.getFullYear();

    let result = `${day}-${month}-${year}`;
      document.getElementById("result").innerHTML = `Resulting Date: ${result}`;
        
    } 

})

let clearerror = () => {
    document.querySelectorAll(".error").forEach(error => {
        error.innerHTML = ""
        
    });
}