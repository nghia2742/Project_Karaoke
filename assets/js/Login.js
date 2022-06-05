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
    var id_inp = document.getElementById('inp').value;
    var id_pas = document.getElementById('pas').value;

    if(id_inp == ac && id_pas == pass){
        return true;
    }
    return false;
}