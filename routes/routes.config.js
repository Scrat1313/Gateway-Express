module.exports = [
    {
        prefix: "/api",
        target: "http://173.249.25.94:8046",
        endpoints: [
            { method: "all", route: "/serviceauth/:path" }, // Remplacer le '*' par ':path'
        ],
    },
];
