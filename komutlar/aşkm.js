exports.run = async(client, message, args) => {
return message.reply(`Yerim seni bir tanem`);
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "aşkm",
  usage: "aşkm",
  description: "Komut listesi",
  category: "kullanıcı"
}