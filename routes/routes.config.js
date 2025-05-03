module.exports = [
    {
        prefix: "/serviceauth",
        target: "http://173.249.25.94:8046",
        endpoints: [
            { method: "all", route: "/:path*" }, // pour Swagger
        ],
    },
    {
        prefix: "/servicecitoyen",
        target: "http://173.249.25.94:5001",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
];
