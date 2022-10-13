const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
//const {  } = require("../../embeds");

module.exports = {
  name: "gold",
  description: "Provides information about gold pokemon.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ content: "Increases Speed by 10% Can only be purchased with tokens. Token are obtained by donating or FD (Friend Donation)."});
  },
};