const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async(client, message ) => {
	console.log(`Logged in as ${client.user.tag}!!\n\x1b[31m%s\x1b[0m', Made by Popcorn The Crappy Dev#1001`)
	client.user.setPresence({ activity: {name: config.main.presence_name, type: config.main.presence_type }, status: config.main.presence_status });
}
