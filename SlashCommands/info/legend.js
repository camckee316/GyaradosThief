const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { legendData } = require("../../embeds");

module.exports = {
  name: "legend",
  description: "Provides a list of legendary & mythical pokemons found in the game.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [legendData()]});
  },
};
