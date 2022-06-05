<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/Style_login.css">
    <title>Login</title>
</head>
<body>
    <div class="nav">
        <div class="logo">
            GOLD
        </div>
        <ul class="list">
            <li class="list-item"><a href="./Home.html">Home</a></li>
            <li class="list-item"><a href="#">Contact</a></li>
            <li class="list-item"><a href="#">About</a></li>
            <li class="list-item"><a href="#">Feedback</a></li>
        </ul>
    </div>
    <div class="container">
        <div class="textGreeting">
            <h1> WELCOME TO <br> 
                <span>GOLD</span>
            </h1>
            <h3>BE CONFIDENT YOUR VOICE !!!</h3>
        </div>
        <form class="login" name="myForm" action="./Main.php" onsubmit="return myFunction()">
            <h1>Log in</h1>
            <div class="form-text">
                <label for="uname">Username:</label> 
                <input id="inp" type="text" name="uname" placeholder="Enter your username" autocomplete="off" required>
            </div>
            <div class="form-text"> 
                <label for="password">Password:</label> 
                <input id="pas" type="password" name="password" placeholder="Enter your password" required>
            </div>
            <div class="submit">
                <input onclick="check()" type="submit" value="Login">
            </div>
            <span> Do you have an account? Register <a href="">Here!</a></span>
        </form>
    </div>
</body>
<script>
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
</script>
</html>