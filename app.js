var app = require('./config/server');

var server = app.listen(80, function(){
    console.log("Server ON");
});

var io = require('socket.io').listen(server); //Socket.io listen to server

app.set('io', io);

io.on('connection', function(socket){ //connection with websocket 
    console.log("user logged");

    socket.on('disconnect', function(){
        console.log('user logoff');
    });


    socket.on('msgParaServidor', function(data){
        //conversation
        socket.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        );


        //people in conversation
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'partcipantesParaCliente', 
                {apelido: data.apelido}
            );
    
            socket.broadcast.emit(
                'partcipantesParaCliente', 
                {apelido: data.apelido}
            );
        }  
    });
});