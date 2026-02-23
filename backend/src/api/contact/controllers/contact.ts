export default {
  async send(ctx: {
    request: any;
    badRequest: any;
    send: any;
    internalServerError: any;
  }) {
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

      return ctx.send({ success: true });
    } catch (err) {
      strapi.log.error(err);
      return ctx.internalServerError("Mail gönderilemedi");
    }
  },
};
