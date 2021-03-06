const { Player } = require("../models");
const playerData = require("../db/scraper/nbaStats2.json");

const seedPlayers = async () => {
  let i;
  let j;
  let temparray;
  const chunk = 50;
  try {
    for (i = 0, j = playerData.length; i < j; i += chunk) {
      temparray = playerData.slice(i, i + chunk);
      await Player.bulkCreate(temparray);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = seedPlayers;
