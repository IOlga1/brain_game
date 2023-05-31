const ws = require('ws');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // БЕЗ ЭТОГО: (node:22276) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.(Use `node --trace-deprecation ...` to show where the warning was created)
const Room = require('./models/room.js');

const wsServer = new ws.Server({ port: 5000 }, () => console.log(`Server started on 5000`))


try {
    mongoose.connect('mongodb://localhost:27017/quiz_game');
} catch (error) {
    console.log(error)
}



wsServer.on('connection', (wsClient) => {
    console.log('open')

    wsClient.on('message', async (message) => {
        message = JSON.parse(message)
        // console.log(message)
        switch (message.event) {

            case 'NEW_ROOM_NEW_PLAYER_1':
                const newRoomId = 'r_' + Date.now()
                const newRoom = {
                    idRoom: newRoomId,
                    player1: {
                        id: 'p_' + Date.now(),
                    },
                    player2: {
                        id: '',
                    },
                }
                const room = new Room(newRoom)
                await room.save()
                ws.id = newRoomId
                wsServer.clients.forEach(item => console.log('W: ' + item.id)) //
                ws.send(JSON.stringify(room))
                break;

            case 'LOAD_GAME_PAGE':
                ws.id = message.idRoom;
                wsServer.clients.forEach(item => console.log('W: ' + item.id)) //
                ws.send(JSON.stringify('LOAD_GAME_PAGE'))
                console.log('LOAD_GAME_PAGE')
                break;

            case 'NOT_PLAYER_LOAD_GAME_PAGE':
                console.log(message)
                // ws.id = message.idRoom;
                wsServer.clients.forEach(item => console.log('W: ' + item.id)) //
                ws.send(JSON.stringify('NOT_PLAYER_LOAD_GAME_PAGE'))
                console.log('NOT_PLAYER_LOAD_GAME_PAGE')
                break;



            case 'ACTION':
                ws.send(JSON.stringify('ACTION'))
                console.log('ACTION')
                break;

        }
    })

    wsClient.on('close', async () => {
        console.log('close')
        // действия когда чел выходит (возможно просто перезагрузил страницу)
    })

    wsClient.on('error', async (error) => {
        console.log(error)
    })
})