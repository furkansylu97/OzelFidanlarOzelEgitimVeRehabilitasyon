export default () => ({
  async sendMail(data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string;
  }) {
    await strapi.plugin("email").service("email").send({
      to: process.env.SMTP_FROM,
      from: process.env.SMTP_FROM,
      replyTo: data.email,
      subject: `Yeni İletişim Formu - ${data.service}`,
      html: `
        <h3>Yeni Mesaj</h3>
        <p><b>İsim:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Telefon:</b> ${data.phone}</p>
        <p><b>Hizmet:</b> ${data.service}</p>
        <p><b>Mesaj:</b> ${data.message || "-"}</p>
      `,
    });
  },
});
