<?php  
    $link = new mysqli('localhost','root','vertrigo','qlkaraoke') or die('Kết nối thất bại!');

    mysqli_query($link, 'SET NAME UTF8');    
    
    if(isset($_GET["id"])){
        $maPhong = $_GET["id"];
        $sql = "DELETE FROM phong WHERE maPhong = '$maPhong'"; 
        mysqli_query($link, $sql);
        header('location:viewroom.php');
    } else echo "Thất bại";
?> 

 

