 var socket = io.connect('http://even.loc:3000');

        socket.on('api-data:App\\Events\\ApiDataListener', function (data) {
            alert(1);
            console.log(data);
        });
socket.emit('get-data',data);
