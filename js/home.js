
// step -1====
const addMoneyBtn = document.getElementById('add-money-btn').addEventListener("click",function(event){
   event.preventDefault()
   
const pinNumberInput =document.getElementById('pin-number-input').value
const amountInput = document.getElementById('amount-input').value



if(pinNumberInput === '123'){

const accountBalance = document.getElementById('account-balance').innerText 
  const amountMakeInt = parseFloat(amountInput)
  const accountAmountInt = parseFloat(accountBalance)
  const newBalance= amountMakeInt + accountAmountInt
  console.log(newBalance)
  
 document.getElementById('account-balance').innerText = newBalance


}
else{
    alert('somethin was wrong bro !')
}

   
})