const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { followerData } = require("../../embeds");

module.exports = {
  name: "follower",
  description: "Provides a list of pokemon that can follow you in game.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction,  args) => {
    interaction.followUp({ embeds: [followerData()]});
  },
};