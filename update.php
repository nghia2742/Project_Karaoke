
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
        <a target="_parent" href="./vieworder.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> Update order </h1>
    </div>

    <table class="table" border="1" width="80%" >
            <form  method = "POST">
                <tr class="row">
                    <th>Số phòng<input autofocus name="codeRoom" type="text" value = <?php $_GET['id'] ?>></th>
                    <th>Tên khách hàng<input name="name" type="text"></th>
                    <th>Số điện thoại<input name="phone" type="text"></th>
                    <th>Ngày đặt<input name="date" type="date"></th>
                    <th>Thời gian đến<input type="time" name ="time-in"></th>
                    <th>Thời gian trả<input type="time" name = "time-out"></th>
                </tr>
                <input class="btnSubmit" type = "submit" name ="update" value = "OK">
            </form>
        
<?php  
    if(isset($_POST['update'])){
        $soPhong = $_POST['codeRoom'];
        $tenKH = $_POST['name'];
        $soDT = $_POST['phone'];
        $ngayDat = $_POST['date'];
        $tGDen = $_POST['time-in'];
        $tGDi = $_POST['time-out'];
        $maDat = $_GET['id'];
        $query = "UPDATE datphong,ctdp 
                    SET ctdp.maPhong = '$soPhong',
                        datphong.tenKH = '$tenKH',
                        datphong.soDT = '$soDT',
                        datphong.ngayDat = '$ngayDat',
                        ctdp.tGDen = '$tGDen',
                        ctdp.tGDi = '$tGDi'
                    WHERE datphong.maDat = ctdp.maDat AND datphong.maDat = '$maDat'";
        mysqli_query($link, $query) or die("Khong the cap nhat");
        header("location:vieworder.php");
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