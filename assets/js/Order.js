function checkStatus(st) {
    var sta = '';
        if (st == "Unavailable" || st == "unavailable") {
           return sta = 'class="item disable"';
        }else{
            sta = 'class="item"'
        }
    return sta;
}

// Add normal room
if ( localStorage.getItem('listRoom') === null ) {
    var room = [];
}else{
    var room = JSON.parse(localStorage.getItem('listRoom'));
}
function addRoom() {
    var noRoom = document.getElementById('nameRoom').value;
    var stat = document.getElementById('statusRoom').value;
    var capacity = document.getElementById('capacityRoom').value;
    var price = document.getElementById('priceRoom').value;

    if (noRoom == "" || stat == "" || capacity == "" || price == "") {
        alert("Can't add");
    }
    else{
        const div = document.createElement('div');
        div.innerHTML = `<div ${checkStatus(stat)} id="idRoom${noRoom}">
                            <div class="title_room">${noRoom}</div>
                            <div class="content">
                                <a href="viewroom.php">
                                <i class="fa-solid fa-trash-can trashCan"></i>
                                </a>
                                <i class="fa-solid fa-pen-to-square edit"></i>
                                <img class="pic_content" src="./assets/image/pic_content.jpg">
                                <div class="info"">
                                    <div class = "info1">Status: ${stat}</div>
                                    <div class = "info2">Capacity: ${capacity} people</div>
                                    <div class = "info3">Price: ${price}$ an hour</div>
                                </div>
                                <a href="./Order.php" target="_self" >
                                    <button class="btn">Order</button>
                                </a>
                            </div>
                        </div>`
        // Save a room into localStorage
        var str = div.innerHTML;
        room.push(str);
        localStorage.setItem('listRoom',JSON.stringify(room));
        window.location.reload();
    }
}

// ADD VIP ROOM -----------------------------------------------------------
if ( localStorage.getItem('listRoomVIP') === null ) {
    var roomVIP = [];
}else{
    var roomVIP = JSON.parse(localStorage.getItem('listRoomVIP'));
}

function addRoomVIP() {
    var noRoomVIP = document.getElementById('nameRoom').value;
    var stat = document.getElementById('statusRoom').value;
    var capacity = document.getElementById('capacityRoom').value;
    var price = document.getElementById('priceRoom').value;
    
    if (noRoomVIP == "" || stat == "" || capacity == "" || price == "") {
        alert("Can't add");
    }
    else{
        const div = document.createElement('div');
        div.innerHTML = `<div ${checkStatus(stat)} id="idRoomVIP${noRoomVIP}">
                            <div class="title_room">${noRoomVIP}</div>
                            <div class="content">
                            <a href="viewroom.php">
                            <i class="fa-solid fa-trash-can trashCanVIP"></i>
                            </a>
                                <i class="fa-solid fa-pen-to-square editVIP"></i>
                                <img class="pic_content" src="./assets/image/pic_content.jpg">
                                <div class="info"">
                                    <div class = "info1">Status: ${stat}</div>
                                    <div class = "info2">Capacity: ${capacity} people</div>
                                    <div class = "info3">Price: ${price}$ an hour</div>
                                </div>
                                <a href="./Order.php" target="_self" >
                                    <button class="btn">Order</button>
                                </a>
                            </div>
                        </div>`

        // Save a room into localStorage
        var str = '';
        str = div.innerHTML;
        roomVIP.push(str);
        localStorage.setItem('listRoomVIP',JSON.stringify(roomVIP));
        window.location.reload();
    }
}


