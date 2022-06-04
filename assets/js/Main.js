var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');

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
    // Normal room
    var arrayRoom = JSON.parse(localStorage.getItem('listRoom'));
    var class_item = document.querySelectorAll('.item');
    var class_trashCan = document.querySelectorAll('.trashCan');
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
            } else {
                alert("Canceled");
            }
        })
    }

    // Room VIP
    var arrayRoomVIP = JSON.parse(localStorage.getItem('listRoomVIP'));
    var class_item = document.querySelectorAll('.item');
    var class_trashCan = document.querySelectorAll('.trashCanVIP');
    for (let i = 0; i < class_trashCan.length; i++) {
        class_trashCan[i].addEventListener("click",function() {
            if (confirm("This action will be delete a room !!!")) {
                for (let e = 0; e < arrayRoomVIP.length; e++) {
                    if ( arrayRoomVIP[e] === arrayRoomVIP[i]) {
                        class_item[i].remove();
                        arrayRoomVIP.splice(e, 1); 
                        localStorage.setItem('listRoomVIP',JSON.stringify(arrayRoomVIP));
                        window.location.reload();
                        alert('Delete successfully!');
                    }
                }
            } else {
                alert("Canceled");
            }
        })
    }
    
}
deleteRoom();

function checkStatus(st) {
    // var class_item = document.getElementById(id);
    var sta = '';
        if (st == "Unavailable" || st == "unavailable") {
           return sta = 'class="item disable"';
        }else{
            sta = 'class="item"'
        }
    return sta;
}

//Edit room
function editRoom() {
    // Normal Room
    var class_edit = document.querySelectorAll('.edit');
    for (let i = 0; i < class_edit.length; i++) {
        class_edit[i].onclick = function() {
            var noRoom = prompt('Enter number room:');
            var status = prompt('Status:');
            var capacity = prompt('Capacity');
            var price = prompt('Price:');
            
            room[i] = `<div ${checkStatus(status)} id="idRoom${noRoom}">
            <div class="title_room"> Room ${noRoom}</div>
            <div class="content">
                <i class="fa-solid fa-trash-can trashCan"></i>
                <i class="fa-solid fa-pen-to-square edit"></i>
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
    // VIP room
    var class_edit = document.querySelectorAll('.editVIP');
    for (let i = 0; i < class_edit.length; i++) {
        class_edit[i].onclick = function() {
            var noRoomVIP = prompt('Enter number room:');
            var status = prompt('Status:');
            var capacity = prompt('Capacity')
            var price = prompt('Price:')
            
            roomVIP[i] = `<div ${checkStatus(status)} id="idRoomVIP${noRoomVIP}>
            <div class="title_room"> Room VIP${noRoomVIP}</div>
            <div class="content">
                <i class="fa-solid fa-trash-can trashCanVIP"></i>
                <i class="fa-solid fa-pen-to-square editVIP"></i>
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
        localStorage.setItem('listRoomVIP',JSON.stringify(roomVIP))
        window.location.reload();
        }
    }
}
editRoom();

