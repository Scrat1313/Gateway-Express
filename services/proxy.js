const { createProxyMiddleware } = require('http-proxy-middleware');

function generateRoutes(app, config) {
    config.forEach(service => {
        service.endpoints.forEach(endpoint => {
            const { method, route } = endpoint;

            // Utilisation de app.all pour capturer toutes les méthodes HTTP
            if (method === "all") {
                app.all(service.prefix + route, createProxyMiddleware({
                    target: service.target,
                    changeOrigin: true,
                    pathRewrite: {
                        [`^${service.prefix}`]: '', // Retirer le préfixe avant de rediriger
                    },
                }));
            } else {
                // Sinon, on traite chaque méthode HTTP spécifiquement
                app[method.toLowerCase()](service.prefix + route, createProxyMiddleware({
                    target: service.target,
                    changeOrigin: true,
                    pathRewrite: {
                        [`^${service.prefix}`]: '', // Retirer le préfixe avant de rediriger
                    },
                }));
            }
        });
    });
}

module.exports = generateRoutes;