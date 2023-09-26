const images = {
    Card: 'images/options-img/card.png',
    Eletricity: 'images/options-img/eletricity.png',
    Food: 'images/options-img/food.png',
    House: 'images/options-img/house.png',
    Internet: 'images/options-img/internet.png',
    Pet: 'images/options-img/pet.png',
    Pharmacy: 'images/options-img/pharmacy.png',
    Shopping: 'images/options-img/shopping.png',
    Travel: 'images/options-img/trip.png',
    Others: 'images/options-img/what.png', 
}

const toggleBtn = document.querySelector(".sidebar-toggle"); 
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const wallet = document.querySelector(".my-budget");
const walletIcon = document.querySelector(".wallet-icon");
const moneybox = document.querySelector(".moneybox");
const closeMoneybox = document.querySelector(".close-moneybox");
const moneyInput = document.querySelector("#moneybox-input");
const moneySubmit = document.querySelector("#moneybox-submit");
const optionImg = document.querySelector(".option-img");
const transactionCategory = document.querySelector("#transaction-category");

// display sidebar
toggleBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }else{
        sidebar.classList.add("show-sidebar");
    }
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

// Change default image of select element 
transactionCategory.addEventListener("click", ()=>{
    let category = categorySelect.value;
    optionImg.src = images[category];
});

transactionCategory.addEventListener("touchstart", () => {
    let category = categorySelect.value;
    optionImg.src = images[category];
})

// display moneybox
walletIcon.addEventListener("click", () => {
    if (moneybox.classList.contains("show-money-bar")){
        moneybox.classList.remove("show-money-bar")
    }else{
        moneybox.classList.add("show-money-bar")
    }
});

closeMoneybox.addEventListener("click", () => {
    moneybox.classList.remove("show-money-bar");
});

// add money to wallet
moneySubmit.addEventListener("click", () => {
    let transactionValue = Number(moneyInput.value);
    if (isNaN(transactionValue) || transactionValue <= 0){
        alert('Enter a valid amount!');
        return
    }
    walletAmount(transactionValue);
    moneyInput.value = '';
    moneybox.classList.remove("show-money-bar");
    saveData();
});

let totalAmount = 0;
const amountInput = document.querySelector("#transaction-value");
const categorySelect = document.querySelector("#transaction-category");
const dateInput = document.querySelector("#transaction-date");
const noteInput = document.querySelector("#transaction-notes");
const addBtn = document.querySelector("#submit-input");
const expenseList = document.querySelector(".expense-list");
const totalSpent = document.querySelector(".total-spent");
const currentDate = document.querySelector(".current-date");
const today = document.querySelector(".today");
const month = document.querySelector(".month");

window.addEventListener("DOMContentLoaded", () => {
    today.classList.add("active");
    let todayDate = new Date();
    currentDate.innerText = new Intl.DateTimeFormat("pt-BR", {
        day:'2-digit', month:'2-digit'
    }).format(todayDate);
})

today.addEventListener("click", () => {
    month.classList.remove("active");
    today.classList.add("active");
});

month.addEventListener("click", () => {
    today.classList.remove("active");
    month.classList.add("active");
});

// let checkDate = (date) => {
//     let d = new Date();
//     date = new Intl.DateTimeFormat("pt-BR", {day:'2-digit', month:'2-digit'}).format(d);
//     if (date != dateInput.value)
// }

// add transaction
addBtn.addEventListener("click", () => {
    let amount = Number(amountInput.value);
    let category = categorySelect.value;
    let totalValue = Number(totalSpent.innerText);

    let date = dateInput.value;

    if (category === ''){
        alert('Select a category!');
        return;
    }
    if (isNaN(amount) || amount <= 0){
        alert('Enter a valid amount!');
        return;
    }
    // if (date === ''){
    //     alert('Select a date!');
    //     return;
    // }
    totalAmount += amount;
    totalAmount += totalValue;
    totalSpent.innerText = totalAmount;

    console.log(date)
    // currentDate.innerText = new Intl.DateTimeFormat("pt-BR", 
    //     {day:'2-digit', month:'2-digit'}).format();
    
    newExpense(images[category], category, amount);
    walletAmount(amount);
    amountInput.value = '';
    sidebar.classList.remove("show-sidebar");
    saveData();
});



let newExpense = (img, ctg, amt) => { 
    let li = document.createElement("li");
    li.innerHTML += `<img src="${img}">
                    <span class="spent-on">${ctg}</span>
                    <span class="money-spent">${amt}</span>`;
    expenseList.appendChild(li);
}

let walletAmount = (num) => {
    let walletAmount = Number(wallet.innerText);
    if (moneyInput.value === ''){
        walletAmount -= num;
    }
    else if(amountInput.value === ''){
        walletAmount += num;
    }
    wallet.innerText = Math.round(walletAmount);
}

let saveData = () => {
    localStorage.setItem("wallet-data", wallet.innerText);
    localStorage.setItem("expense-list", expenseList.innerHTML);
    localStorage.setItem("total-amount", totalSpent.innerText)
}
let getData = () => {
    wallet.innerText = localStorage.getItem("wallet-data");
    expenseList.innerHTML = localStorage.getItem("expense-list");
    totalSpent.innerText = localStorage.getItem("total-amount");
}
// localStorage.removeItem("total-amount");
// localStorage.removeItem("expense-list");
getData();