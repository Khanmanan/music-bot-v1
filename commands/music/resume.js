const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume', // Optional
    aliases: ['resume'], // Optional
    category: 'Music',
    description: 'Resume the song that was paused', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
         const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        client.distube.resume(message)
        message.channel.send("Resumed the song for you :)")
    }
}
