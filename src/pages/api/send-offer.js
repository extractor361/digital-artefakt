export const runtime = "nodejs";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb", // sada dovoljno, PDF više ne postoji
    },
  },
};

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // --- CORS FIX (za iPhone Safari) ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

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
      stavke
    } = req.body;

    // --- Gmail transport ---
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "selastan@gmail.com",
        pass: "yess fzlo atzs scfk", // app password
      },
      connectionTimeout: 20000,
      greetingTimeout: 10000,
      socketTimeout: 30000,
    });

    // --- Email bez attachmenta ---
    await transporter.sendMail({
      from: "Digital Artefakt <selastan@gmail.com>",
      to: "info@digital-artefakt.me",
      subject: "Nova web ponuda",
      html: `
        <h2>Nova ponuda</h2>
        <p><strong>Klijent:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Adresa:</strong> ${adresa}</p>
        <p><strong>PIB:</strong> ${pib}</p>
        <p><strong>Ukupna cijena:</strong> ${cijena} €</p>

        <h3>Stavke:</h3>
        <pre>${JSON.stringify(stavke, null, 2)}</pre>
      `,
    });

    return res.status(200).json({ ok: true });

  } catch (e) {
    console.log("Mailer error:", e);
    return res.status(500).json({ ok: false, error: e.toString() });
  }
}
