document.getElementById('add-money-btn').addEventListener("click",function(event){
    event.preventDefault();
    
    const pinNmuber = document.getElementById('pin-number-input').value;
    const amountInput = document.getElementById('amount-input').value;
    const accountBalance = document.getElementById('account-balance').innerText
   

    if(pinNmuber === '1234'){
      const newAI = parseFloat(amountInput);
      const newAB = parseFloat(accountBalance);
      const newBalance = newAI + newAB;
      document.getElementById('account-balance').innerText = newBalance
        


    }
    else {
      
    }
})