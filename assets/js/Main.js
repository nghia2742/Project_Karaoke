var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');

if ( localStorage.getItem('listRoom') === null ) {
    var room = [];
}else{
    var room = JSON.parse(localStorage.getItem('listRoom'));
}

// ADD NORMAL ROOM
function addRoom() {
    
    if (confirm("Create a new room, right!?")) {
        var noRoom = prompt('Enter number room:');
        var status = prompt('Status:');
        var capacity = prompt('Capacity')
        var price = prompt('Price:')
        
        const div = document.createElement('div');
        div.innerHTML = `<div class="item normalRoom">
                            <div class="title_room"> Room ${noRoom}</div>
                            <div class="content">
                                <i class="fa-solid fa-trash-can"></i>
                                <i class="fa-solid fa-pen-to-square"></i>
                                
                                <img class="pic_content" src="./assets/image/pic_content.jpg">
                                <div class="info"">
                                    <div class = "info1">Status: ${status}</div>
                                    <div class = "info2">Capacity: ${capacity} people</div>
                                    <div class = "info3">Price: ${price}$ an hour</div>
                                    
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
        window.location.reload();
    } else {
        alert("Canceled");
    }
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
    var class_item = document.querySelectorAll('.normalRoom');
    var class_trashCan = document.querySelectorAll('.fa-trash-can');
    for (let i = 0; i < class_trashCan.length; i++) {
        class_trashCan[i].addEventListener("click",function() {
            if (confirm("This action will be delete a room !!!")) {
                for (let e = 0; e < arrayRoom.length; e++) {
                    if ( arrayRoom[e] === arrayRoom[i]) {
                        class_item[i].remove();
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
    var class_edit = document.querySelectorAll('.fa-pen-to-square');
    for (let i = 0; i < class_edit.length; i++) {
        class_edit[i].onclick = function() {
            var noRoom = prompt('Enter number room:');
            var status = prompt('Status:');
            var capacity = prompt('Capacity')
            var price = prompt('Price:')
            
            room[i] = `<div class="item normalRoom">
            <div class="title_room"> Room ${noRoom}</div>
            <div class="content">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                
                <img class="pic_content" src="./assets/image/pic_content.jpg">
                <div class="info"">
                    <div class = "info1">Status: ${status}</div>
                    <div class = "info2">Capacity: ${capacity} people</div>
                    <div class = "info3">Price: ${price}$ an hour</div>
                </div>
                <a href="Order.html" target="_self" >
                    <button class="btn">Order</button>
                </a>
            </div>
        </div>`
        localStorage.setItem('listRoom',JSON.stringify(room))
        window.location.reload();
        }
    }
    
}
editRoom();
// var arr = [1,2,3,4]
// localStorage.setItem('array',JSON.stringify(arr))
// arr[2] = 100;
// localStorage.setItem('array',JSON.stringify(arr))
// room[1] = 'touched';
// console.log(room)

