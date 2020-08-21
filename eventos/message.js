const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot, message) => {
    if(message.isMentioned(bot.user)) {

        let embed = new Discord.RichEmbed()
        
        .setTitle("<a:sino:745768704356253757> | Chelsea")
        .setDescription(`<a:topgg:745770490194427914> | Prefixo: ${c.prefix}
        <a:dancinha:745770611753615360> | Comando de ajuda: ${c.prefix}ajuda`)
        .addField(`**Quem sou eu?**`, `Meu nome é Chelsea, sou um simples BOT de Discord, com minhas funções voltadas para a sua diversão e entreterimento, sempre buscando melhorar!`)
        .addField(`**Quais minhas utilidades?**`, `Tenho um total de 40+ comandos, busco atender todas as necessidades e requisições que você possa ter de um simples BOT, com foco para diversão, entreterimento e moderação.`)
        .addField(`**Manutenção?**`, `Como qualquer maquina, as vezes será preciso passar por períodos de manutenção, mas tudo é pensando em acrescentar mais funcionalidades e corrigir meus erros.`)
        .addField(`**Quem é meu criador?**`, `O meu desenvolvedor é o <@!576896667098546184>.`)
        .setColor(c.cor)
        .setThumbnail(bot.user.displayAvatarURL)
        .setFooter(`Gostou de mim? Me adicione em seu servidor! 😁`)
        
        message.channel.send(embed)
    }
}