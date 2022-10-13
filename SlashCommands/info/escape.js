const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { escapeData } = require("../../embeds");

module.exports = {
  name: "escape",
  description: "Provides a list of pokemon that can escape during battle.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [escapeData()]});
  },
};