const wallet = document.querySelector(".wallet");
const qntInput = document.querySelector(".quantity-input");
const submitInput = document.querySelector(".submit-input");
const myList = document.querySelector(".items-list");

submitInput.addEventListener("click", ()=>{
    let li = document.createElement("li");
    li.textContent = qntInput.value;
    myList.appendChild(li);
});