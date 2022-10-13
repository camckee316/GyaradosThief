const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { dropData } = require("../../embeds");

module.exports = {
  name: "drop",
  description: "Provides a list of pokemon that may drop items.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [dropData()]});
  },
};