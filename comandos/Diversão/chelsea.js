const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    if(args.length <= 1){
        message.reply("desculpe, não entendi.")
    }
    var respostas = [
        'creio que sim.',
        'talvez...',
        '😳',
        'hmmmmmm... 🤔',
        'nahh',
        'acho que não.',
        'eu acho que você não deveria se importar com a opinião dos outros.',
        'não importa o que eu diga, você deve seguir o seu coração! 😘',
        'isso é sério?',
        'sim! 😈'
    ];
    var rand = respostas[Math.floor(Math.random() * respostas.length)];
    let msa = message.author;

    if(args.length >= 1){
        message.channel.send(`${msa}, ${rand}`)
    }
}

exports.help = {
    name: "chelsea",
    aliases: ["perguntas", "respostas"]
}