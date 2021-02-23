exports.run = async(client, message, args) => {
return message.reply(`Günaydın Kanka Hoşgeldin.`);
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "günaydın",
  usage: "günaydın",
  description: "Komut listesi",
  category: "kullanıcı"
}