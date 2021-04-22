const config = require('../config.json');
const Discord = require('discord.js');
exports.run = async(client, message) => {

    if(config['user(s)id(s)'].some(ids=> message.content.toLowerCase().includes(ids))){
        message.delete()
        const help = new Discord.MessageEmbed()
        .setTitle(`Please Don't Ping Me`)
        .setTimestamp()
        .setFooter('No Ping | Made by Popcorn The Crappy Dev#1001')
        .setColor('#d60d0d')
        message.channel.send(help).then(messagess => {
            setTimeout(function(){
                messagess.delete()
               },10000 )
        })
        message.author.send(help).then(messagess => {
            setTimeout(function(){
                messagess.delete()
               },10000 )
        })
    }
    if(config.filter.disabled_words.some(messageword => message.content.toLowerCase().includes(messageword))){
        message.delete()
        const help = new Discord.MessageEmbed()
        .setDescription(`You are not allowed to say that in this guild `)
        .setTimestamp()
        .setFooter('Server Filter', `${message.author.avatarURL()}`)
        .setColor('#d60d0d')
        message.channel.send(help).then(messagess => {
            setTimeout(function(){
                messagess.delete()
               },10000 )
        })
        message.author.send(help)
    }
}   
    if(config.filter.disablediscordlinks === 'false'){
    }else {
    const help = ["discord.gg", "discord.com/invite/"]
    if(help.some(messageword => message.content.toLowerCase().includes(messageword))){
    message.delete()
    const help = new Discord.MessageEmbed()
    .setDescription('You are not allowed to use discord links in this guild')
    .setTimestamp()
    .setFooter('Server Filter', `${message.author.avatarURL()}`)
    .setColor('#d60d0d')
    message.channel.send(help).then(messagess => {
        setTimeout(function(){
            messagess.delete()
           },10000 )
    })
    message.author.send(help)
}
};

    

