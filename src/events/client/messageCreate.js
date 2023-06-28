const {EmbedBuilder} = require('discord.js');
const motivation = require('./../../common/motivation');


module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client){
        if(!message.author.bot) {
            if(message.content.toLowerCase() === 'motivation') {
                
                let msg = await motivation.main();
                message.reply({content: msg});
            }
            
        }
    }
}