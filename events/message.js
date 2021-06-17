const config = require('../config.json');
const Discord = require('discord.js');
exports.run = async(client, message) => {
    if (config.filter.enabled === true){
        if (config.filter.disabledwords.some((messageword) => message.content.toLowerCase().includes(messageword))) {
            message.delete().catch();
            const help = new Discord.MessageEmbed().setDescription(`You are not allowed to say that in this guild `).setTimestamp().setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`).setColor(config.embeds.color);
            message.channel.send(help).then((messagess) => {
                setTimeout(function () {
                    messagess.delete();
                }, 10000);
            });
            message.author.send(help);
        }
    }

    if (config.disablediscordlinks === true) {
        const help = ["discord.gg", "discord.com/invite/"];
        if (help.some((messageword) => message.content.toLowerCase().includes(messageword))) {
            message.delete();
            const help = new Discord.MessageEmbed().setDescription("You are not allowed to use discord links in this guild").setTimestamp().setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`).setColor(config.embeds.color);
            message.channel.send(help).then((messagess) => {
                setTimeout(function () {
                    messagess.delete();
                }, 10000);
            });
            message.author.send(help);
        }
    }
    if(config['no ping'].enabled === true){
        const help = config['no ping']['user ids(if enabled)']
        if (help.some((messageword) => message.content.toLowerCase().includes(messageword))) {
            const help = new Discord.MessageEmbed()
            .setDescription(`Please don't ping me!`)
            .setTimestamp()
            .setImage(config['no ping']['image url'])
            .setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`)
            .setColor(config.embeds.color);
            message.channel.send(help).then((messagess) => {
                setTimeout(function () {
                    messagess.delete();
                }, 10000);
            });
            message.author.send(help);
        }
    }
};

    

