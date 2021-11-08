'use strict'

const rating_calc = require('../service/rating_calc')
const controllers = {
	get_rating: function (req, res) {
		rating_calc.calc(req, res)
	},
}

module.exports = controllers
