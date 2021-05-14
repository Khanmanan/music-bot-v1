const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pause', // Optional
    aliases: ['paus'], // Optional
    category: 'Music',
    description: 'Pause the queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send("Resumed the song for you :)")
        }
        client.distube.pause(message)
        message.channel.send("Paused the song for you :)")
    }
}
