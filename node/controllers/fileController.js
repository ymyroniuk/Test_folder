const { v4: uuidv4 } = require('uuid');
const path = require('path');

class FileControllers {
    saveFile(image) {
        try {
            const fileName = uuidv4() + '.jpg';
            const filePath = path.join('static', fileName)
            image.mv(filePath)
            return fileName
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new FileControllers()