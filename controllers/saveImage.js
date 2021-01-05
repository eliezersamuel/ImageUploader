const path = require('path');
const {writeFile} = require('fs/promises');

let files = {};

class SaveImage {
	async save(req, res){
		req.io.on('connection', socket => {

			socket.on('start', data => {
				let fileName = data['fileName'];

				files[fileName] = {
					fileSize : data['size'],
					data     : "",
					downloaded : 0
				}
			})

			socket.on('imagem', dados => {
				const data = new Date().getTime();

				const arquivo = await writeFile(path.resolve(__dirname, data, fileName), dados, 'binary');

			})

		})
	}
}

module.exports = new SaveImage();
