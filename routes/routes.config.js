module.exports = [
    {
        prefix: "/serviceauth",
        target: "http://173.249.25.94:8046/serviceauth",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicepublication",
        target: "http://173.249.25.94:5011/servicepublication",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicecitoyen",
        target: "http://173.249.25.94:5001/servicecitoyen",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicesignal",
        target: "http://173.249.25.94:5002/servicesignal",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceentreprise",
        target: "http://173.249.25.94:5003/serviceentreprise",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicerecette",
        target: "http://173.249.25.94:5004/servicerecette",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceterritoire",
        target: "http://173.249.25.94:5005/serviceterritoire",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicetresorier",
        target: "http://173.249.25.94:5006/servicetresorier",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceoffrecommune",
        target: "http://173.249.25.94:5007/serviceoffrecommune",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceprojet",
        target: "http://173.249.25.94:5008/serviceprojet",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicesuggestion",
        target: "http://173.249.25.94:5009/servicesuggestion",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicecooperative",
        target: "http://173.249.25.94:5010/servicecooperative",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceupload",
        target: "http://173.249.25.94:5012/serviceupload",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicenotification",
        target: "http://173.249.25.94:5013/servicenotification",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicepaiement",
        target: "http://173.249.25.94:5014/servicepaiement",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/serviceforum",
        target: "http://173.249.25.94:5015/serviceforum",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
    {
        prefix: "/servicetheme",
        target: "http://173.249.25.94:5017/servicetheme",
        endpoints: [
            { method: "all", route: "/:path*" },
        ],
    },
];
