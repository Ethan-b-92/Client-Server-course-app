const passwordRules = "Password must contain: \n1. At least one upper case letter\n\
2. At least one lower case letter \n3. At least one digit \n4. At least one special character\n\
5. At least 6 characters\nSpecial characters: : ! @ # \$ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > \<";
const emailRules = "Email field should match the format: aaa@bbb.ccc";
var modalTitle = "Modal Title";

(function() {
    var proxied = window.alert;
    window.alert = function() {
      modal = $('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 id="myModalTitle" class="modal-title">Modal title</h4></div><div class="modal-body"><p>One fine body&hellip;</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
      modal.find(".modal-body").text(arguments[0]);
      modal.find(".modal-title").text(modalTitle);
      modal.modal('show');
    };
  })();

function validateEmailAndPassword() {
    var emailValidation = validateEmail();
    var passwordValidation = validatePassword();
    modalTitle = "Something is Wrong...";

    if(!emailValidation) 
        alert("Invalid email!\n" + emailRules);
    
    if(!passwordValidation)
        alert("Invalid password!\n" + passwordRules);

    return [emailValidation, passwordValidation];
}

function validateLogIn() {
    const [emailValidation, passwordValidation] = validateEmailAndPassword();

    if(emailValidation && passwordValidation) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        modalTitle = "Congrats!";
        alert('You successfully logged into your account! \nEmail: ' + email +' \nPassword: ' + password);
    }
}

function validateSignUp() {
    const [emailValidation, passwordValidation] = validateEmailAndPassword();
    modalTitle = "Something is Wrong...";

    if(!validateConfirmation()) 
        alert("Passwords do not match!");

    else if(emailValidation && passwordValidation) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        modalTitle = "Congrats!";
        var successfulMessage = "You successfully signed up! \nEmail: " + email +" \nPassword: " + password;
        //document.getElementById("modal-body").innerHTML = successfulMessage;
        //jQuery.noConflict(); 
        //$('#successful-sign').modal('show');
        //$('.modal').modal('show');

        // document.getElementById('successful-sign').classList.add("show");

        // const myModalEl = document.getElementById('successful-sign')
        // const modal = new mdb.Modal(myModalEl)
        // modal.show()

        alert(successfulMessage);
        //console.log("The confirm dialog vanished")
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

  return email.match(validRegex) ? true : false;
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
    var confirm = document.getElementById("confirm");
    if(confirm != null) confirm.title = "Passwords must match";
}
