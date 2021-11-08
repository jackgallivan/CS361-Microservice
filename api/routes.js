'use strict'

const controller = require('./controller')

module.exports = function (app) {
	app.route('/calc').post(controller.get_rating)
}
