const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Official YouTube Channel")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/aji345id"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://dsc.gg/ajidevserver")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('CatBot Music', 'https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
             .setColor('#303236')
            .addField('Invite Me!!', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
		}