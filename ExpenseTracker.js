// Kharcha — flat expense ledger
// Layout is done. Next up: wiring flatmates, expenses, and the settle-up logic.

// let flatmates = [];
// let indx=1;


// let addFlatmate = document.querySelector("#add-btn");
// let flatMatenameinput = document.querySelector("#flatmate-name");
// addFlatmate.addEventListener("click",(e)=>{
//     e.preventDefault();

//     flatmates.push({
//      name: flatMatenameinput.value,
//      id: indx,
//     });
//     indx++;
    
//     flatMatenameinput.value = "";
    
// });
//  function renderFlatmates(){
//     for(let i=0;i<flatmates.length;i++){
//         let el1= createElement("li");
//         el1.textContent = flatmates[i].name;
        
//     }
//  }
//  let flatmateList = document.querySelector("#flatmate-list");
//  flatmateList.append(renderFlatmates());

//starts here
// ===== Kharcha — flat expense ledger =====

// ---------- Data ----------
let flatmates = [];   // [{ id, name }]
let expenses = [];    // [{ id, desc, amount, paidBy, splitBetween: [ids] }]
let nextFlatmateId = 1;
let nextExpenseId = 1;

// ---------- Element references ----------
const addFlatmateForm = document.querySelector("#add-flatmate-form");
const flatmateNameInput = document.querySelector("#flatmate-name");
const flatmateList = document.querySelector("#flatmate-list");

const addExpenseForm = document.querySelector("#add-expense-form");
const expenseDescInput = document.querySelector("#expense-desc");
const expenseAmountInput = document.querySelector("#expense-amount");
const expensePaidBySelect = document.querySelector("#expense-paidby");
const splitBetweenList = document.querySelector("#split-between-list");

const expenseListEl = document.querySelector("#expense-list");
const settleListEl = document.querySelector("#settle-list");

// ---------- Flatmates ----------
addFlatmateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = flatmateNameInput.value.trim();
  if (!name) return;

  flatmates.push({ id: nextFlatmateId, name: name });
  nextFlatmateId++;

  flatmateNameInput.value = "";
  save();
  renderFlatmates();
  renderPaidByOptions();
  renderSplitCheckboxes();
});

function removeFlatmate(id) {
  flatmates = flatmates.filter((f) => f.id !== id);
  save();
  renderFlatmates();
  renderPaidByOptions();
  renderSplitCheckboxes();
}

function renderFlatmates() {
  flatmateList.innerHTML = "";

  if (flatmates.length === 0) {
    flatmateList.innerHTML = '<li class="empty-state">No flatmates added yet.</li>';
    return;
  }

  flatmates.forEach((flatmate) => {
    const li = document.createElement("li");
    li.className = "chip";
    li.textContent = flatmate.name + " ";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.type = "button";
    removeBtn.addEventListener("click", () => removeFlatmate(flatmate.id));

    li.appendChild(removeBtn);
    flatmateList.appendChild(li);
  });
}

// ---------- Populate "paid by" dropdown ----------
function renderPaidByOptions() {
  expensePaidBySelect.innerHTML = '<option value="" disabled selected>Select flatmate</option>';
  flatmates.forEach((flatmate) => {
    const option = document.createElement("option");
    option.value = flatmate.id;
    option.textContent = flatmate.name;
    expensePaidBySelect.appendChild(option);
  });
}

// ---------- Populate "split between" checkboxes ----------
function renderSplitCheckboxes() {
  splitBetweenList.innerHTML = "";
  flatmates.forEach((flatmate) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = flatmate.id;
    checkbox.id = "split-" + flatmate.id;

    const label = document.createElement("label");
    label.htmlFor = "split-" + flatmate.id;
    label.textContent = flatmate.name;
    label.style.marginBottom = "0";

    li.appendChild(checkbox);
    li.appendChild(label);
    splitBetweenList.appendChild(li);
  });
}

// ---------- Expenses ----------
addExpenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const desc = expenseDescInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);
  const paidBy = parseInt(expensePaidBySelect.value);

  const checkedBoxes = splitBetweenList.querySelectorAll('input[type="checkbox"]:checked');
  const splitBetween = Array.from(checkedBoxes).map((cb) => parseInt(cb.value));

  if (!desc || !amount || !paidBy || splitBetween.length === 0) {
    alert("Please fill in description, amount, who paid, and who it's split between.");
    return;
  }

  expenses.push({
    id: nextExpenseId,
    desc: desc,
    amount: amount,
    paidBy: paidBy,
    splitBetween: splitBetween,
  });
  nextExpenseId++;

  addExpenseForm.reset();
  save();
  renderExpenses();
  renderSettleUp();
});

function nameOf(id) {
  const flatmate = flatmates.find((f) => f.id === id);
  return flatmate ? flatmate.name : "Unknown";
}

function renderExpenses() {
  expenseListEl.innerHTML = "";

  if (expenses.length === 0) {
    expenseListEl.innerHTML = '<li class="empty-state">No expenses added yet.</li>';
    return;
  }

  expenses.forEach((expense) => {
    const li = document.createElement("li");

    const left = document.createElement("span");
    left.textContent = expense.desc + " — paid by " + nameOf(expense.paidBy) + " (split: " + expense.splitBetween.map(nameOf).join(", ") + ")";

    const right = document.createElement("span");
    right.className = "expense-amount";
    right.textContent = "₹" + expense.amount;

    li.appendChild(left);
    li.appendChild(right);
    expenseListEl.appendChild(li);
  });
}

// ---------- Balance calculation ----------
function calculateBalances() {
  const balances = {};
  flatmates.forEach((f) => (balances[f.id] = 0));

  expenses.forEach((expense) => {
    const share = expense.amount / expense.splitBetween.length;

    balances[expense.paidBy] += expense.amount;

    expense.splitBetween.forEach((personId) => {
      balances[personId] -= share;
    });
  });

  return balances;
}

// ---------- Settlement (greedy simplification) ----------
function calculateSettlements() {
  const balances = calculateBalances();

  let people = Object.keys(balances)
    .map((id) => ({ id: parseInt(id), amount: balances[id] }))
    .filter((p) => Math.abs(p.amount) > 0.01);

  const settlements = [];

  while (people.length > 1) {
    people.sort((a, b) => a.amount - b.amount);

    const debtor = people[0];
    const creditor = people[people.length - 1];

    const settledAmount = Math.min(-debtor.amount, creditor.amount);

    settlements.push({
      from: debtor.id,
      to: creditor.id,
      amount: Math.round(settledAmount * 100) / 100,
    });

    debtor.amount += settledAmount;
    creditor.amount -= settledAmount;

    people = people.filter((p) => Math.abs(p.amount) > 0.01);
  }

  return settlements;
}

function renderSettleUp() {
  settleListEl.innerHTML = "";
  const settlements = calculateSettlements();

  if (settlements.length === 0) {
    settleListEl.innerHTML = '<li class="empty-state">Everyone is settled up.</li>';
    return;
  }

  settlements.forEach((s) => {
    const li = document.createElement("li");

    const left = document.createElement("span");
    left.textContent = nameOf(s.from) + " pays " + nameOf(s.to);

    const right = document.createElement("span");
    right.className = "amount";
    right.textContent = "₹" + s.amount;

    li.appendChild(left);
    li.appendChild(right);
    settleListEl.appendChild(li);
  });
}

// ---------- Persistence (localStorage) ----------
function save() {
  localStorage.setItem("kharcha-flatmates", JSON.stringify(flatmates));
  localStorage.setItem("kharcha-expenses", JSON.stringify(expenses));
  localStorage.setItem("kharcha-nextFlatmateId", nextFlatmateId);
  localStorage.setItem("kharcha-nextExpenseId", nextExpenseId);
}

function load() {
  const savedFlatmates = localStorage.getItem("kharcha-flatmates");
  const savedExpenses = localStorage.getItem("kharcha-expenses");
  const savedNextFlatmateId = localStorage.getItem("kharcha-nextFlatmateId");
  const savedNextExpenseId = localStorage.getItem("kharcha-nextExpenseId");

  if (savedFlatmates) flatmates = JSON.parse(savedFlatmates);
  if (savedExpenses) expenses = JSON.parse(savedExpenses);
  if (savedNextFlatmateId) nextFlatmateId = parseInt(savedNextFlatmateId);
  if (savedNextExpenseId) nextExpenseId = parseInt(savedNextExpenseId);
}

// ---------- Init ----------
load();
renderFlatmates();
renderPaidByOptions();
renderSplitCheckboxes();
renderExpenses();
renderSettleUp();

