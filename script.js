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
  // value in input field
  // const depositAmount = document.getElementById("depositAmount").value;
  // const depositNumber = parseFloat(depositAmount);

  //! using function instead
  const depositNumber = getInputValue("depositAmount");

  // // value in  deposit card
  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);

  // // total value in deposit card
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit;

  // // value in balance card
  // const currentBalance = document.getElementById("currentBalance").innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);

  // // total value in balance card
  // const totalBalance = depositNumber + currentBalanceNumber;
  // document.getElementById("currentBalance").innerText = totalBalance;

  //! whole work we did in above code can be done using updateSpanText function as well

  // total value in deposit card
  updateSpanText("currentDeposit", depositNumber);

  // total value in balance card
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  // const withdrawAmount= document.getElementById("withdrawAmount").value;
  // const withdrawNumber= parseFloat(withdrawAmount);
  //! using function instead
  const withdrawNumber = getInputValue("withdrawAmount");

  // total value in deposit card
  updateSpanText("currentWithdraw", withdrawNumber);

  // total value in balance card
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputValue(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
