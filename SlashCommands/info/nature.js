const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
//const { helpData } = require("../../embeds");

module.exports = {
  name: "nature",
  description: "Provides a chart for natures.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp("https://i.imgur.com/M6bmGq9.jpg");
  },
};
