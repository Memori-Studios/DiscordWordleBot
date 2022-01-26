const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Wordle = require("./wordle.js");

client.once('ready', () => {
    console.log('The bot is online');
});

client.on('messageCreate', async msg => 
{
    //check for permission to post
    permision = msg.channel.permissionsFor(client.user);
    permision = permision.toArray();

    //dont respond to own messages
    if(msg.author.username === client.user.username) {return;}

    //loads a new wordle game
    if(msg.content.includes("!playwordle"))
    {
        Wordle.LoadNewWordle(msg);
    }
    //makes a guess in a wordle game
    if(msg.content.includes("!guess"))
    {
        Wordle.PlayWordle(msg);
    }
    //shows your stats
    if(msg.content.includes("!wordlestats"))
    {
        Wordle.ShowWordleStats(msg);
    }
});

client.login("put-your-token-here");