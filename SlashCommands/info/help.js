const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { helpData } = require("../../embeds");

module.exports = {
  name: "help",
  description: "Provides a command list for GyradosThief 2.0.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [helpData()]});
  },
};
