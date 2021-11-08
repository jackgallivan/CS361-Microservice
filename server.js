const express = require('express')
const routes = require('./api/routes')
const app = express()
const PORT = process.env.port || 3000
app.use(express.json())

routes(app)

app.listenerCount(PORT, () => {
	console.log('Server started on port: ' + PORT)
})
