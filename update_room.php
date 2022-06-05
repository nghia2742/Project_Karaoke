
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
    <title>Order</title>
</head>
<body>
    <div class="header">
        <a target="_parent" href="./viewroom.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> Update order </h1>
    </div>

    <table class="table" border="1" width="80%" >
            <form  method = "POST">
                <tr class="row">

                    <th>Tên phòng<input name="nameRoom" type="text" value = <?php $_GET['id'] ?>></th>
                    <th>Loại phòng<input name="kind" type="text"></th>
                    <th>Tình trạng<input name="status" type="text"></th>
                    <th>Không gian<input name ="capacity" type="text"></th>
                    <th>Giá tiền<input name = "money" type="int"></th>
                </tr>
                <input class="btnSubmit" type = "submit" name ="update" value = "OK">
            </form>
        
<?php  
    if(isset($_POST['update'])){
        $tenPhong = $_POST['nameRoom'];
        $loaiPhong = $_POST['kind'];
        $tinhTrang = $_POST['status'];
        $khongGian = $_POST['capacity'];
        $giaTien = $_POST['money'];
        $maPhong = $_GET['id'];
        $query = "UPDATE phong
                    SET tenPhong = '$tenPhong',
                        loaiPhong = '$loaiPhong',
                        tinhTrang = '$tinhTrang',
                        khongGian = '$khongGian',
                        giaTien = '$giaTien'
                    WHERE maPhong = '$maPhong'";

        mysqli_query($link, $query) or die("Khong the cap nhat");
        header("location:viewroom.php");
    }
?>
    </table>
<style>

.table {
    margin-top: 100px;
    position: relative;
    left: 10%;
    border: 3px solid #000;
    font-size: 24px;
}

.row input{
    height: 30px;
    font-size: 22px;
    width: 180px;
    outline: none;
}

.btnSubmit {
    position: absolute;
    top: 50%;
    left: 45%;
    padding: 30px 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 35px;
    cursor: pointer;
    font-weight: 800;
    border: none;
    font-size: 20px;
}
</style>
</body>
</html>