function emailValidation (email) {
    email = document.getElementById('emailInput')
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(email.value)){
        alert('Thank you for joining us!')
        const savedEmail = email.value
        email.value = ''
    } else {
        alert('Please submit a valid email address.')
        return false;
    }
}
function initElement(){  
    const images = document.querySelectorAll('.imgHover');
    
    images.forEach(img => {
        const button = img.querySelector('button');
        img.onmouseover = () => {
            button.style.visibility = "visible";
        };
        img.onmouseout = () => {
            button.style.visibility = "hidden";
        };
    });
};
