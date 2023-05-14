const token = "5883645347:AAHnCr8ePB7fAUfo5BfE19lqTKh15w_gtUg"
const chat_id = "-988333959"



const form = document.querySelector('.form');
const nameInp = document.querySelector('.name-inp');
const surnameInp = document.querySelector('.surname');
const emailInp = document.querySelector('.email');
const phoneInp = document.querySelector('.tel');
const messInp = document.querySelector('.mess');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = nameInp.value
    let surname = surnameInp.value
    let email = emailInp.value
    let phone = phoneInp.value
    let mess = messInp.value
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(phone);
    console.log(mess);
})