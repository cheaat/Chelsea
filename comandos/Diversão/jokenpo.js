const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    let msa = message.author;
    if(!User) return message.reply("usuário não encontrado!")

    var winner = [
        `${User}`,
        `${msa}`
    ];

    var objeto = [
        "pedra! <:Pedrinha:746035121936924824>",
        "papel! :roll_of_paper:",
        "tesoura! :scissors:"
    ];

    var objectrand = objeto[Math.floor(Math.random() * objeto.length)]
    var winnerand = winner[Math.floor(Math.random() * winner.length)]
    let embed = new Discord.RichEmbed()
        .setDescription(`Pedra... Papel... Tesoura!\n\nO ${winnerand} ganhou o **jokenpo** usando ${objectrand}`)
        .setColor(c.cor)
        .setImage("https://media.discordapp.net/attachments/595001622523019284/746037885894918295/WhichDisastrousAmurratsnake.gif")
        .setFooter("Jo... Ken... Po!")
    
    message.channel.send(embed);
}

exports.help = {
    name: "jokenpo",
    aliases: ["jokenpo2"]
}