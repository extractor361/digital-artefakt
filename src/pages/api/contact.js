import { escapeHtml, getMailConfig, sendEmail } from "@/lib/email";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { ime, email, djelatnost, telefon, poruka } = req.body || {};

  if (
    !hasText(ime) ||
    !hasText(poruka) ||
    (!hasText(email) && !hasText(telefon))
  ) {
    return res.status(400).json({ ok: false, error: "Invalid contact data" });
  }

  const mail = getMailConfig();

  if (!mail) {
    console.error("Contact email is not configured");
    return res
      .status(503)
      .json({ ok: false, error: "Email service is not configured" });
  }

  try {
    await sendEmail(mail, {
      replyTo: hasText(email) ? email.trim() : undefined,
      subject: "Nova poruka sa kontakt forme",
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${escapeHtml(ime)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Djelatnost:</strong> ${escapeHtml(djelatnost || "-")}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>Poruka:</strong><br>${escapeHtml(poruka)}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Contact mail delivery failed", {
      status: e?.status,
    });
    return res
      .status(502)
      .json({ ok: false, error: "Could not send message" });
  }
}
