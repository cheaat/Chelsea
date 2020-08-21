const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot) => {
    console.log(`${bot.user.username} está online!\nAtualmente estou em ${bot.guilds.size} servidores`)
    function botStatus() {
        let status = [
            `😱 Nossa! Estou em ${bot.guilds.size} servidores!`,
            `😚 Gostou de mim? Me ajude me adicionando em seu servidor, digite: ${c.prefix}invite`,
            `🧐 Está precisando de ajuda? Digite: ${c.prefix}ajuda`,
            `😉 Com dificuldade? Digite: ${c.prefix}ajuda`,
            `🚀 Estou aqui para te divertir!`,
            `🔎 Quais minhas funcionalidades? Diversão, moderação e entreterimento!`
        ];
        let rstatus = Math.floor(Math.random() * status.length);

        bot.user.setActivity(status[rstatus], {type: 'STREAMING', url: "https://www.twitch.tv/twitch"});
      };
  setInterval(botStatus, 7000);
}