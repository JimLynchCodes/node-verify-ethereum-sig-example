const express = require("express")
const routes = require("../routes")

var favoriteNumberRouter = require('../routes/favorite-number');

function createServer() {
	const app = express()
	app.use(express.json())
	// app.use("/api", routes)

    app.use('/favorite-number', favoriteNumberRouter);
	return app
}

module.exports = createServer