const {Client,GatewayIntentBits} = require('discord.js')
const { message } = require('prompt')
const config = require('./config.json')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers  
    ]
})

var i = 0;
var pingOn = true //this is absolutely useless but im brainded
client.on('messageCreate',msg => {
    const roleToBePinged = `<@&${config.role_id}>`
    const channel = client.channels.cache.find(channel => channel.id === config.channel_id)

    if(msg.content === `${config.prefix}channel`){
        msg.reply(`Pings at <#${config.channel_id}>`)
    }
    if(pingOn === true){
        setInterval(() => {
            channel.send(`|| ${roleToBePinged} || Ping no: **${++i}** \n ----------------------------------------------------------------------`)
        }, 1000);
    }
})


client.on('ready', async() =>{
    console.log("Bot is ready")
})
client.login(config.token)