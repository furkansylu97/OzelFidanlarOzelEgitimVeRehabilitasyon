export default ({ env }) => {
  const isDev = env("NODE_ENV") === "development";

  const allowedOrigins = isDev
    ? [env("FRONTEND_LOCAL"), env("FRONTEND_URL"), env("FRONTEND_URL_WWW")]
    : [env("FRONTEND_URL"), env("FRONTEND_URL_WWW")];

  return [
    "strapi::errors",
    "strapi::security",
    "strapi::logger",
    {
      name: "strapi::cors",
      config: {
        origin: allowedOrigins.filter(Boolean),
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        credentials: true,
      },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
};
