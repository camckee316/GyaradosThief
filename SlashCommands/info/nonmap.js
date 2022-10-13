const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { nonmapData } = require("../../embeds");

module.exports = {
  name: "nonmap",
  description: "Provides a list of non-map pokemon.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [nonmapData()]});
  },
};
