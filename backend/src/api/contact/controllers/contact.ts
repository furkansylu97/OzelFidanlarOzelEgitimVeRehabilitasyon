import type { Context } from "koa";

export default {
  async send(ctx: Context) {
    const { name, email, phone, service, message } =
      ctx.request.body?.data || {};

    if (!name || !email || !phone || !service) {
      return ctx.badRequest("Zorunlu alanlar eksik");
    }

    const containsHeaderInjection = (value: string) => {
      return /[\r\n]/.test(value);
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (containsHeaderInjection(email) || !emailRegex.test(email)) {
      return ctx.badRequest("Geçersiz email adresi");
    }

    try {
      await strapi
        .service("api::contact.contact")
        .sendMail({ name, email, phone, service, message });

      ctx.send({ success: true });
    } catch (err) {
      strapi.log.error(err);
      ctx.internalServerError("Mail gönderilemedi");
    }
  },
};
