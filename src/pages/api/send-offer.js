export const runtime = "nodejs";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb", // sada dovoljno, PDF više ne postoji
    },
  },
};

import { escapeHtml, getMailConfig, sendEmail } from "@/lib/email";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { ime, adresa, email, telefon, pib, cijena, stavke } = req.body || {};

  if (
    !hasText(ime) ||
    !hasText(email) ||
    !hasText(telefon) ||
    typeof cijena !== "number" ||
    !Number.isFinite(cijena) ||
    !Array.isArray(stavke)
  ) {
    return res.status(400).json({ ok: false, error: "Invalid offer data" });
  }

  const mail = getMailConfig();

  if (!mail) {
    console.error("Offer email is not configured");
    return res
      .status(503)
      .json({ ok: false, error: "Email service is not configured" });
  }

  try {
    const safeItems = escapeHtml(JSON.stringify(stavke, null, 2));

    await sendEmail(mail, {
      replyTo: email,
      subject: "Nova web ponuda",
      html: `
        <h2>Nova ponuda</h2>
        <p><strong>Klijent:</strong> ${escapeHtml(ime)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>Adresa:</strong> ${escapeHtml(adresa)}</p>
        <p><strong>PIB:</strong> ${escapeHtml(pib)}</p>
        <p><strong>Ukupna cijena:</strong> ${escapeHtml(cijena)} €</p>

        <h3>Stavke:</h3>
        <pre>${safeItems}</pre>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Offer mail delivery failed", {
      status: e?.status,
    });
    return res.status(502).json({ ok: false, error: "Could not send offer" });
  }
}
