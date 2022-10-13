const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");

module.exports = {
  name: "shiny",
  description: "Provides information about shiny pokemon.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp( "Increases Hit Points by 10%. Chances of finding them in the wild 1/8192 without premium account and 1/4096 with premium.");
  },
};
