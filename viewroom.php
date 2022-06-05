
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
        <a target="_parent" href="./Room.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> List Room</h1>
    </div>
<?php 
session_start();
$sum = 0;
?>
<table class="table" width="80%" >
	<tr class = "row">

		<th>Mã phòng</th>
        <th>Tên phòng</th>
		<th>Loại phòng</th>
		<th>Tình trạng</th>
        <th>Không gian</th>
        <th>Giá tiền</th>
		<th>Xử lý</th>
        
	</tr>
    
<?php  
    $query = "SELECT * FROM phong";
    $result = mysqli_query($link, $query);

    if(mysqli_num_rows($result)){
        $i = 0;
        while($r = mysqli_fetch_assoc($result)){
            $i++;
            $maPhong = $r['maPhong'];
            $tenPhong = $r['tenPhong'];
            $giaTien = $r['giaTien'];
            $loaiPhong = $r['loaiPhong'];
            $tinhTrang = $r['tinhTrang'];
            $khongGian = $r['khongGian'];
            echo '<tr>';
            echo "<td>$maPhong</td>";
            echo "<td>$tenPhong</td>";
            echo "<td>$loaiPhong</td>";
            echo "<td>$tinhTrang</td>";
            echo "<td>$khongGian</td>";
            echo "<td>$giaTien$ / 1 hour</td>";
            echo "</td>";
            echo "<td><a href = 'delete_from_room.php?id=".$r['maPhong']."'>Delete</a>
             | <a href = 'update_room.php?id=".$r['maPhong']."'>Edit</a></td>";
        }
    }
?>
</table>
<div class ="insert">   

    <a class ='them' target="_self" href = './Main.php'>Add</a>
</div>
<style>

.table {
    position: relative;
    left: 10%;
    border: 3px solid #000;
    font-size: 24px;
    background-color: #fff;
}
.row th, td {
    color : black;
    border: 3px solid #000;
    text-align: center;

}
a{
    color : black;
}
.insert{
    display: flex;
    justify-content: space-between;
    margin: 15px 180px;
}
.them {
    padding: 10px;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border-radius: 20px;
    font-weight: 800;
}
</style>
</body>
</html>