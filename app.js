let categoryImages = [
    {
        option: card,
        img: images/options-img/card.png,
    },
    {
        option: eletricity,
        img: images/options-img/eletricity.png,
    },
    {
        option: food,
        img: images/options-img/food.png,
    },
    {
        option: house,
        img: images/options-img/house.png,
    },
    {
        option: internet,
        img: images/options-img/internet.png,
    },
    {
        option: Pet,
        img: images/options-img/pet.png,
    },
    {
        option: Trip,
        img: images/options-img/trip.png,
    },
    {
        option: others,
        img: images/options-img/what.png, 
    }
];
const toggleBtn = document.querySelector(".sidebar-toggle"); 
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const wallet = document.querySelector(".my-budget");
const walletIcon = document.querySelector(".wallet-icon");
const moneybox = document.querySelector(".moneybox");
const closeMoneybox = document.querySelector(".close-moneybox");
const moneyInput = document.querySelector("#moneybox-input");
const moneySubmit = document.querySelector("#moneybox-submit");

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
    if (moneyInput.value === ''){
        alert('Field is empty!');
    }else{
        let num = moneyInput.value;
        // wallet.innerText = num;
        wallet.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', 
            currency: 'BRL' }).format(num);
    }
    moneyInput.value = '';
    moneybox.classList.remove("show-money-bar");
    saveData();
    console.log(wallet.innerText);
})
let saveData = () => {
    localStorage.setItem("data", wallet.innerText);
}
let getData = () => {
    wallet.innerText = localStorage.getItem("data");
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

    // let walletAmount = parseFloat(wallet.innerText);
    let amount = Number(amountInput.value);
    let category = categorySelect.value;
    // let date = dateInput.value;
    // let notes = noteInput.value;

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

    amountInput.value = '';
    sidebar.classList.remove("show-sidebar");

    totalAmount += amount;
    
    // walletAmount -= amount;
    // wallet.innerText = walletAmount;
    
    newExpense(category, amount);

    totalSpent.textContent = new Intl.NumberFormat('pt-BR', 
        { style: 'currency', currency: 'BRL' }).format(totalAmount);
    // wallet.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', 
    //     currency: 'BRL' }).format(walletAmount);
});

let newExpense = (ctg, amt) => {
    let li = document.createElement("li");
    li.innerHTML += `<img src="">
                    <span class="spent-on">${ctg}</span>
                    <span class="money-spent">${amt}</span>`;
    expenseList.appendChild(li);
}