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

exports.secret = 'rJ5D089c=';
exports.dev.secret = exports.secret;
exports.prod.secret = exports.secret;
