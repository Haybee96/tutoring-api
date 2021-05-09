const IndexClass = require('../classes/index.class');

class IndexController {
    getIndex(req, res) {
        return new IndexClass().getIndex(req, res);
    }
}

module.exports = IndexController;
