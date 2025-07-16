let fromselect = document.getElementById("fromselect");
let toselect = document.getElementById("toselect");

let from = () => {
    return new Date().toISOString().slice(0, 10);
}
fromselect.value = from();

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let fromValue = document.getElementById("fromselect").value;
    let toValue = document.getElementById("toselect").value;

    if (toValue === "") {
        document.getElementById("errorshow").innerHTML = "Please enter a date for calculation";
    } else {
        let fromDate = new Date(fromValue);
        let toDate = new Date(toValue);
        
        if (toDate >= fromDate) {
            let day = toDate - fromDate;
            let result = day / (1000 * 60 * 60 * 24);

            document.getElementById("result").innerHTML =
                `${result} days`;
        } else {
            document.getElementById("result").innerHTML =
                `Invalid range: "To Date" must be after "From Date"`;
        }
            ` ${result} days`;
    }
});
