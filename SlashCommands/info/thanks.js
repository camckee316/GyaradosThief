const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { thanksData } = require("../../embeds");

module.exports = {
  name: "thanks",
  description: "Special thanks to those who have helped and are helping with the making of GT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [thanksData()]});
  },
};
