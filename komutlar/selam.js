exports.run = async(client, message, args) => {
return message.reply(`Selaam hoşgeldin kankam`);
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "selam",
  usage: "selam",
  description: "Komut listesi",
  category: "kullanıcı"
}