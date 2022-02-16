const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
dotenv.config()


mongoose
	.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
	.then(() => {
		const app = express()

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})