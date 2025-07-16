document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let search = document.getElementById("search").value;
    if (search === "") {
        alert("Enter date");
        return;
    }
    
    document.getElementById("loader").style.display = "block";

    fetch("https://api.rootnet.in/covid19-in/stats/history")
        .then(res => res.json()) 
        .then(data => { 
            let exit = true;
            data.data.forEach((element , index) => {
                if (element.day === search) {
                    document.getElementById("total").innerHTML = element.summary.total;
                    document.getElementById("confirmed").innerHTML = element.summary.confirmedCasesIndian;
                    document.getElementById("discharged").innerHTML = element.summary.discharged;
                    document.getElementById("deaths").innerHTML = element.summary.deaths;
                    document.getElementById("day").innerHTML = element.day;

                    let statecard = document.querySelector("#statecard");
                    statecard.innerHTML = "";

                    element.regional.forEach((region , index) => {
                        let card = document.createElement("div");
                        card.classList.add("state-card");

                            if (index % 3 === 0) {
                                card.setAttribute("data-aos", "fade-right");
                            } else if (index % 3 === 2) {
                                card.setAttribute("data-aos", "fade-left");
                            } else {
                                card.setAttribute("data-aos", "zoom-in");
                            }
                            
                        card.innerHTML = `
                            <h4>${region.loc}</h4>
                            <hr>
                            <p><strong>Confirmed:</strong> ${region.confirmedCasesIndian}</p>
                            <p><strong>Deaths:</strong> ${region.deaths}</p>
                            <p><strong>Discharged:</strong> ${region.discharged}</p>`;
                        
                        statecard.append(card);
                    });
                    document.getElementById("search").value = "";

                    exit = false;
                    return;
                }
            });

            if (exit) {
                alert("Plase Enter Date between 10-March-2020 to 15-December-2021");
            }
        })
        .catch(error => {
            console.log(error.message);
            alert("Something went wrong");
        })
        .finally(() => {
            document.getElementById("loader").style.display = "none";
        });
});
