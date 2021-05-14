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

      const commands = await client.commands;

      let emx = new MessageEmbed()

        .setDescription('**Heloo i am cwk music bot i support <:spotify:842405194217947176> <a:fx_Youtube:842405195211603978>  made using discord.js made by cwkhan*')

  

        .setColor("BLUE")

        .setFooter(client.user.username, client.user.displayAvatarURL())

        

        .setThumbnail(client.user.displayAvatarURL());

          

      let com = {};

      for (let comm of commands.array()) {

        let category = comm.category || "Unknown";

        let name = comm.name;

        if (!com[category]) {

          com[category] = [];

        }

        com[category].push(name);

      }

      for(const [key, value] of Object.entries(com)) {

        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);

      }

     emx.addField('important links ','**<:CPTNLINK:830835407343714325> [Support](https://dsc.gg/cwkhan)**  | **[invite](https://dsc.gg/cwkmusic)**')

      return message.channel.send(emx);

    }

  }

};





