const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "help",

  description:

    "Get list of all command and even get to know every command detials",

  usage: "help <cmd>",

  category: "info",

  run: async (client, message, args) => {

    if (args[0]) {

      const command = await client.commands.get(args[0]);

      if (!command) {

        return message.channel.send("Unknown Command: " + args[0]);

      }

      let embed = new MessageEmbed()

        .setAuthor(command.name, client.user.displayAvatarURL())

        .addField("❯ Description", command.description || "Not Provided :(")

        .addField("❯ Usage", "`" + command.usage + "`" || "Not Provied")

        .setThumbnail(client.user.displayAvatarURL())

        .setColor("BLUE")

        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);

    } else {

      const embed1 = new MessageEmbed()
        .setColor('#85b0d2')
        .setTitle('Music Commands')
        .addField('join', ` Join the voice channel!`, true)
        .addField('leave', `Leaves the voice channel!`, true)
        .addField('play', `Play the requested song in the vc`, true)
        .addField('stop', `Clears the queue and leave the vc'`, true)
        .addField('pause', ` Pause the queue`, true)
        .addField('resume', ` Resume the queue`, true)
        .addField('shuffle', ` Shuffle the queue`, true)
        .addField('queue', ` Gives you info about the server queue`, true)
        .addField('remove', ` Remove a song from the queue`, true)
        .addField('loop', `Loop the queue`, true)
        .addField('disable-loop', ` Stop looping the queue`, true)
        .addField('skip', ` Skip the song that its playing.`, true)
        .addField('clear', ` Clear the queue`, true)
        .addField('playlist', `Play a playlist in the vc`, true)
        .addField('volume', `Set the volume of the bot in the vc`, true)
        .addField('nowplaying', `Gives info about the song that its being played and the progress of it`, true)
        .setTimestamp()
        .setFooter(`madr by cwkhan 😎 `)
        message.channel.send(embed1)
    }
}
}}
