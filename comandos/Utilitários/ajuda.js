const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    message.delete()

    var embedInicial = new Discord.RichEmbed()

    .setDescription(`Olá ${message.author}, se você utilizou esse comando deve ser porque está com dificuldades de utilizar as minhas atribuições, então vamos lá!\n
    **Veja as reações abaixo:**`)
    .addField(`[🎉] - **__DIVERSÃO__**`, `Comandos de Diversão`)
    .addField(`[👨‍🎓] - **__MODERAÇÃO__**`, `Comandos de Moderação`)
    .addField(`[🔧] - **__UTILITÁRIOS__**`, `Comandos úteis`)
    .addField(`[🌎] - **__MINECRAFT__**`, `Comandos relacionados a Minecraft`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
    .setFooter(`• Comandos disponíveis: 16+`)
  
    let embed1 = new Discord.RichEmbed()
    .setDescription(`[🎉] - **__DIVERSÃO__**:\n
    • **${c.prefix}hug** - Abraçar algum membro do servidor.
    • **${c.prefix}kiss** - Beijar algum membro do servidor.
    • **${c.prefix}batalhar** - Batalhar contra alguém do servidor.
    • **${c.prefix}slap** - Dar um tapa em algum membro do servidor.
    • **${c.prefix}highfive** - Cumprimentar algum membro do servidor.
    • **${c.prefix}jokenpo** - Jogar jokenpo contra alguém do servidor.
    • **${c.prefix}chelsea** - Fazer perguntas à Chelsea.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
  
    let embed2 = new Discord.RichEmbed()
    .setDescription(`[👨‍🎓] - **__MODERAÇÃO__**:\n
    • **${c.prefix}clear** - Deletar as mensagens de algum canal.
    • **${c.prefix}lock** - Travar algum canal do servidor.
    • **${c.prefix}unlock** - Destravar algum canal do servidor.
    • **${c.prefix}kick** - Expulsar algum membro do servidor.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
  
    let embed3 = new Discord.RichEmbed()
    .setDescription(`[🔧] - **__UTILITÁRIOS__**:\n
    • **${c.prefix}ajuda** - Visualizar os meus comandos.
    • **${c.prefix}avatar** - Visualizar o avatar de algum membro.
    • **${c.prefix}botinfo** - Visualizar as informações da maquina.
    • **${c.prefix}botinfo** - Visualizar as informações sobre algum membro.
    • **${c.prefix}invite** - Me adicionar em seu servidor.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)

    let embed4 = new Discord.RichEmbed()
    .setDescription(`[🌎] - **__MINECRAFT__**:\n
    • **${c.prefix}mchead** - Visualizar a cabeça da skin de algum jogador.
    • **${c.prefix}mcskin** - Visualizar a skin de algum jogador.
    • **${c.prefix}mcbody** - Visualizar o corpo de algum jogador.
    • **${c.prefix}mcserver** - Visualizar as informações sobre algum servidor.`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(c.cor)
   
    message.channel.send(embedInicial).then(async msg => {
  
    await msg.react("🔙")
    await msg.react("🎉")
    await msg.react("👨‍🎓")
    await msg.react("🔧")
    await msg.react("🌎")
   
    const inicio = msg.createReactionCollector((r, u) => r.emoji.name === "🔙" && u.id === message.author.id, { time: 120000 });
    const diver = msg.createReactionCollector((r, u) => r.emoji.name === "🎉" && u.id === message.author.id, { time: 120000 });
    const mod = msg.createReactionCollector((r, u) => r.emoji.name === "👨‍🎓" && u.id === message.author.id, { time: 120000 });
    const utils = msg.createReactionCollector((r, u) => r.emoji.name === "🔧" && u.id === message.author.id, { time: 120000 });
    const mine = msg.createReactionCollector((r, u) => r.emoji.name === "🌎" &&u.id === message.author.id, { time: 120000 });
  
    inicio.on('collect', async r => {
      msg.edit(embedInicial)
      r.remove(message.author.id)
    })
  
    diver.on('collect', async r => {
      msg.edit(embed1)
      r.remove(message.author.id)
    })
  
    mod.on('collect', async r => {
      msg.edit(embed2)
      r.remove(message.author.id)
    })
  
    utils.on('collect', async r => {
      msg.edit(embed3)
      r.remove(message.author.id)
    })

    mine.on('collect', async r => {
      msg.edit(embed4)
      r.remove(message.author.id)
    })
    })
}

exports.help = {
    name: "ajuda",
    "aliases": ["comandos, ajuda"]
}