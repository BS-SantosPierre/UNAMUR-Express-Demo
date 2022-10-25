/**
 *
 * @param {number} paramName
 * @returns
 */
const parseParam = (paramName) => {
	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {*} next
	 * @returns
	 */
	return (req, res, next) => {
		const param = req.params[paramName];

		const parseParam = parseInt(param);

		if (!parseParam) {
			res.sendStatus(400); // Met fin à la connexion
			return;
			//res.status(400); // Ne met pas fin à la connexion
		}

		req.validParam = parseParam;

		next();
	}
}

module.exports = {
	parseParam
};
