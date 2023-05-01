const form = document.querySelector('form')
const length = document.querySelector('input')
const passH1 = document.querySelector('h1')
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
            passH1.textContent = password
        }
    }

    generatePass()



})