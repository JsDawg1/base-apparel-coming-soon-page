const button = document.querySelector('#submitMail');
const email = document.querySelector('.email');
const error = document.querySelector('#errorText')
const errorPic = document.querySelector('.error')


button.addEventListener('click', main)

function validate(mail){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return(emailRegex.test(mail));    
}

function main(){
    const val = email.value;
    if(!validate(val)){
        error.style.opacity = '1';
        errorPic.style.display = 'block'
        console.log('no');
    }
    else{
        errorPic.style.display = 'none';
        error.style.opacity = '0';

    }
}