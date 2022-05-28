var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');
var noRoom = 9;
var noRoomVIP = 5;

// ADD NORMAL ROOM
function addRoom() {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<div class="title_room"> Room ${noRoom++}</div>
                    <div class="content">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <img class="pic_content" src="./assets/image/pic_content.jpg">
                        <div class="info">
                            Status: Empty
                            Capacity: 8 people
                        </div>
                        <a href="Order.html" target="_self" >
                            <button class="btn">Order</button>
                        </a>
                    </div>`
    id_contain.insertBefore(div,id_contain.children[noRoom - 2]);
    var str = '<div class="item">' + div.innerHTML + '</div>';
    localStorage.setItem('room'+ String(noRoom - 1),str);
}

// ADD VIP ROOM
function addRoomVIP() {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<div class="title_room"> Room VIP ${noRoomVIP++}</div>
                    <div class="content">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <img class="pic_content" src="./assets/image/pic_content.jpg">
                        <div class="info">
                            Status: Empty
                            Capacity: 10 people
                        </div>
                        <a href="Order.html" target="_self" >
                            <button class="btn">Order</button>
                        </a>
                    </div>`
    id_containVIP.insertBefore(div,id_containVIP.children[noRoomVIP - 2]);
    var str = '<div class="item">' + div.innerHTML + '</div>';
    localStorage.setItem('roomVIP'+ String(noRoomVIP - 1),str);
}

function loadDataRoom() {
    if (localStorage.length != 0) {
        for (let index = 0; index < localStorage.length; index++) {
            if (localStorage.key(index).length < 7) {
                const div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = `<div class="title_room"> Room ${noRoom++}</div>
                                <div class="content">
                                    <i class="fa-solid fa-trash-can"></i>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <img class="pic_content" src="./assets/image/pic_content.jpg">
                                    <div class="info">
                                        Status: Empty
                                        Capacity: 8 people
                                    </div>
                                    <a href="Order.html" target="_self" >
                                        <button class="btn">Order</button>
                                    </a>
                                </div>`
                id_contain.insertBefore(div,id_contain.children[noRoom - 2]);
            }
            else {
                const div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = `<div class="title_room"> Room VIP ${noRoomVIP++}</div>
                                <div class="content">
                                    <i class="fa-solid fa-trash-can"></i>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <img class="pic_content" src="./assets/image/pic_content.jpg">
                                    <div class="info">
                                        Status: Empty
                                        Capacity: 10 people
                                    </div>
                                    <a href="Order.html" target="_self" >
                                        <button class="btn">Order</button>
                                    </a>
                                </div>`
                id_containVIP.insertBefore(div,id_containVIP.children[noRoomVIP - 2]);
            }
        }
    }
}

loadDataRoom();




