const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
})
const loginField = document.querySelector("[name='Login']");
loginField.addEventListener('input', () => {
    requiredValidation(loginField);
    minLengthValidation(loginField, 3);
});
const emailField = document.querySelector("[name='email']");
emailField.addEventListener('input', () => {
    requiredValidation(emailField);
    emailValidation(emailField);
});
const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener('input', () => {
    requiredValidation(passwordField);
});
const confirmPasswordField = document.querySelector("[name='confirm-password']");
    confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword();
});


function validForm() {
    if (requiredValidation(loginField) || requiredValidation(emailField)
        || requiredValidation(passwordField) || requiredValidation(secPasswordField
        || minLengthValidation(loginField, 3) || minLengthValidation(emailField, 2)
        || minLengthValidation(passwordField, 8) || minLengthValidation(nameField, 2) || minLengthValidation(phoneField, 9)
        || maxLengthValidation(phoneField, 9) || emailValidation(emailField) || passwordValidation(passwordField)
        || validConfirmPassword() || requiredValidation(addressField) || minLengthValidation(addressField, 3))) {
        return false;
    }

    return true;
}