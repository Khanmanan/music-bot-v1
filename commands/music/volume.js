const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume', // Optional
    category: 'Music',
    description: 'Set the volume of the bot in the vc', 
    aliases: ['setvolume'], // Optional
        run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
        client.distube.setVolume(message, volume)
        message.channel.send(`${client.emotes.success} | Volume set to \`${volume}\``)
    }
}
    

