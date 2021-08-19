const fs = require('fs');
const { Client, Collection } = require('discord.js');
const config = require('./config.json');

class Popcorn extends Client {
    constructor(options = {}) {
        super(options);
        this.events = new Collection()
    }
}

const client = new Popcorn()

client.events = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        console.log("Successfully loaded " + file)
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
    });
});

client.login(config.main.token)
