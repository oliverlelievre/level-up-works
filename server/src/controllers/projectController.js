const { resultToJSON, getSaltedHash, checkPassword } = require("../utils");
const {
	getAllProjects,
	getAllFreeProjects,
	getAllPremiumProjects,
	getAllBeginnerFreeProjects,
	getAllBeginnerPremiumProjects,
	getAllIntermediateFreeProjects,
	getAllIntermediatePremiumProjects,
	getAllAdvanceFreeProjects,
	getAllAdvancePremiumProjects,
} = require("../models/projectModel");

const getProjects = async (req, res) => {
	const queryResult = await getAllProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};

const getFreeProjects = async (req, res) => {
	const queryResult = await getAllFreeProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getPremiumProjects = async (req, res) => {
	const queryResult = await getAllPremiumProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getBeginnerFreeProjects = async (req, res) => {
	const queryResult = await getAllBeginnerFreeProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getBeginnerPremiumProjects = async (req, res) => {
	const queryResult = await getAllBeginnerPremiumProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getIntermediateFreeProjects = async (req, res) => {
	const queryResult = await getAllIntermediateFreeProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getIntermediatePremiumProjects = async (req, res) => {
	const queryResult = await getAllIntermediatePremiumProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getAdvanceFreeProjects = async (req, res) => {
	const queryResult = await getAllAdvanceFreeProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};
const getAdvancePremiumProjects = async (req, res) => {
	const queryResult = await getAllAdvancePremiumProjects();
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};

module.exports = {
	getProjects, getFreeProjects, getPremiumProjects, getBeginnerFreeProjects, getBeginnerPremiumProjects, getIntermediateFreeProjects, getIntermediatePremiumProjects, getAdvanceFreeProjects, getAdvancePremiumProjects
};
