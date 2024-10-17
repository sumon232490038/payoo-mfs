document.getElementById('cash-out-btn').addEventListener("click",function(event){
    event.preventDefault();
    
    const pinNmuber = document.getElementById('pin-number-input-2').value;
    const amountInput = document.getElementById('amount-input-2').value;
    const accountBalance = document.getElementById('account-balance').innerText
   

    if(pinNmuber === '1234'){
      const newAI = parseFloat(amountInput);
      const newAB = parseFloat(accountBalance);
      const newBalance =newAB - newAI  ;
      console.log('new')
      document.getElementById('account-balance').innerText = newBalance
        


    }
    else {
      
    }
})