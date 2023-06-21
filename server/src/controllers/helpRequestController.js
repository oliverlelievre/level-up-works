const { resultToJSON, } = require('../utils');

const {
	getAllHelpRequests
} = require('../models/helpRequestModel');



const getHelpRequests = async (req, res) => {
	const queryResult = await getAllHelpRequests
		();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
}

module.exports = {
	getHelpRequests
};