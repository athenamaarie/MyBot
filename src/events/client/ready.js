const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const rest = new REST({ version: '9' }).setToken(process.env.token);
const clientId = '1117811724473614427';
guilds = [];

module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log('Registering commands for all guilds')
        await Promise.all(client.guilds.cache.map(async guild => {
            guilds.push(guild.id)
        }))

        console.log('Loading slash commands')
        await Promise.all(guilds.map(async guild => {
            await rest.put(Routes.applicationGuildCommands(clientId, guild), {
                body: client.commandArray})
        }))

        console.log(`Ready ${client.user.tag} is logged in to the following guilds:`);
        client.guilds.cache.forEach(guild => {
            console.log('-', guild.id, ': ', guild.name);
        });
    }
    
}