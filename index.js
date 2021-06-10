const discord = require('discord.js');
const config = require('./configuration.json');
const fs = require('fs');
const client = new discord.Client();
client.commands = new discord.Collection();
client.events = new discord.Collection();
['command', 'event']
client.on('ready', () => {
    console.log(`${client.user.tag} Has came online!`)
    client.user.setActivity(config["main_config"].status)
})
client.on('channelCreate', (channel) => {
    console.log(`${channel} Has been Created`);
});
client.on('channelDelete', (channel) => {
    console.log(`${channel} Has been Deleted`);
});
client.on('messageDelete', (message) => {
    console.log(`The message '${message}' Has been Deleted`);
});
client.on('guildMemberAdd', (member) => {
    console.log(`${member} Has joined the discord!`);
    const channel = member.guild.channels.cache.get(config["logs"].join_id)
    const add = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome User!')
        .setDescription(`Welcome to Brackzz Discord, <@${member.id}> (@${member.user.tag})`)
        .setFooter(config["main_config"].copyright)
    channel.send(add);
});
client.on('rateLimit', (rateLimitInfo) => {
    console.log(rateLimitInfo);
});
client.on('message', message => {
    if (message.content.includes()) {
        message.delete()
    } else if (message.content.includes(config["Bad_words"].badword1)) {
        message.delete()
    } else if (message.content.includes(config["Bad_words"].badword2)) {
        message.delete()
    } else if (message.content.includes(config["Bad_words"].badword3)) {
        message.delete()
    }
    console.log(`Deleted a Message in ${message.guild.name}`)
});
client.login(config["main_config"].token);