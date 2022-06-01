var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');
var info = {
    room: 1,
    status: "Available",
    capacity: 6,
    price: 5
}
// ADD NORMAL ROOM
function addRoom() {
    if ( localStorage.getItem('listRoom') === null ) {
        var room = [];
    }else{
        var room = JSON.parse(localStorage.getItem('listRoom'));
    }
    var noRoom = room.length + 1;
    info.room = noRoom;
    const div = document.createElement('div');
    div.innerHTML = `<div class="item" id="idRoom">
                        <div class="title_room"> Room ${noRoom++}</div>
                        <div class="content">
                            <i id="trashCan1" class="fa-solid fa-trash-can"></i>
                            <i id="edit1" class="fa-solid fa-pen-to-square"></i>
                            <div id="ef1" class="editFrame"> 
                                <div class="titleEdit">
                                    <h2>Edit room</h2>
                                    <i id = "closeEdit" class="fa-solid fa-xmark"></i>
                                </div>
                                <form id="formEdit">
                                    <div class="contentEdit">RoomID: R0${noRoom} </div>
                                    <div class="containEdit">
                                        <div class="contentEdit"> Status:
                                            <div class="radioEdit">
                                                <div>
                                                    <input name="radioStatus" id="idS1" type="radio" value = "Available" checked> 
                                                    <label for="available">Available</label>
                                                </div>
                                                <div>
                                                    <input name="radioStatus" id="idS2" type="radio" value = "Available">
                                                    <label for="unavailable">Unavailable</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contentEdit">Capacity: <input id="idC" type="text" autocomplete="off"> people</div>
                                        <div class="contentEdit">Price: <input id="idP" type="text" autocomplete="off">$ an hour</div>
                                    </div>
                                    <div class="btnEdit"> <input type="submit" value="Finish"></div>
                                </form>
                            </div>
                            <img class="pic_content" src="./assets/image/pic_content.jpg">
                            <div class="info">
                                <div class = "info1">Status: ${info.status}</div>
                                <div class = "info2">Capacity: ${info.capacity} people</div>
                                <div class = "info3">Price: ${info.price}$ an hour</div>
                            </div>
                            <a href="Order.html" target="_self" >
                                <button class="btn">Order</button>
                            </a>
                        </div>
                    </div>`
    // Press to show a room on screen
    id_contain.appendChild(div);
    // Save a room into localStorage
    var str = div.innerHTML;
    room.push(str);
    localStorage.setItem('listRoom',JSON.stringify(room));
    localStorage.setItem('infoRoom',JSON.stringify(info));
    // window.location.reload();
    
}


// ADD VIP ROOM -----------------------------------------------------------
if ( localStorage.getItem('listRoomVIP') === null ) {
    var roomVIP = [];
}else{
    var roomVIP = JSON.parse(localStorage.getItem('listRoomVIP'));
}

function addRoomVIP() {
    var noRoomVIP = roomVIP.length + 1;
    const div = document.createElement('div');
    div.innerHTML = `<div class="item" id="idRoomVIP">
                        <div class="title_room"> Room VIP ${noRoomVIP++}</div>
                        <div class="content">
                            <i id="trashCan2" class="fa-solid fa-trash-can"></i>
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
    window.location.reload();
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
// Delete a room -------------------------------------------------
function deleteRoom() {
    var arrayRoom = JSON.parse(localStorage.getItem('listRoom'));
    var id_item = document.querySelectorAll('#idRoom');
    var id_trashCan1 = document.querySelectorAll('#trashCan1');
    for (let i = 0; i < id_trashCan1.length; i++) {
        id_trashCan1[i].addEventListener("click",function() {
            if (confirm("This action will be delete a room !!!")) {
                for (let e = 0; e < arrayRoom.length; e++) {
                    if ( arrayRoom[e] === arrayRoom[i]) {
                        id_item[i].remove();
                        arrayRoom.splice(e, 1); 
                        localStorage.setItem('listRoom',JSON.stringify(arrayRoom));
                        window.location.reload();
                        alert('Delete successfully!');
                    }
                }
                console.log(arrayRoom);
            } else {
                console.log("Canceled");
            }
        })
    }
}
deleteRoom();

//Edit room
function editRoom() {
    var id_edit1 = document.querySelectorAll('#edit1');
    var id_editFrame1 = document.querySelectorAll('#ef1');
    var id_closeEdit = document.querySelectorAll('#closeEdit');

    for (let i = 0; i < id_edit1.length; i++) {
        id_edit1[i].addEventListener('click', function() {
            id_editFrame1[i].classList.remove('active');
            id_editFrame1[i].classList.add('active');
            id_closeEdit[i].addEventListener('click', function() {
                id_editFrame1[i].classList.remove('active');
            });
        });
    }
}
editRoom();

function changeInfo() {
    var cap = document.getElementById('idC').value;
    var pri = document.getElementById('idP').value;
    var ele = document.getElementsByName('radioStatus');
    var sta = "";         
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            sta = ele[i].value;
    }

    var newInfo = {
        room: 1,
        status: sta,
        capacity: cap,
        price: pri
    }
    info = newInfo;
}


