# PingGoBRRRR
### A Discord bot made by discord.js that pings a role continuously

## This bot is inspired an bot called [pingr](https://github.com/gebwyd/pingr). I recommend you to check it out. (Their discord server got termed 💀)

### The bot sends a ping to specified role every second. If you are to add this to your server, make the role a react-to-get role or people defo gonna start leaving

## To run the bot:
### Install discord.js by running `npm i discord.js` in your directory
### Go to `config.json` and enter the given fields which are:
```json
{
    "token": "",
    "guild_id": "",
    "role_id": "",
    "bot_id": "",
    "prefix": ""
}
```

## Commands
Usage | Description
------------ | -------------
<prefix> start | This will start pinging mentioned role.
<prefix> stop | This command will stop pinging.

## Changing the time:
### To change the time that the bot sends the messages, go to `index.js`
```js
    if(pingOn === true){
        setInterval(() => {
            channel.send(`${roleToBePinged} \n ---------------------------------------------------------------------- \n Ping no: **${++i}** \n ----------------------------------------------------------------------`)
        }, 1000)
```
### Change the 1000 to your wish. The number entered will be in milliseconds so calculate the time accordingly
