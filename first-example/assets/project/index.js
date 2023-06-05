const tmi = require('tmi.js');
const cassandra = require('cassandra-driver');

const client = new tmi.Client({
    channels: ['danielhe4rt'],
    joinInterval: 300
});

const cluster = new cassandra.Client({
    contactPoints: ["172.17.0.2", "172.17.0.3", "172.17.0.4"],
    credentials: {username: 'scylla', password: 'secret-password'},
    localDataCenter: 'localhost',
    keyspace: 'twitch_sentinel'
})

async function insertOnDatabase(user, message) {
    let query = `INSERT INTO messages (streamer_id, chatter_id, chatter_username, chatter_message, message_sent_at) VALUES ('${user['room-id']}', '${user['user-id']}', '${user['display-name']}', '${message}', ${user['tmi-sent-ts']})`
     await cluster.execute(query);
}


client.connect();

client.on('message', (channel, user, message, self) => {
        console.log(`${channel} -> ${user['display-name']}: ${message}`);
    insertOnDatabase(user, message)
});