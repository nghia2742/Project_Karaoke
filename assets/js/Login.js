const ac = "admin";
const pass = "1234";

function check(){
    var arr = document.getElementsByTagName('input');
    var ac_input = arr[0].value;
    var pass_input = arr[1].value;

    if ((ac_input != ac) || (pass_input != pass)) {
        alert("Error! Your account or password is wrong!");
    }
}

function myFunction(){
    if(document.myForm.uname.value == ac && document.myForm.password.value == pass){
        return true;
    }
    return false;
}