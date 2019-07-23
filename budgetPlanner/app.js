const reasonInput = document.getElementById('input-reason')
const amountInput = document.getElementById('input-amount')
const cancelButton = document.getElementById('btn-cancel')
const confirmButton = document.getElementById('btn-confirm')
const expensesList = document.getElementById('expenses-list')
const totalExpensesOutput = document.getElementById('total-expenses')
const alertController = document.querySelector('ion-alert-controller')

let totalExpenses = 0

// альтернативный вариант с использованием async/await
async function presentAlert() {
  await alertController.componentOnReady()

  const alert = await alertController.create({
    header: 'Invalid inputs',
    message: 'Please enter valid reason and amount!',
    buttons : ['Okay'],
  })
  return await alert.present()
}

confirmButton.addEventListener('click', () => {
  const enteredReason = reasonInput.value
  const enteredAmount = amountInput.value

  console.log(enteredReason, enteredAmount)
  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alertController
      .create({
        header: 'Invalid inputs',
        message: 'Please enter valid reason and amount!',
        buttons : ['Okay'],
      })
      .then(alertElement => {
        alertElement.present()
      })
    return
  }
  console.log(enteredReason, enteredAmount, 'valid')

  const newItem = document.createElement('ion-item')
  newItem.textContent = `${enteredReason}: $${enteredAmount}`
  expensesList.appendChild(newItem)

  totalExpenses += Number(enteredAmount)
  totalExpensesOutput.textContent = `$${totalExpenses}`
      
  //clear()
})

cancelButton.addEventListener('click', clear)

function clear() {
  reasonInput.value = ''
  amountInput.value = ''
}