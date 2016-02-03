exports = module.exports = {
    dev: {
        path: {}
    },
    prod: {
        path: {}
    }
};

exports.dev.path.serveStatic = './.tmp/serve';
exports.prod.path.serveStatic = './dist';
