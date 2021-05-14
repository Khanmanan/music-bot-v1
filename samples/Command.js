module.exports = {
    name: "Commandname",
    description: "CommandDescription",
    category: "ComamndCategory",
    botPermission: [], // like ["ADMINISTRATOR"]
    authorPermission: [], // like ["MANAGE_ROLES"]
    ownerOnly: false, // Set your owner id at config.json
    run: async (client, message, args) => {
        message.channel.send("Test command working.");
    }
}
