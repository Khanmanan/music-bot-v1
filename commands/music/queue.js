const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue', // Optional
    aliases: ['q'], // Optional
    category: 'Music',
    description: 'Gives you info about the server queue', 

        run: async (client, message, args) => {
          const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(`${client.emotes.queue} | **Server Queue**\n${q}`)
    }
}