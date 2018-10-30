// var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status ==200){
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' +listSong[i].link + '\',\'' + listSong[i].name + '\',\''+ listSong[i].singer +'\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlhttp.open("GET", API, true);
// xmlhttp.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + "-" + singer;
// }

    //  LAN II
// var API ='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttps = new XMLHttpRequest();
// xmlhttps.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200){
//         var listsong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listsong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listsong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listsong[i].name + '</div>';
//             content += '<div class="song-singer">' + listsong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\''+ listsong[i].link +'\',\'' + listsong[i].name +'\',\''+ listsong[i].singer +'\')">PLay</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlhttps.open("GET", API, true);
// xmlhttps.send();
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:' + name + " - " + singer;
// }


                   //LAN III
// var API ='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// // var xmlhttp = new XMLHttpRequest();
// // xmlhttp.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status ==200){
// //         var listSong = JSON.parse(this.responseText);
// //         var content = '';
// //         for (var i = 0; i < listSong.length; i++) {
// //             content += '<div class="song-item">';
// //             content += '<div class="song-index">' + (i+1) + '</div>';
// //             content += '<div class="song-thumbnail">';
// //             content += '<img src="' + listSong[i].thumbnail +'" alt="">';
// //             content += '</div>';
// //             content += '<div class="song-infor">';
// //             content += '<div class="song-name">' + listSong[i].name + '</div>';
// //             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
// //             content += '</div>';
// //             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\',\''+ listSong[i].name +'\',\''+ listSong[i].singer +'\')">Play</div>';
// //             content += '</div>';
// //         }
// //         document.getElementById('list-song').innerHTML = content;
// //     }
// // }
// // xmlhttp.open("GET", API, true);
// // xmlhttp.send();
// //
// // function playSong(link, name, singer) {
// //     document.getElementById('my-mp3').src = link;
// //     document.getElementById('current-play-title').innerHTML = 'Current playing:' + name + " - " + singer;
// // }


//                          LAN IV

// var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState ==4 && this.status ==200){
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i+1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="'+ listSong[i].thumbnail +'" alt="" >';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link +'\', \'' + listSong[i].name +'\', \'' + listSong[i].singer +'\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlhttp.open("GET", API, true);
// xmlhttp.send();
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src =link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:'+name+"-"+singer;
// }


//               LAN V

// var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange =function () {
//     if (this.readyState == 4 && this.status == 200){
//         var listSong = JSON.parse(this.responseText);
//         var content ='';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//                 content += '<div class="song-index">' + ( i + 1) + '</div>';
//                 content += '<div class="song-thumbnail">';
//                 content += '<img src="'+ listSong[i].thumbnail +'" alt="">';
//                 content += '</div>';
//                 content += '<div class="song-infor">';
//                 content += '<div class="song-name">'+ listSong[i].name + '</div>';
//                 content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//                 content += '</div>';
//                 content += '<div class="song-control" onclick="playSong(\''+ listSong[i].link +'\', \''+ listSong[i].name +'\', \'' + listSong[i].singer +'\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML =content;
//     }
// }
// xmlhttp.open("GET", API, true);
// xmlhttp.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'current playing:' + name + " - " + singer;
// }


//     LAN VI
// var API ='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttps = new XMLHttpRequest();
// xmlhttps.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200){
//         var listsong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listsong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listsong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listsong[i].name + '</div>';
//             content += '<div class="song-singer">' + listsong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\''+ listsong[i].link +'\',\'' + listsong[i].name +'\',\''+ listsong[i].singer +'\')">PLay</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlhttps.open("GET", API, true);
// xmlhttps.send();
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:' + name + " - " + singer;
// }



                  //LAN VII
// var API ='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// // var xmlhttp = new XMLHttpRequest();
// // xmlhttp.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status ==200){
// //         var listSong = JSON.parse(this.responseText);
// //         var content = '';
// //         for (var i = 0; i < listSong.length; i++) {
// //             content += '<div class="song-item">';
// //             content += '<div class="song-index">' + (i+1) + '</div>';
// //             content += '<div class="song-thumbnail">';
// //             content += '<img src="' + listSong[i].thumbnail +'" alt="">';
// //             content += '</div>';
// //             content += '<div class="song-infor">';
// //             content += '<div class="song-name">' + listSong[i].name + '</div>';
// //             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
// //             content += '</div>';
// //             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\',\''+ listSong[i].name +'\',\''+ listSong[i].singer +'\')">Play</div>';
// //             content += '</div>';
// //         }
// //         document.getElementById('list-song').innerHTML = content;
// //     }
// // }
// // xmlhttp.open("GET", API, true);
// // xmlhttp.send();
// //
// // function playSong(link, name, singer) {
// //     document.getElementById('my-mp3').src = link;
// //     document.getElementById('current-play-title').innerHTML = 'Current playing:' + name + " - " + singer;
// // }


//                          LAN VIII

// var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState ==4 && this.status ==200){
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i+1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="'+ listSong[i].thumbnail +'" alt="" >';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link +'\', \'' + listSong[i].name +'\', \'' + listSong[i].singer +'\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlhttp.open("GET", API, true);
// xmlhttp.send();
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src =link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:'+name+"-"+singer;
// }



//               LAN IX

// var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange =function () {
//     if (this.readyState == 4 && this.status == 200){
//         var listSong = JSON.parse(this.responseText);
//         var content ='';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//                 content += '<div class="song-index">' + ( i + 1) + '</div>';
//                 content += '<div class="song-thumbnail">';
//                 content += '<img src="'+ listSong[i].thumbnail +'" alt="">';
//                 content += '</div>';
//                 content += '<div class="song-infor">';
//                 content += '<div class="song-name">'+ listSong[i].name + '</div>';
//                 content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//                 content += '</div>';
//                 content += '<div class="song-control" onclick="playSong(\''+ listSong[i].link +'\', \''+ listSong[i].name +'\', \'' + listSong[i].singer +'\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML =content;
//     }
// }
// xmlhttp.open("GET", API, true);
// xmlhttp.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'current playing:' + name + " - " + singer;
// }



                 //               LAN X

var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange =function () {
    if (this.readyState == 4 && this.status == 200){
        var listsong = JSON.parse(this.responseText);
        var content ='';
        for (var i = 0; i < listsong.length; i++) {
            content += '<div class="song-item">';
                content += '<div class="song-index">' + ( i + 1) + '</div>';
                content += '<div class="song-thumbnail">';
                content += '<img src="'+ listsong[i].thumbnail +'" alt="">';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name">'+ listsong[i].name + '</div>';
                content += '<div class="song-singer">' + listsong[i].singer + '</div>';
                content += '</div>';
                content += '<div class="song-control" onclick="playSong(\''+ listsong[i].link +'\', \''+ listsong[i].name +'\', \'' + listsong[i].singer +'\')">Play</div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML =content;
    }
}
xmlhttp.open("GET", API, true);
xmlhttp.send();

function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'current playing:' + name + " - " + singer;
}