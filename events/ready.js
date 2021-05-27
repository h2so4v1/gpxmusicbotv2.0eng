module.exports = async (client) => {//youtube/NoblesYT
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("!help -- gPxCode Music", { //Oynuyor Kısmı
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};