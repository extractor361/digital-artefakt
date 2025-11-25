export const runtime = "nodejs";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

import nodemailer from "nodemailer";
export default async function handler(req, res) {
  // --- CORS FIX (OBAVEZNO da bi iPhone slao POST) ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

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
      stavke,
      pdfBase64,
    } = req.body;

    // --- STABILAN GMAIL TRANSPORT ---
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "selastan@gmail.com",
        pass: "dhwb fclm hsav vclm", // app password
      },
      connectionTimeout: 20000,  // fix za Safari i iPhone
      greetingTimeout: 10000,
      socketTimeout: 30000,
    });

    // PDF attach ako postoji
    const attachments = pdfBase64
      ? [
          {
            filename: "ponuda.pdf",
            content: pdfBase64,
            encoding: "base64",
          },
        ]
      : [];

    // --- SLANJE MAILA ---
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
        <p><strong>Cijena:</strong> ${cijena} €</p>
        <pre>${JSON.stringify(stavke, null, 2)}</pre>
      `,
      attachments,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.log("Mailer error:", e);
    return res.status(500).json({ ok: false, error: e.toString() });
  }
}
