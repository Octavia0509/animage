# DISCORD DROPS

> **A package that allows you to obtain images of animals**

## ⚡ Installation

<a href="https://nodei.co/npm/animage/"><img src="https://nodei.co/npm/animage.png?downloads=true&downloadRank=true&stars=true"></a>

## 🎉 Utilisation
```js
const Animage = require('animage');
const Discord = require('discord.js');

const bot = new Discord.Client();
const animage = new Animage.Client(bot);

bot.on('message', async message => {
    if (message.author.bot || !message.guild) return;
    
    // DOG
    if(message.content === "!dog") {
        await animage.dog(message, true) // True => Image will be sended in an embed / False => Normal message
    };
    // CAT
    if(message.content === "!cat") {
        await animage.cat(message, true) // Same
    };
    // Many others avaivable metholds that works same as those above : panda, koala, fox
    // There is a "random" method:
    if(message.content === "!random") {
        await animage.random(message);
    };
});

bot.login('TOKEN');
```

## 📸 Examples
<center>
    <img src="https://cdn.discordapp.com/attachments/792362346806902814/798981192040054804/unknown.png" alt="CAT">
    <br/>
    <img src="https://cdn.discordapp.com/attachments/792362346806902814/798981245211377664/unknown.png" alt="DOG">
    <br />
    <img src="https://cdn.discordapp.com/attachments/792362346806902814/798981736229896213/unknown.png" alt="RANDOM">
</center>

## 👤 Auteur
> **Lucas D.** | Discord: **Oϲτανια#5573** (ID: `638474353842978816`)

* GitHub : [Cliquez ici](https://github.com/Octavia0509)
* Support : [Cliquez ici](https://discord.gg/WmxCKvRnKh)

## 📝 License
© Lucas D - 2021

> Ce projet est sous license **MIT**.