const MusicBot = require("./src/structures/MusicClient");
const { keep_alive } = require("./keep_alive");
const client = new MusicBot();

client.connect()

module.exports = client; 
