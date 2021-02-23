exports.run = async(client, message, args) => {
return message.reply(`Selaam hoşgeldin kankam`);
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "Selam",
  usage: "Selam",
  description: "Komut listesi",
  category: "kullanıcı"
}