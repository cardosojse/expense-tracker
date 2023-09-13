const toggleBtn = document.querySelector(".sidebar-toggle"); 
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const wallet = document.querySelector(".my-budget");
const moreIcon = document.querySelector(".more-icon");
const moneyInput = document.querySelector("#add-money-input");
const addMoneyBtn = document.querySelector("#add-money-submit");
const closeMBarBtn = document.querySelector(".close-mbar-btn");
const moneybar = document.querySelector(".add-money-bar");

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

// display "add-money" bar
moreIcon.addEventListener("click", () => {
    if (moneybar.classList.contains("show-money-bar")){
        moneybar.classList.remove("show-money-bar")
    }else{
        moneybar.classList.add("show-money-bar")
    }
});

closeMBarBtn.addEventListener("click", () => {
    moneybar.classList.remove("show-money-bar");
});

// add money to wallet
addMoneyBtn.addEventListener("click", () => {
    if (moneyInput.value === ''){
        alert('Field is empty!')
    }else{
        let num = moneyInput.value;
        wallet.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', 
            currency: 'BRL' }).format(num);
    }
    saveData();
})

let saveData = () => {
    localStorage.setItem("data", wallet.textContent);
}
let getData = () => {
    wallet.textContent = localStorage.getItem("data");
}
getData();

//
let totalAmount = 0;
const amountInput = document.querySelector("#transaction-value");
const categorySelect = document.querySelector("#transaction-category");
const dateInput = document.querySelector("#transaction-date");
const noteInput = document.querySelector("#transaction-notes");
const addBtn = document.querySelector("#submit-input");
const totalSpent = document.querySelector(".total-spent");
const todayDate = document.querySelector(".current-date");
const expenseList = document.querySelector(".expense-list");

addBtn.addEventListener("click", () => {
    let amount = Number(amountInput.value);
    let category = categorySelect.value;
    // let date = dateInput.value;
    let notes = noteInput.value;

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
    let li = document.createElement("li");
    li.innerHTML += `<img src="">
                    <span class="spent-on">${category}</span>
                    <span class="money-spent">${amount}</span>`;
    expenseList.appendChild(li);
    totalSpent.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', 
        currency: 'BRL' }).format(totalAmount);
    sidebar.classList.remove("show-sidebar");
    amountInput.value = '';
});
