 let balance = 0;
document.querySelector("form").addEventListener("submit" , (event) => {

    event.preventDefault()

    clearerror()

    let incomeName = document.getElementById("income-name").value
    let incomeAmount = Number(document.getElementById("income-amount").value)
    let expenseName = document.getElementById("expense-name").value
    let expenseAmount = Number(document.getElementById("expense-amount").value)

    if(incomeAmount == "" && expenseAmount == ""){
        document.getElementById("error").innerHTML = "Please enter a budget or an expense."
        return;
    }else{
        if(incomeAmount < 0){
            document.getElementById("error").innerHTML = " Income must be a positive number"
            return
        } 
        if(expenseAmount < 0){
            document.getElementById("error").innerHTML = "Expense must be a positive number"
            return
        } 
    } 
    if (expenseAmount > balance + incomeAmount) {
        document.getElementById("error").innerHTML = "There isn't enough budget for the expanse"
        return
    }


      balance = balance + incomeAmount;
      balance = balance -  expenseAmount;


    let data = `<tr>
    <td>${incomeName || "-" }</td>
    <td>${"₹" + incomeAmount}</td>
    <td>${expenseName || "-" }</td>
    <td>${"₹" + expenseAmount}</td>
    <td>${"₹" + balance}</td>
    </tr>`

    document.getElementById("entryTable").innerHTML += data
    document.getElementById("income-name").value = "";
    document.getElementById("income-amount").value = "";
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    
});

    let clear = document.getElementsByClassName("clearerror")
    let clearerror = (clear) => {
        document.getElementById("error").innerHTML = ""
    }


