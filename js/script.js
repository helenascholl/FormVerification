window.addEventListener('load', () => {
    document.getElementById('create').addEventListener('click', () => {
        let email = document.getElementById('email').value;

        if (!/^[^@]+@[^@]+$/.test(email) && !/^\S*$/.test(email)) {
            document.getElementById('emailError').style.opacity = 1;
        }
    });
});