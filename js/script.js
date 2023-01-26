const inputText = document.querySelector("#text");
const myBtn = document.querySelector(".btn-list");
const list = document.querySelector(".container ul");

myBtn.addEventListener("click", (e)=>{
    if(inputText.value !=""){
        e.preventDefault();
        // Create li
        const myLi = document.createElement("li");
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        // Create Span
        const mySpan = document.createElement("span");
        mySpan.innerHTML = "x";
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll("span");
    for(let i = 0; i<close.length; i++){
        close[i].addEventListener("click", ()=>{
            close[i].parentElement.style.display ="none"
        })
        
    }
    inputText.value ="";
});