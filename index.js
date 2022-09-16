const {Client,GatewayIntentBits} = require('discord.js')
const config = require('./config.json')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers  
    ]
})

client.on('messageCreate',msg => {
    var pingOn = false
    const roleToBePinged = `<@&${config.role_id}>`
    const channel = client.channels.cache.find(channel => channel.id === config.guild_id)
    var i = 0;
    if(msg.content === `<@${config.bot_id}>`){
        msg.reply("My prefix is `" + config.prefix + "`")
    }
    if(msg.content == `${config.prefix} help`){
        msg.reply(`Do **${config.prefix} start** to start pinging \n Do **${config.prefix} stop** to stop pinging`)
    }
    if(msg.content === `${config.prefix} start`){
            msg.reply("Started pinging")
            pingOn = true
            console.log("State: " + pingOn);
        
    }else if(msg.content === `${config.prefix} stop`){
            msg.reply("Stopped pinging")
            process.exit(0)
        
    }

    if(pingOn === true){
        setInterval(() => {
            channel.send(`${roleToBePinged} \n ---------------------------------------------------------------------- \n Ping no: **${++i}** \n ----------------------------------------------------------------------`)
        }, 1000);
    }
})


client.on('ready', async() =>{
    console.log("Bot is ready")
})
client.login(config.token)