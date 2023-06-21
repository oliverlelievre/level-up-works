const { getPool } = require('../db');
const pool = getPool();


const getAllProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project;`);
		return rows;
	});
};

const getAllFreeProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE subscription = "Free";`);
		return rows;
	});
};

const getAllPremiumProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE subscription = "Premium";`);
		return rows;
	});
};


const getAllBeginnerFreeProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Beginner" && subscription = "Free";`);
		return rows;
	});
}; const getAllBeginnerPremiumProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Beginner" && subscription = "Premium";`);
		return rows;
	});
}; const getAllIntermediateFreeProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Intermediate" && subscription = "Free";`);
		return rows;
	});
}; const getAllIntermediatePremiumProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Intermediate" && subscription = "Premium";`);
		return rows;
	});
}; const getAllAdvanceFreeProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Advance"  && subscription = "Free";`);
		return rows;
	});
};

const getAllAdvancePremiumProjects = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.project WHERE course = "Advance"  && subscription = "Premium";`);
		return rows;
	});
};




module.exports = { getAllProjects, getAllFreeProjects, getAllPremiumProjects, getAllBeginnerFreeProjects, getAllBeginnerPremiumProjects, getAllIntermediateFreeProjects, getAllIntermediatePremiumProjects, getAllAdvanceFreeProjects, getAllAdvancePremiumProjects };
