// JS variables - let, const || var

let btn = document.querySelector("button");
let heading = document.getElementById("title")

console.log(btn);

let counter = 0;

btn.addEventListener("click",() => {
    console.log("Main Amar Hu");

    heading.style.color = "black";

    counter = counter+1;

    console.log(counter);
    
})