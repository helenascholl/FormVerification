let errors = [];

window.addEventListener('load', () => {
    for (let input of document.getElementsByTagName('input')) {
        if (input.type !== 'button') {
            input.style.borderColor = 'black';

            input.addEventListener('click', () => {
                if (input.type !== 'radio' && input.type !== 'checkbox') {
                    input.style.borderColor = 'black';
                }

                if (input.type !== 'radio') {
                    document.getElementById(`${input.id}Error`).style.opacity = 0;
                } else {
                    document.getElementById(`${input.name}Error`).style.opacity = 0;
                }
            });
        }
    }

    for (let button of document.getElementsByName('next')) {
        button.addEventListener('click', next);
    }

    for (let button of document.getElementsByName('back')) {
        button.addEventListener('click', back);
    }

    document.getElementById('create').addEventListener('click', () => {
        validatePassword();
        validateConfirmPassword();
        validateAgree();

        if (validatePassword() && validateConfirmPassword() && validateAgree()) {
            document.getElementById('form3').style.opacity = 0;
            document.getElementById('thankYou').style.opacity = 1;
        } else {
            printErrors();
        }
    });
});

function next() {
    let form1 = document.getElementById('form1').style;
    let form2 = document.getElementById('form2').style;
    let form3 = document.getElementById('form3').style;

    if (form1.opacity === '1') {
        validateFirstName();
        validateLastName();
        validateUsername();
        validateEmail();
        validateConfirmEmail();

        if (validateFirstName() && validateLastName() && validateUsername() && validateEmail() && validateConfirmEmail()) {
            form1.opacity = 0;
            form2.opacity = 1;
        } else {
            printErrors();
        }
    } else {
        vaildatePhoneNumber();
        validateBirthday();
        validateGender();

        if (vaildatePhoneNumber() && validateBirthday() && validateGender()) {
            form2.opacity = 0;
            form3.opacity = 1;
        } else {
            printErrors();
        }
    }
}

function back() {
    let form1 = document.getElementById('form1').style;
    let form2 = document.getElementById('form2').style;
    let form3 = document.getElementById('form3').style;

    if (form2.opacity === '1') {
        form2.opacity = 0;
        form1.opacity = 1;
    } else {
        form3.opacity = 0;
        form2.opacity = 1;
    }
}

function validateFirstName() {
    let firstName = document.getElementById('firstName');
    let isValid = !/[^a-zäöüß ]/i.test(firstName.value) && firstName.value.length > 0;

    if (!isValid) {
       errors.push({ name: 'firstName', hasBorder: true });
       firstName.value = '';
    }

    return isValid;
}

function validateLastName() {
    let lastName = document.getElementById('lastName');
    let isValid = !/[^a-zäöüß ]/i.test(lastName.value) && lastName.value.length > 0;

    if (!isValid) {
       errors.push({ name: 'lastName', hasBorder: true });
       lastName.value = '';
    }

    return isValid;
}

function validateUsername() {
    let username = document.getElementById('username');
    let isValid = !/[^a-z0-9._]/i.test(username.value) && username.value.length > 0;

    if (!isValid) {
       errors.push({ name: 'username', hasBorder: true });
       username.value = '';
    }

    return isValid;
}

function validateEmail() {
    let email = document.getElementById('email');
    let splitEmail = email.value.split('@');
    let isValid = splitEmail.length === 2 && splitEmail[1].split('.').length === 2 && splitEmail[1].split('.')[1].length > 2;

    if (!isValid) {
        errors.push({ name: 'email', hasBorder: true });
        email.value = '';
    }

    return isValid;
}

function validateConfirmEmail() {
    let confirmEmail = document.getElementById('confirmEmail');
    let isValid = confirmEmail.value === document.getElementById('email').value;

    if (!isValid) {
        errors.push({ name: 'confirmEmail', hasBorder: true });
        confirmEmail.value = '';
    }

    return isValid;
}

function vaildatePhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber');
    let isValid = !/[^0-9/ ]/.test(phoneNumber.value) && phoneNumber.value.length > 4;

    if (!isValid) {
        errors.push({ name: 'phoneNumber', hasBorder: true });
        phoneNumber.value = '';
    }

    return isValid;
}

function validateBirthday() {
    let birthday = document.getElementById('birthday');
    let maxDate = new Date();

    maxDate.setFullYear(maxDate.getFullYear() - 16);

    let isValid = birthday.value.length > 0 && maxDate.getTime() > new Date(birthday.value).getTime();

    if (!isValid) {
        errors.push({ name: 'birthday', hasBorder: true });
        birthday.value = '';
    }

    return isValid;
}

function validateGender() {
    let isValid = false;

    for (let gender of document.getElementsByName('gender')) {
        if (gender.checked) {
            isValid = true;
        }
    }

    if (!isValid) {
        errors.push({ name: 'gender', hasBorder: false });
    }

    return isValid;
}

function validatePassword() {
    let password = document.getElementById('password');
    let isValid = /[a-z]/.test(password.value) && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value) && /[^a-zA-Z0-9]/.test(password.value) && password.value.length > 7;

    if (!isValid) {
        errors.push({ name: 'password', hasBorder: true });
        password.value = '';
    }

    return isValid;
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById('confirmPassword');
    let isValid = confirmPassword.value === document.getElementById('password').value;

    if (!isValid) {
        errors.push({ name: 'confirmPassword', hasBorder: true });
        confirmPassword.value = '';
    }

    return isValid;
}

function validateAgree() {
    let isValid = document.getElementById('agree').checked;

    if (!isValid) {
        errors.push({ name: 'agree', hasBorder: false });
    }

    return isValid;
}

function printErrors() {
    for (let error of errors) {
        document.getElementById(`${error.name}Error`).style.opacity = 1;

        if (error.hasBorder) {
            document.getElementById(error.name).style.borderColor = 'red';
        }
    }

    errors = [];
}