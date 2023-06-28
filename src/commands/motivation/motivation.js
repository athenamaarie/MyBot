const { SlashCommandBuilder } = require("discord.js");
const motivation = require('./../../common/motivation');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('motivation')
        .setDescription('Get a motivational message'),
    async execute(interaction, client){
        const message = await interaction.deferReply({fetchReply: true});
        let msg = await motivation.main();
        await interaction.editReply({content: msg});
    }
}