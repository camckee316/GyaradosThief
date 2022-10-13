const { Client, Message, MessageEmbed, MessageContent } = require("discord.js"); //+Message -CommandInteraction
abilityDB = require("../../db/ability");
const { Ecolor } = require("../../embeds");

module.exports = {
  name: "ability",
  description: "ability command",

  /**
   *
   * @param { Message } message
   * @param { MessageContent } args
   * @param { Client } client
   */

   run: async (message) => {
 
    let abilityName = message.content.toLowerCase().split("/ability")[1];
  
    for (var i = 0; i < abilityDB.length; i++) {
      if (abilityName == abilityDB[i]._ability.toLowerCase()) {
        let Embed = new MessageEmbed()
          .setColor(`${Ecolor.pink}`)
          .setTitle(`Information about ${abilityDB[i]._ability} :`)
          .setDescription(`__${abilityDB[i]._desc}__`)
          .addFields(
            {
              name: "Pokemons with this ability",
              value: `${abilityDB[i]._poke}`,
              inline: true,
            },
            { name: "\u200B", value: "\u200B" },
            {
              name: "Pokemons with ability this as hidden",
              value: `${abilityDB[i]._hidden}`,
              inline: true,
            }
          ); //delete ; to add footer
        /*  .setFooter({
            text: "Hosted by wumpus.host",
            iconURL: "https://wumpus.host/images/logoTransCentral.png",
          }); //https://wumpus.host/ */
        interaction.followUp({
          content: `${interaction.user.username} here is the information your requested about **${abilityDB[i]._ability}**:`,
          embeds: [Embed],
        });

        break;
      } else if (i === abilityDB.length - 1)
        interaction.followUp(
          `${interaction.user.username} I'm sorry your having trouble. Please refer to !help for commands, check your spelling, or ping/dm camckee`
        );
    }
  },
};
