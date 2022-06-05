<?php
    $link = new mysqli('localhost','root','vertrigo','qlkaraoke') or die('Kết nối thất bại!');

    mysqli_query($link, 'SET NAME UTF8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/Style_order.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <title>Add Room VIP</title>
</head>
<body>
    <div class="header">
        <a target="_parent" href="./Main.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> WELCOME TO GOLD</h1>
        <a class="listOrder" href="viewroom.php" style="text-decoration: none; 
                                            color: #fff;
                                            padding: 30px; 
                                            box-sizing: border-box; 
                                            border-radius: 30px;
                                            font-size: 24px;
                                            font-weight: 700;
                                            "> <i class="fa-solid fa-list"></i> List Room</a>
    </div>
    <div class="container">
        <div class="block1">
            <div class="block1-1">
                <img class="pic_content" src="./assets/image/pic_content.jpg">
            </div>
            <div class="room"> Detail room </div>
            <p>Vui lòng nhập thông tin vào bảng bên cạnh.</p>
        </div>
        <div class="block2">
            <div class="block2-1">
                <form method="POST">
                    <div class="item_info">
                        <label for="id">Mã phòng:</label>
                        <input name="id" type="text">
                        
                        <label for="name">Tên phòng:</label>
                        <input name="name" type="text" id="nameRoom" value=" ">

                        <label for="status">Tình trạng:</label>
                        <input name="status" type="text" id="statusRoom" value=" ">
                        
                        <label for="money">Giá tiền:</label>
                        <input name="money" type="int" id="priceRoom" value=" ">
    
                        <label for="kind">Loại phòng:</label>
                        <input name="kind" type="text">
                        
                        <label for="space">Không gian:</label>
                        <input name="space" type="text" id="capacityRoom" value=" ">
                    </div>
                
            </div>
            <div class="block2-2">
                <a href="./Main.php" target="_self" >
                    <button onclick="addRoomVIP()" id = "btnAdd" type = 'submit' name ='insert' class="btn_order">Accept</button>
                </a>
            </div>
            </form>            
        </div>
<?php
    if(isset($_POST['insert'])){
        $maPhong = $_POST['id'];
        $tenPhong = $_POST['name'];
        $tinhTrang = $_POST['status'];
        $giaTien = $_POST['money'];
        $loaiPhong = $_POST['kind'];
        $khongGian = $_POST['space'];
        
        $query = "INSERT INTO phong VALUES('$maPhong','$tenPhong','$giaTien','$loaiPhong','$tinhTrang','$khongGian')";
        mysqli_query($link,$query) or die("Thêm thất bại");
        header('location:Main.php');
    } 
?>
</body>
<script src="./assets/js/Order.js"></script>
</html>