// console.log('login.js')
// document.getElementById('login-button').addEventListener('click', function(){
//     console.log('login button clicked')
// })

// search: from submit reloading the page

// Step - 1: set event handler
document.getElementById('login-button')
        .addEventListener('click', function(event){

         // step-2: prevent default behevior (prevent reloading browser)
    event.preventDefault();  // <-----vejal to beginners.
    // console.log('login button clicked')

    // step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber,pinNumber);

    // step-4: validate phone and pin
            if(phoneNumber === '5' && pinNumber === '1234'){
                console.log('you are logged in')
                window.location.href = '/home.html';
            }
            else{
                alert('wrong phone number or pin')
            }
    // step-5: allow user to use the website
})