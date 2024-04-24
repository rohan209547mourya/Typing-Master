// console.log("The quick brown fox jumps over the lazy dog.".split(""));


const paragraph = "the quick brown fox jumps over the lazy dog.";
let paragraphElement = document.getElementById("paragraph");


let letters = paragraph.split("");


letters.forEach((letter , index) => {

    let letterSpan = document.createElement("span");
    letterSpan.classList.add("letter");
    letterSpan.innerText = letter;
    paragraphElement.appendChild(letterSpan);
}); 



let isTestStart = 0;


document.addEventListener("keydown", (event) => {
    
    if(event.key === "Enter" && isTestStart === 0){
        isTestStart = 1;
        document.querySelector("h2").style.display = "none";

        document.querySelectorAll(".letter")[0].classList.add("active-letter");
    }

    
    if(isTestStart === 2) {


        if(document.querySelector(".active-letter").nextElementSibling === null) {
            window.location.reload();
        }

        let currentLetter = document.querySelector(".active-letter");
        let typedLetter = event.key;

        if(currentLetter.textContent === typedLetter) {
            
            currentLetter.classList.add("typed");
            currentLetter.classList.remove("active-letter");
            currentLetter.nextElementSibling.classList.add("active-letter");
        }
        else {
            
            currentLetter.classList.add("wrong-typed");
            currentLetter.classList.remove("active-letter");
            currentLetter.nextElementSibling.classList.add("active-letter");
        }
    }

    if(isTestStart === 1) {
        isTestStart = 2;
    }
});