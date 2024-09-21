document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out button clicked')
      
     const inputCashOut = document.getElementById('input-cash-out').value;
     const pinNumber = document.getElementById('input-cash-out-pin').value;
     console.log(inputCashOut,pinNumber);

     if(pinNumber === '1234'){
        console.log('money is reducing')

        const balance = document.getElementById('amount-balance').innerText;
        console.log(balance);

        const cashOutNumber = parseFloat(inputCashOut);
        const balanceNumber = parseFloat(balance);
        console.log(cashOutNumber,balanceNumber);

        const newBalance = balanceNumber - cashOutNumber ;
        console.log(newBalance);

        document.getElementById('amount-balance').innerText = newBalance;

     }
     else{
        alert('Failed to cash out . please try again')
     }

})