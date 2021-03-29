const { DiscordAPIError, MessageEmbed } = require("discord.js")

exports.run = async (bot,message,args) => {

    let embed = new MessageEmbed()

    .setTitle('***trash bot lollllll!!!!***')
    .setDescription('***hi im trash bot i have no commands now that you can use but my Developer will add some commands to me LOLOOOLLLOLOLO!!!!! ***')
    .setColor("#11d4cf")
    .setThumbnail(bot.user.avatarURL());

    message.channel.send(embed)
}
exports.help = {
name: 'help'
}
