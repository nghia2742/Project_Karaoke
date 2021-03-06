<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/Style_main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
     <title>Main</title>
</head>
<body>  
    <div class="grid">
        <div class="nav">
            <div class="logo">
                <a href="./Home.html">GOLD</a>
            </div>
            <ul class="list">
                <li class="list-item">
                    <img src="./assets/image/user.png" class="logo_account">
                    <span>Hello, Admin</span>
                </li>
                <li class="list-item"><a href="#">Contact</a></li>
                <li class="list-item"><a href="#foot">About</a></li>
                <li class="list-item"><a href="#">Feedback</a></li>
            </ul>
        </div>
        <!-- NORMAL ROOM -->
        <h1 class="kindRoom">Normal Room</h1>
        <div class="grid">
            <div id="contain" class="container">
                
                <!-- Btn add room -->
                <div class="item item--add">
                    <div class="title_room">Add room</div>
                    <div class="content">
                        <a href="./Room.php"><i class="fa-solid fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- VIP ROOM -->
        <h1 class="kindRoom">VIP Room</h1>
        <div class="grid">
            <div id="containVIP" class="container">

                <!-- Btn add room -->
                <div class="item item--add">
                    <div class="title_room">Add room</div>
                    <div onclick="addRoomVIP()" class="content">
                        <a href="./RoomVIP.php"><i class="fa-solid fa-plus"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!--  footer---------------------------------------------------------->
</body>
<footer class="footer" id="foot">
    <h1 class="title-footer">Member of group:</h1>
    <ul class="list-name">
        <li>1. Ngo Trong Nghia</li>
        <li>2. Dang Cong Nhat</li>
        <li>3. Pham Minh Quan</li>
    </ul>
    <div class="social-network">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-skype"></i>
    </div>
</footer>
<script src="./assets/js/Order.js"></script>
<script src="./assets/js/Main.js"></script>
</html>