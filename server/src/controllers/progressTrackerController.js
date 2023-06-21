const { resultToJSON, getSaltedHash, checkPassword } = require("../utils");
const { getAllProgression } = require("../models/progressTrackerModel");

const getAllProgress = async (req, res) => {
  const queryResult = await getAllProgression();
  const jsonResult = resultToJSON(queryResult);

  res.status(200).json(jsonResult);
};

module.exports = {
  getAllProgress,
};
