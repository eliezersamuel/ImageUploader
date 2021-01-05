const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
	const respostaArquivo = req.file;

	if(respostaArquivo){
		return res.status(200).json({
			status: "ok"
		})
	}else{
		return res.status(500).json({
			status: "erro"
		})
	}

});

module.exports = routes;
