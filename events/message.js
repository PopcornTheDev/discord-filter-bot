const config = require('../config.json');
const Discord = require('discord.js');
exports.run = async (client, message) => {
    if (config.filter.enabled === true) {
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
    if (config.filter.disablediscordlinks === true) {
        const help = ["discord.gg", "discord.com/invite/"];
        help.forEach(eachWord => {
            if (message.content.toLowerCase().search(eachWord.toLowerCase()) >= 0) {
                message.delete().catch();
                const help = new Discord.MessageEmbed().setDescription("You are not allowed to use discord links in this guild").setTimestamp().setFooter(config.embeds["footer message"] || "Server Filter", `${message.author.avatarURL()}`).setColor(config.embeds.color);
                message.channel.send(help).then((messagess) => {
                    setTimeout(function () {
                        messagess.delete().catch();
                    }, 10000);
                });
                message.author.send(help).catch();

            }
        });
    }
    if (config['no_ping'].enabled === true) {

        const help = config['no_ping']['user(s)id(s)']
        help.forEach(eachWord => {
            if (message.content.toLowerCase().search(eachWord.toLowerCase()) >= 0) {
                const help = new Discord.MessageEmbed()
                    .setDescription(`Please don't ping me!`)
                    .setTimestamp()
                    .setImage(config['no_ping']['image_url'])
                    .setFooter(config.embeds["footer_message"] || "Server Filter", `${message.author.avatarURL()}`)
                    .setColor(config.embeds.color);
                message.channel.send(help).then((messagess) => {
                    setTimeout(function () {
                        messagess.delete().catch();
                    }, 10000);
                });
                message.author.send(help).catch();
            }
        });
    }
}
