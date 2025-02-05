function handleHelloClick() {
            document.getElementById("headerText").innerText = "Btw, i love you"

            document.getElementById("gifImage").src = "https://media.tenor.com/dBuCk1xnXj8AAAAi/peach-and-goma-love-lift-up.gifhttps://media.tenor.com/GCpIQkZzpXwAAAAi/hbd-sayangkuuuu.gif"
            
            document.getElementById("helloButton").style.display = "none";
            
            const ilymButton = document.createElement("button");
            ilymButton.className = "btn";
            ilymButton.innerText = "ily more";
            ilymButton.id = "ilymButton";
            ilymButton.onclick = function() {
                alert("Wrong answer >.< Please try again"); 
            };
            
            const iKnowButton = document.createElement("button");
            iKnowButton.className = "btn";
            iKnowButton.innerText = "i know";
            iKnowButton.id = "iKnowButton";
     
            const buttonsContainer = document.querySelector(".buttons");
            buttonsContainer.appendChild(ilymButton);
            buttonsContainer.appendChild(iKnowButton);

            iKnowButton.onclick = handleIKnowClick;
}

function handleIKnowClick() {
    document.getElementById("headerText").innerText = "Will you be my valentine?";

    document.getElementById("gifImage").src = "https://media.tenor.com/Esi-teXJmyUAAAAi/laphie.gif"
    
    document.getElementById("ilymButton").style.display = "none";
    document.getElementById("iKnowButton").style.display = "none";

    const noButton = document.createElement("button");
    noButton.className = "btn";
    noButton.innerText = "no";
    noButton.id = "noButton";
    noButton.onclick = function() {
                alert("Wrong answer >.< Please try again"); 
            };
            
    const inButton = document.createElement("button");
    inButton.className = "btn";
    inButton.innerText = "am in";
    inButton.id = "inButton"; 

    const buttonsContainer1 = document.querySelector(".buttons");
    buttonsContainer1.appendChild(noButton);
    buttonsContainer1.appendChild(inButton);
    
    inButton.onclick = handleinClick;
}

function handleinClick() {

    document.getElementById("gifImage").src = "https://wallpaperbat.com/img/946612-customize-pink-aesthetic-wallpaper-templates-online.jpg"; 

    document.body.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJidTRsMHIwbHc3aXA2aXZ0c293dDFkczM5NXA0YjhtMDl3ZWxwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2o1eDUHEP6T1C/giphy.gif')";

    document.getElementById("headerText").innerText = "See you soon, my love !!";

    document.getElementById("gifImage").src = "https://media.tenor.com/mRwmckkscaIAAAAi/peach-goma-peach-and-goma.gif"
    
    document.getElementById("noButton").style.display = "none";
    document.getElementById("inButton").style.display = "none";
}




