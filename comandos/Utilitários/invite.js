const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let convite = [
	'https://discord.com/api/oauth2/authorize?client_id=745742577562681398&permissions=8&scope=bot'
];
    let embed = new Discord.RichEmbed()
	.setColor(c.cor)
	.setTitle(`<a:topgg:745770490194427914> INVITE`)
	.setDescription(`[Clique aqui](${convite}) para me adicionar em seu servidor.`)
	.setFooter(`Me ajude me adicionando em seu servidor! 😁`)

    message.channel.send(embed)
}

exports.help = {
    name: "invite",
    aliases: ["convite"]
}