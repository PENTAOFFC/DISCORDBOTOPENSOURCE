const Discord = require('discord.js'); 
const bot = new Discord.Client();
//подключаем файл конфигурации
let config = require('./botconfig.json'); 
//"достаём" токен и префикс
let token = config.token; 
let prefix = config.prefix;
//создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
});
//команда, и то, что она должна выполнить
bot.on('message', msg => {
    if (msg.content === prefix + 'lordware') {
        msg.reply('BEST');
    }
});
bot.login(token);

bot.on('message', msg => {
    if (msg.content === prefix + 'sources') {
        msg.reply('https://github.com/PENTAOFFC/DISCORDBOTOPENSOURCE/upload/main');
    }
});
bot.login(token);