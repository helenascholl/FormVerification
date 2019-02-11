window.addEventListener('load', () => {
    document.getElementById('create').addEventListener('click', () => {
        let regExp = new RegExp('a+');
        alert(regExp.test(document.getElementById('firstName').value));
    });
});