<?php  
    $link = new mysqli('localhost','root','vertrigo','qlkaraoke') or die('Kết nối thất bại!');

    mysqli_query($link, 'SET NAME UTF8');    
    
    if(isset($_GET["id"])){
        $maDat = $_GET["id"];
        $sql = "DELETE datphong,ctdp FROM datphong JOIN ctdp ON datphong.maDat = ctdp.maDat WHERE datphong.maDat = $maDat"; 
        mysqli_query($link, $sql);
        header('location:vieworder.php');
    } else echo "Thất bại";
?> 

 

