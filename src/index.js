const express = require('express');
const cors = require('cors');
const router = require('./routes');
const path = require("path");

const PORT = 3001;

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	"/files",
	express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(router);

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));
