

var batman = document.getElementById("batman");
document.addEventListener("keypress",jump);
var counter=0;


function jump(){

    if(batman.classList == "animate"){
        return;
    }


    batman.classList.add("animate");
    setTimeout(function() {
        batman.classList.remove("animate");
    }, 300);
};


var joker = document.getElementById("joker");

var checkDead = setInterval(function() {
    let batmanTop = parseInt(window.getComputedStyle(batman).getPropertyValue("top"));
    let jokerLeft = parseInt(window.getComputedStyle(joker).getPropertyValue("left"));
    if(jokerLeft<20 && jokerLeft>-20 && batmanTop>=130){
        joker.style.animation = "none";
        alert("game over. score: "+Math.floor(counter/100));
        counter=0;
        joker.style.animation = "block 1s infinite linear";

    }else{
        counter++;
        document.getElementById("scoreSpan"). innerHTML = Math.floor(counter/100);
    }
}, 10);

