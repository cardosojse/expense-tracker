const toggleBtn = document.querySelector(".sidebar-toggle"); 
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const wallet = document.querySelector(".my-budget");
const addMoneyBtn = document.querySelector(".add-money-btn");
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
addMoneyBtn.addEventListener("click", () => {
    if (moneybar.classList.contains("show-money-bar")){
        moneybar.classList.remove("show-money-bar")
    }else{
        moneybar.classList.add("show-money-bar")
    }
});

closeMBarBtn.addEventListener("click", () => {
    moneybar.classList.remove("show-money-bar");
});
