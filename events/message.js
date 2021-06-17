const config = require('../config.json');
const Discord = require('discord.js');
exports.run = async(client, message) => {
    if (config.filter.enabled === true){
        config.filter.disabledwords.forEach(eachWord => {
            if (message.content.toLowerCase().search(eachWord.toLowerCase()) >= 0) {
                message.delete().catch();
                const help = new Discord.MessageEmbed().setDescription(`You are not allowed to say that in this guild `).setTimestamp().setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`).setColor(config.embeds.color);
                message.channel.send(help).then((messagess) => {
                    setTimeout(function () {
                        messagess.delete().catch();
                    }, 10000);
                });
                message.author.send(help).catch();
            }
        });
    }

    if (config.disablediscordlinks === true) {
        const help = ["discord.gg", "discord.com/invite/"];
        if (help.some((messageword) => message.content.toLowerCase().includes(messageword))) {
            message.delete().catch();
            const help = new Discord.MessageEmbed().setDescription("You are not allowed to use discord links in this guild").setTimestamp().setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`).setColor(config.embeds.color);
            message.channel.send(help).then((messagess) => {
                setTimeout(function () {
                    messagess.delete().catch();
                }, 10000);
            });
            message.author.send(help).catch();
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
                    messagess.delete().catch();
                }, 10000);
            });
            message.author.send(help).catch();
        }
    }
};

    

