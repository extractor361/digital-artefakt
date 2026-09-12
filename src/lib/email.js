const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";

export function getMailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const to = process.env.MAIL_TO?.trim();

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function sendEmail(mail, { replyTo, subject, html }) {
  const body = {
    from: mail.from,
    to: [mail.to],
    subject,
    html,
  };

  if (replyTo) {
    body.reply_to = replyTo;
  }

  const response = await fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${mail.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = new Error("Resend rejected email delivery");
    error.status = response.status;
    throw error;
  }
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
