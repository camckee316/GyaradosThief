const {
  Client,
  CommandInteraction,
  Message,
  MessageEmbed,
} = require("discord.js");
const { Ecolor } = require("../../embeds");

module.exports = {
  name: "plmap",
  description: "Provides a maps for all different regions of the game.",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
    run: async (client, interaction, args) => {
        let plmapStructure = new MessageEmbed()
            .setColor(`${Ecolor.blue}`)
            .setTitle("Map for the different regions in the game.")
            .setImage(`https://i.imgur.com/OsSxtei.jpeg`);
        let Map2 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Blackfell Caverns")
  .setImage(`https://i.imgur.com/OsSxtei.jpeg`); 
let Map3 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Onderblade Mines")
  .setImage(`http://i.imgur.com/yUmYgLB.jpg`); 
let Map4 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Willowsteen Cabin")
  .setImage(`https://i.imgur.com/1DxwN0a.jpg`); 
let Map5 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Trial8 Region")
  .setImage(`https://i.imgur.com/jOE293k.jpeg`); 
let Map6 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Room 2 Maze")
  .setImage(`https://i.imgur.com/7v0sKsD.jpeg`); 
let Map7 = new MessageEmbed()
	.setColor(`${Ecolor.black}`)
  .setTitle("Trial2 Region")
  .setImage(`https://i.imgur.com/5AYLFLD.png`); 
        
    interaction.followUp({ embeds: [plmapStructure, Map2, Map3, Map4, Map5, Map6, Map7]});
  },
};
