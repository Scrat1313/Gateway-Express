const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routesConfig = require('./routes/routes.config.js');

const app = express();
const port = 3000;

// Configuration du proxy dynamique
routesConfig.forEach(service => {
    app.use(
        service.prefix,
        createProxyMiddleware({
            target: service.target,
            changeOrigin: true,
            pathRewrite: {
                // Garde "/serviceauth" dans l’URL après réécriture
                // (autrement dit, ne le supprime pas)
                '^/': '',
                // '^/serviceauth': '/serviceauth',
            },
        })
    );
});

app.listen(port, () => {
    console.log(`API Gateway is running on http://localhost:${port}`);
});
