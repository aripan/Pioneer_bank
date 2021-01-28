//* Here mostly functions have been used wherever possible *//

// login button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit button handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  // deposit value in input field
  const depositNumber = getInputValue("depositAmount");

  // total value in deposit card
  updateSpanText("currentDeposit", depositNumber);

  // total value in balance card
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  // withdraw value in input field
  const withdrawNumber = getInputValue("withdrawAmount");

  // total value in deposit card
  updateSpanText("currentWithdraw", withdrawNumber);

  // total value in balance card
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

// function to get value of input filed
function getInputValue(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

// function to update the text inside span tag
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
