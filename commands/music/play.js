const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'play',
    aliases: ['p'], // Optional
    category: 'Music',
    description: 'Play a song in the vc', 
    run: async (client, message, args) => {
        const string = args.join(" ")
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
} 
