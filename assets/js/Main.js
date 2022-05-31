var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');
var roomVIP = [];


// ADD NORMAL ROOM
if ( localStorage.getItem('listRoom') === null ) {
    var room = [];
}else{
    var room = JSON.parse(localStorage.getItem('listRoom'));
}

function addRoom() {
    var noRoom = room.length + 1;
    const div = document.createElement('div');
    div.innerHTML = `<div class="item">
                        <div class="title_room"> Room ${noRoom++}</div>
                        <div class="content">
                            <i id="trashCan" class="fa-solid fa-trash-can"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <img class="pic_content" src="./assets/image/pic_content.jpg">
                            <div class="info">
                                Status: Empty
                                Capacity: 6 people
                                Price: 5$ an hour
                            </div>
                            <a href="Order.html" target="_self" >
                                <button class="btn">Order</button>
                            </a>
                        </div>
                    </div>`
    // Press to show a room on screen
    id_contain.appendChild(div);
    // Save a room into localStorage
    var str = '';
    str = div.innerHTML;
    room.push(str);
    localStorage.setItem('listRoom',JSON.stringify(room));
}


// ADD VIP ROOM
if ( localStorage.getItem('listRoomVIP') === null ) {
    var roomVIP = [];
}else{
    var roomVIP = JSON.parse(localStorage.getItem('listRoomVIP'));
}

function addRoomVIP() {
    var noRoomVIP = roomVIP.length + 1;
    const div = document.createElement('div');
    div.innerHTML = `<div class="item">
                        <div class="title_room"> Room VIP ${noRoomVIP++}</div>
                        <div class="content">
                            <i id="trashCan" class="fa-solid fa-trash-can"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <img class="pic_content" src="./assets/image/pic_content.jpg">
                            <div class="info">
                                Status: Empty
                                Capacity: 10 people
                                Price: 25$ an hour
                            </div>
                            <a href="Order.html" target="_self" >
                                <button class="btn">Order</button>
                            </a>
                        </div>
                    </div>`
    // Press to show a room on screen
    id_containVIP.appendChild(div);
    // Save a room into localStorage
    var str = '';
    str = div.innerHTML;
    roomVIP.push(str);
    localStorage.setItem('listRoomVIP',JSON.stringify(roomVIP));
}


// LOAD DATA SAVED
function loadDataRoom() {
    if (localStorage.getItem('listRoom') !== null) {
        var arrayRoom = JSON.parse(localStorage.getItem('listRoom'));
        var len = arrayRoom.length;
        for (var i = 0; i < len; i++) {
            const div = document.createElement('div');
            div.innerHTML = arrayRoom[i];
            id_contain.appendChild(div);
        }
    }
    if (localStorage.getItem('listRoomVIP') !== null) {
        var arrayRoom = JSON.parse(localStorage.getItem('listRoomVIP'));
        var len = arrayRoom.length;
        for (var i = 0; i < len; i++) {
            const div = document.createElement('div');
            div.innerHTML = arrayRoom[i];
            id_containVIP.appendChild(div);
        }
    }
}

loadDataRoom();
// localStorage.setItem('conditionLoad','true');
// if (localStorage.getItem('conditionLoad').localeCompare('true') == 0) {
//     loadDataRoom();
//     localStorage.setItem('conditionLoad','false');
// }


// Delete a room -------------------------------------------------
function deleteRoom() {
    var id_trashCan = document.querySelectorAll("#trashCan");
    var cls_item = document.querySelectorAll(".item");

    for (let i = 0; i < id_trashCan.length; i++) {
        id_trashCan[i].addEventListener("click",function() {
            if (confirm("This action will be delete a room !!!")) {
                id_contain.removeChild(cls_item[i]);
                localStorage.removeItem('room'+String(i+1));
                console.log("Delete successfully!");
            } else {
                console.log("Canceled");
            }
        })
    }
}

deleteRoom();

