import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      ime,
      adresa,
      email,
      telefon,
      pib,
      cijena,
      stavke,
      pdfBase64,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "selastan@gmail.com",
        pass: "dhwb fclm hsav vclm", // NE normalna šifra!
      },
    });

    await transporter.sendMail({
      from: "Digital Artefakt <selastan@gmail.com>",
      to: "info@digital-artefakt.me",
      subject: "Nova web ponuda",
      html: `
        <h2>Nova ponuda</h2>
        <p><strong>Klijent:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cijena:</strong> ${cijena} €</p>
        <pre>${JSON.stringify(stavke, null, 2)}</pre>
      `
    
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.log("Mailer error:", e);
    return res.status(500).json({ ok: false, error: e.toString() });
  }
}
