// add money to the account

// step-1: add event handler and prevent page reload after form submit

// step-2: get money to be added to the account balance get the pin number 

// step-3: verify the pin number



// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
        .addEventListener('click', function(event){
            event.preventDefault();
    
    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);

    // step-3: verify the pin number
    if(inputPinNumber === '1234'){
        console.log('adding money to your account')

    // step-4: get the current balance
    const balances = document.getElementById('amount-balance').innerText;
    console.log(balances)

    // step-5: add addMoneyInput with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balances);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance)

    // step-6: update the balance in the UI/DOM
    document.getElementById('amount-balance').innerText=newBalance;

    }
    else{
        alert('Failed to add money! please try again')
    }

})
