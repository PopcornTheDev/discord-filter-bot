
const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async(client, message ) => {
  	client.on("ready", async () => {
    		console.log(`Logged in as ${client.user.tag}!!\n\x1b[31m%s\x1b[0m', Made by Popcorn The Crappy Dev#1001`)
	});
}
