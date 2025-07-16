let data = [
    {
        url: "images/slide1.jpg"
    },

    {
        url: "images/slide2.jpg"
    },
    
    {
        url: "images/slide3.jpg"
    },

    {
        url: "images/slide4.jpg"
    },

    {
        url: "images/slide5.jpg"
    },
    
    {
        url: "images/slide6.jpg"
    },

    {
        url: "images/slide7.jpg"
    },
    
    {
        url: "images/slide8.jpg"
    }

];

let i = 0

let prev = () => {
    if(i == 0){
        i = data.length - 1
    }else{
        i--;
    }
    display()
}
let next = () => {
    if(i == data.length - 1){
        i = 0;
    }else{
        i++;
    }
    display()
}

let display = () => {
    document.getElementById("slider").src = data[i].url
    
}
display()

setInterval(next,2000);
