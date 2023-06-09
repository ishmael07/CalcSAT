const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('calcsat')
        .setDescription('beta command')
        .addStringOption(option => option.setName('ela').setRequired(true).setDescription('Enter the total number of ela questions you got correct out of 57 total questions'))
        .addStringOption(option => option.setName('math').setRequired(true).setDescription('Enter the total number of math questions you got correct out of 57 total questions')),

    
    async execute(interaction) {
      
        let satmath = interaction.options.getString('satmath');
        let satreading = interaction.options.getString('satreading');
        let satwriting = interaction.options.getString('satwriting');

        let almostMath = Math.round(((9.704(satmath))+ 238) /10) *10
        let almostReading = Math.round(((0.5681(satreading)) +10.51)/10) *10 
        let almostWriting = Math.round((0.6818(satwriting)+ 10) /10) *10

        let satEBRW = (almostReading + almostWriting) * 10
        
        let finalScore = (almostMath + satEBRW);

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your Score')
            .setFooter('Please Remember that this is an approximate estimate of what your score might be.')
            .setDescription(`Your score is: ${finalScore}`)

        try {
            await interaction.reply({
              embeds: [embed],
              ephemeral: true })
        } catch (error) {
            console.error(error)
        }
    }
}
