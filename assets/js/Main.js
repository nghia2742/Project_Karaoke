var id_contain = document.getElementById('contain');
var id_containVIP = document.getElementById('containVIP');
var noRoom = 1;
var noRoomVIP = 1;

// default Room
function defaultRoom(noRoom) {
    for (let i = 1; i < 9; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<div class="title_room"> Room ${noRoom++}</div>
                        <div class="content">
                            <i class="fa-solid fa-trash-can"></i>
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
                        </div>`
        var str = '<div class="item">' + div.innerHTML + '</div>';
        localStorage.setItem('room'+ String(noRoom - 1),str);
    }
}
defaultRoom(noRoom);

// default Room VIP
function defaultRoomVIP(noRoomVIP) {
    for (let i = 1; i < 5; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<div class="title_room"> Room ${noRoomVIP++}</div>
                        <div class="content">
                            <i class="fa-solid fa-trash-can"></i>
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
                        </div>`
        var str = '<div class="item">' + div.innerHTML + '</div>';
        localStorage.setItem('roomVIP'+ String(noRoomVIP - 1),str);
    }
}
defaultRoomVIP(noRoomVIP);

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
                            Capacity: 6 people
                            Price: 5$ an hour
                        </div>
                        <a href="Order.html" target="_self" >
                            <button class="btn">Order</button>
                        </a>
                    </div>`
    // Press to show a room on screen
    id_contain.insertBefore(div,id_contain.children[noRoom - 2]);
    // Save a room into localStorage
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
                            Price: 25$ an hour
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
            if (localStorage.key(index).length < 7 && localStorage.key(1).substring(0, 4).localeCompare("room")==0) {
                const div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = `<div class="title_room"> Room ${noRoom++}</div>
                                <div class="content">
                                    <i class="fa-solid fa-trash-can"></i>
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
                                </div>`
                id_contain.insertBefore(div,id_contain.children[noRoom - 2]);
            }
            if (localStorage.key(index).substring(0, 7).localeCompare("roomVIP")==0) {
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
                                        Price: 25$ an hour
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
// Delete a room -------------------------------------------------



