const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { timeData } = require("../../embeds");

module.exports = {
  name: "time",
  description: "Provides information about server time & Day-Night cycle.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [timeData()]});
  },
};
