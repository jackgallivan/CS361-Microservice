const express = require('express')
const routes = require('./api/routes')
const app = express()
const PORT = 3000
app.use(express.json())

routes(app)

app.listen(PORT, () => {
	console.log('Server started on port: ' + PORT)
})
