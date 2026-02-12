import rateLimit from "koa-ratelimit";

export default () =>
  rateLimit({
    driver: "memory",
    db: new Map(),
    duration: 60000,
    errorMessage: "Too many requests, please try again later.",
    max: 20,
  });
