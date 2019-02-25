window.addEventListener('load', () => {
    document.getElementById('create').addEventListener('click', () => {
        validateFirstName();
        validateLastName();
        validateUsername();
        validateEmail();
        validateConfirmEmail();
        vaildatePhoneNumber();
        validateBirthday();
        validateGender();
        validatePassword();
        validateConfirmPassword();
        validateAgree();
    });
});

function validateFirstName() {
    let firstName = document.getElementById('firstName');

    if (!/[a-zäöüß]/i.test(firstName)) {
        alert('FOISCHA NAME DU SCHEIß HURENSOHN!!!!111');
    }
}

function validateLastName() {

}

function validateUsername() {

}

function validateEmail() {
    
}

function validateConfirmEmail() {
    
}

function vaildatePhoneNumber() {
    
}

function validateBirthday() {
    
}

function validateGender() {
    
}

function validatePassword() {
    
}

function validateConfirmPassword() {
    
}

function validateAgree() {
    
}