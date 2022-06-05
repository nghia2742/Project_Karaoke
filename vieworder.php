
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
        <a target="_parent" href="./Order.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> List Order</h1>
    </div>
<?php 
session_start();
$sum = 0;
?>
<table class="table" width="80%" >
	<tr class = "row">

		<th>Mã đặt</th>
        <th>Tên khách hàng</th>
		<th>Số điện thoại</th>
		<th>Ngày đặt</th>
        <th>Thời gian đến</th>
        <th>Thời gian trả</th>
		<th>Xử lý</th>
        
	</tr>
    
<?php  
    $query = "SELECT * FROM datphong JOIN ctdp ON datphong.maDat = ctdp.maDat";
    $result = mysqli_query($link, $query);

    if(mysqli_num_rows($result)){
        $i = 0;
        while($r = mysqli_fetch_assoc($result)){
            $i++;
            $maDat = $r['maDat'];
            $tenKH = $r['tenKH'];
            $soDT = $r['soDT'];
            $ngayDat = $r['ngayDat'];
            $tGDen = $r['tGDen'];
            $tGDi = $r['tGDi'];
            echo '<tr>';

            echo "<td>$maDat</td>";
            echo "<td>$tenKH</td>";
            echo "<td>0$soDT</td>";
            echo "<td>$ngayDat</td>";
            echo "<td>$tGDen</td>";
            echo "<td>$tGDi</td>";
            echo "</td>";
            
            echo "<td><a href = 'delete_from_order.php?id=".$r['maDat']."'>Cancel</a>
             | <a href = 'update.php?id=".$r['maDat']."'>Edit</a></td>";
        }
    }
?>
</table>
<div class ="insert">   
    <h1>
        Tổng tiền hoá đơn:
        $<?php echo $sum ?>
    </h1>
    <a class ='them' target="_self" href = 'Order.php'>Add</a>
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