export default () => ({
  async sendMail(data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string;
  }) {
    const escapeHtml = (unsafe: string) =>
      unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeData = {
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      service: escapeHtml(data.service),
      message: data.message ? escapeHtml(data.message) : "-",
    };

    await strapi
      .plugin("email")
      .service("email")
      .send({
        to: process.env.SMTP_FROM,
        from: process.env.SMTP_FROM,
        replyTo: safeData.email,
        subject: `Yeni İletişim Formu - ${safeData.service}`,
        html: `
        <h3>Yeni Mesaj</h3>
        <p><b>İsim:</b> ${safeData.name}</p>
        <p><b>Email:</b> ${safeData.email}</p>
        <p><b>Telefon:</b> ${safeData.phone}</p>
        <p><b>Hizmet:</b> ${safeData.service}</p>
        <p><b>Mesaj:</b> ${safeData.message}</p>
      `,
      });
  },
});
