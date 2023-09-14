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