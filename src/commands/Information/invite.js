const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "Invite Mystic Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("YouTube Channel")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/aji345id"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://dsc.gg/ajidevserver")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('CatBot Music Plus', 'https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
             .setColor('#303236')
            .addField('Invite Me!!', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}