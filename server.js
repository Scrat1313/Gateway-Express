require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routesConfig = require('./routes/routes.config.js');

const app = express();
const port = process.env.PORT;

// Configuration du proxy dynamique
routesConfig.forEach(service => {
    app.use(
        service.prefix,
        createProxyMiddleware({
            target: service.target,
            changeOrigin: true,
        })
    );
});

app.listen(port, () => {
    console.log(`API Gateway is running on http://localhost:${port}`);
});
