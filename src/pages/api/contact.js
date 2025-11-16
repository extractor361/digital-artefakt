import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { ime, email, djelatnost, telefon, poruka } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "selastan@gmail.com",
        pass: "dhwb fclm hsav vclm", // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: "Digital Artefakt <selastan@gmail.com>",
      to: "info@digital-artefakt.me",
      subject: "Nova poruka sa kontakt forme",
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Djelatnost:</strong> ${djelatnost || "-"}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Poruka:</strong><br>${poruka}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("CONTACT API ERROR:", e);
    return res.status(500).json({ ok: false, error: e.toString() });
  }
}
