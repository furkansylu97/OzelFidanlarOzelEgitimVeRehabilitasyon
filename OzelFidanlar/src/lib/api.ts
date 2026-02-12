const rawUrl = import.meta.env.VITE_STRAPI_URL;

if (!rawUrl) {
  throw new Error("VITE_STRAPI_URL is not defined in environment variables");
}

export const API_BASE_URL = rawUrl.replace(/\/+$/, "");
