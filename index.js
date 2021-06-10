const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
let token = 'TOKEN_HERE';
client.on('ready', () => {
    console.log(`${client.user.tag} Has came online!`)
     client.user.setActivity('')
});
client.on('message', message => {
    if (message.content.includes()) {
        message.delete()
    } else if (message.content.includes('')) {
        message.delete()
    } else if (message.content.includes('')) {
        message.delete()
    } else if (message.content.includes('')) {
        message.delete()
    }
    console.log(`Deleted a Message in ${message.guild.name}`)
});
client.login(token)
