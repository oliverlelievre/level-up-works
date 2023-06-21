const config = {
	host: process.env.MYSQL_HOST,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASS,
	port: Number(process.env.MYSQL_PORT),
	// ssl: {
	//   ca: Buffer.from(process.env.MYSQL_CERT_BASE64, 'base64').toString('ascii'),
	// },
};

module.exports = { config };