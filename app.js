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