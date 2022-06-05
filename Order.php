<?php
    ob_start();
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
    <title>Order</title>
</head>
<body>
    <div class="header">
        <a target="_parent" href="./Main.php">
            <img class="btn_back" src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Back-arrows-simple-solid-edt.graphics-3.png"/>
        </a>
        <h1> WELCOME TO GOLD</h1>
        <a class="listOrder" href="vieworder.php" style="text-decoration: none; 
                                            color: #fff;
                                            padding: 30px; 
                                            box-sizing: border-box; 
                                            border-radius: 30px;
                                            font-size: 24px;
                                            font-weight: 700;
                                            "> <i class="fa-solid fa-list"></i> List Order</a>
    </div>
    <div class="container">
        <div class="block1">
            <div class="block1-1">
                <img class="pic_content" src="./assets/image/pic_content.jpg">
            </div>
            <div class="room"> Detail room </div>
            <p>The detail information about this room, include: 1 table, 2 conditional airs, 
                2 salon chairs, 4 speakers and 2 micros.</p>
        </div>
        <div class="block2">
            <div class="block2-1">
                <form method="POST">
                    <div class="item_info">
                        <label for="name">Your name:</label>
                        <input name="name" type="text">
                        
                        <label for="phone">Your phone:</label>
                        <input name="phone" type="text">
                        
                        <label for="codeRoom">Code room:</label>
                        <input name="codeRoom" type="text">
    
                        <label for="date">Date order:</label>
                        <input name="date" type="date">
                        
                        <div class="timer">
                            <div class="time">Time in:</div>
                            <input class="time-in" type="time" name ="time-in">
                        </div>
                        
                        <div class="timer">
                            <div class="time">Time out:</div>
                            <input class="time-out" type="time" name = "time-out">
                        </div>
                        
                        <div class="people">Number of people:
                            <input list="people">
                        </div>
                        
                        <datalist id="people">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5"></option>
                            <option value="6"></option>
                            <option value="7"></option>
                            <option value="8"></option>
                            <option value="9"></option>
                            <option value="10"></option>
                        </datalist>
                        
                        <label for="textarea">Note</label>
                        <textarea name = "textarea" cols="30" rows="3" placeholder="Write something"></textarea>
                    </div>
                
            </div>
            <div class="block2-2">
                <a href="#" target="_blank" >
                    <button type = 'submit' name ='insert' class="btn_order">Order</button>
                </a>
            </div>
            </form>            
        </div>

<?php
    if(isset($_POST['insert'])){
        $maPhong = $_POST['codeRoom'];
        $maDat = "D00";
        $tenKH = $_POST['name'];
        $soDT = $_POST['phone'];
        $ngayDat = $_POST['date'];
        $query = "INSERT INTO datphong VALUES(NULL,'$tenKH','$soDT','$ngayDat')";
        mysqli_query($link,$query) or die("Thêm thất bại");
        header('location:Order.php');
    }
    
?>
<?php
    if(isset($_POST['insert'])){
        $maPhong = $_POST['codeRoom'];
        $maDat = 'D00';
        $tGDen = $_POST['time-in'];
        $tGDi = $_POST['time-out'];
        $query1 = "INSERT INTO ctdp VALUES('$maPhong',NULL,'$tGDen','$tGDi')";
        mysqli_query($link,$query1) or die("Thêm thất bại");
        header('location:Order.php');
    }
    ob_end_flush();
?>

</body>
</html>