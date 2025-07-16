document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let search = document.getElementById("search").value;
    if (search === "") {
        alert("Enter date")
    }

    fetch("https://api.rootnet.in/covid19-in/stats/history")
        .then(res => res.json()) 
        .then(data => { 
            data.data.forEach((element, index) => {
                if(element.day === search){
                document.getElementById("total").innerHTML = element.summary.total;
                document.getElementById("confirmed").innerHTML = element.summary.confirmedCasesIndian ;
                document.getElementById("discharged").innerHTML = element.summary.discharged ;
                document.getElementById("deaths").innerHTML = element.summary.deaths ;
                document.getElementById("day").innerHTML = element.day;

                let statecard = document.querySelector("#statecard");
                statecard.innerHTML = "";

                element.regional.forEach((region, index) => {

                    let card = document.createElement("div")
                    card.classList.add("state-card");

                card.innerHTML = `<h4>${region.loc}</h4>
                            <p><strong>Confirmed:</strong> ${region.confirmedCasesIndian}</p>
                            <p><strong>Deaths:</strong> ${region.deaths}</p>
                            <p><strong>Discharged:</strong> ${region.discharged}</p>`
                statecard.append(card)
                });
            }
            });
        })
        .catch(error => console.log(error.message));
});
