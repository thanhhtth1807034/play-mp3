var arrayMp3 = new Array(
    {
        id:'ZW9DC99A',
        name:'thang dien',
        singer:'justatee'
    },
    {
        id: 'ZW9DFW8O',
        name: 'hongkong1',
        singer:'nguyen trong tai'
    },
    {
        id: 'ZW9DFW8O',
        name: 'tan cung cua noi nho',
        singer:'nguyen trong tai'
    },
    {
        id:'ZW9DC99A',
        name:'em gai mua',
        singer:'justatee'
    },
    {
        id: 'ZW9DFW8O',
        name: 'hello',
        singer:'nguyen trong tai'
    },
    {
        id: 'ZW9DFW8O',
        name: 'hongkong1',
        singer:'nguyen trong tai'
    }

);



var idMp3 =document.getElementById('list-mp3');
if (idMp3 != null){
    for (var i = 0; i < arrayMp3.length; i++) {
        var itemMp3 = '<div class="mp3-item">';
        itemMp3 += '<iframe scrolling="no" width="640" height="180" src="https://mp3.zing.vn/embed/song/ZW9DFW9A?start=true" frameborder="0" allowfullscreen="true"></iframe>';
        itemMp3 += '<h3>' + arrayMp3[i].name + '</h3>';
        itemMp3 += '</div>';
        idMp3.innerHTML += itemMp3;
    }
}