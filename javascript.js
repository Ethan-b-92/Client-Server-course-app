const passwordRules = "Password must contain: \n1. At least one upper case letter\n\
2. At least one lower case letter \n3. At least one digit \n4. At least one special character\n\
5. At least 6 characters\nSpecial characters: : ! @ # \$ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > \<";
const emailRules = "Email field should match the format: aaa@bbb.ccc";

function validateEmailAndPassword() {
    var emailValidation = validateEmail();
    var passwordValidation = validatePassword();

    if(!emailValidation) 
        window.alert("Invalid email!\n" + emailRules);
    
    if(!passwordValidation)
        window.alert("Invalid password!\n" + passwordRules);

    return [emailValidation, passwordValidation];
}

function validateLogIn() {
    const [emailValidation, passwordValidation] = validateEmailAndPassword();

    if(emailValidation && passwordValidation) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        window.alert('You successfully logged into your account! \nEmail: ' + email +' \nPassword: ' + password);
    }
}

function validateSignUp() {
    const [emailValidation, passwordValidation] = validateEmailAndPassword();

    if(!validateConfirmation()) 
        window.alert("Passwords do not match!");

    else if(emailValidation && passwordValidation) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        window.alert('You successfully signed up! \nEmail: ' + email +' \nPassword: ' + password);
    }
}

function validateConfirmation() {
    var confirm = document.getElementById("confirm").value;
    var password = document.getElementById("password").value;
    return confirm === password;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  return (email.match(validRegex));
}

function validatePassword() {
    var password = document.getElementById("password").value;
    //var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)-_=+\\|\[\]\{\}\;\:\?\.\>\<])(?=.{6,})");
    var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})");

    return passwordRegex.test(password);

}

function showPassword() {
    var password = document.getElementById("password")
    var confirm = document.getElementById("confirm")
  if (password.type === "password") {
    password.type = "text";
    confirm.type = "text";
  } else {
    password.type = "password";
    confirm.type = "password";
  }
}

function setToolTips() {
    document.getElementById("password").title = passwordRules;
    document.getElementById("email").title = emailRules;
    document.getElementById("confirm").title = "Passwords must match";
}