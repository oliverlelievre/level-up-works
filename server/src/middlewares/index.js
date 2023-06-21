const errorHandler = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render('error', { error: err });
};

/**
 * Cross-Origin Resource Sharing (CORS) is a security mechanism 
 * which describes which origins (servers/clients) are permitted 
 * to read information. It is basically an access control mechanism.
 * This middleware basically allows everything to simplify things for the demo.
*/
const allowCORS = (req, res, next) => {
	const origin = req.get('origin');
	res.header("Access-Control-Allow-Origin", origin);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
};

module.exports = { errorHandler, allowCORS };
