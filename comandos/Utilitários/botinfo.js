const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setTitle(`Informações sobre a maquina`)
        .setDescription("Versão do **BOT**: 0.1")
        .setColor(c.cor)
        .setThumbnail(bicon)
        .addField("📃 Nome do bot:", bot.user.username)
        .addField("👑 Criador:", "<@!576896667098546184>")
        .addField("📅 Data de criação:", "19 de agosto de 2020.")
        .addField("💈 Prefixo:", c.prefix)
        .addField("💻 Servidores conectados agora:", `${bot.guilds.size} servidores.`)
        .addField("👤 Usuários conectados agora:", `${bot.users.size} usúarios.`)

    message.channel.send(botembed);
}

exports.help = {
    name: "botinfo",
    aliases: ["infobot"]
}