exports.run = async(client, message, args) => {
return message.reply(`Selam Ben Silvanna komutlarım:  Sa,adamasmaca,selam,dm,duyuruyap,say,jn,lv,sa,stres,woodie,yapımcı  İyi sohbetler. Şu an 52256 adet kanala, 120 adet sunucuya ve 340,293 kullanıcıya hizmet veriliyor! `);
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "help",
  usage: "help",
  description: "Komut listesi",
  category: "kullanıcı"
}