const form = document.querySelector('form')
const length = document.querySelector('input')
const passH1 = document.querySelector('h1')
const copyBtn = document.querySelector('.copy')
let passStatus = true;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const validation = [
        {regex: /[a-z]/}, 
        {regex: /[A-Z]/}, 
        {regex:/[^A-Za-z0-9]/},
        {regex: /[0-9]/}
    ];

    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password = ''

    const generatePass = () => {
        for (let i = 0; i <= length.value - 1; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
    
        validation.forEach(item => {
            const isValid = item.regex.test(password)
            if(!isValid){
                passStatus = false
            }
        });
        if(!passStatus){
            passStatus = true
            password = ''
            generatePass()
        } else{
            passH1.innerHTML = password
        }
    }

    generatePass()

})


function triggerExample() {
    // get the container
    const element = document.querySelector('h1');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
  }