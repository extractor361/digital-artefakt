"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from "@/styles/calculator.module.css";

// 🔹 Helper za asinhrono dodavanje slike u PDF
async function addImageAsync(doc, path, x, y, w, h) {
  const response = await fetch(path);
  const blob = await response.blob();
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onloadend = () => {
      doc.addImage(reader.result, "PNG", x, y, w, h);
      resolve();
    };
    reader.readAsDataURL(blob);
  });
}

// 🔹 Učitaj Roboto font
const loadRobotoFont = async (doc) => {
  const response = await fetch("/assets/fonts/Roboto-Regular.ttf");
  const fontBuffer = await response.arrayBuffer();
  const uint8Array = new Uint8Array(fontBuffer);

  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < uint8Array.length; i += chunkSize) {
    const chunk = uint8Array.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  const base64Font = btoa(binary);

  doc.addFileToVFS("Roboto-Regular.ttf", base64Font);
  doc.addFont("Roboto-Regular.ttf", "Roboto-Regular", "normal");
  doc.setFont("Roboto-Regular");
};

export default function WebCostCalculator() {
  const [form, setForm] = useState({
    tip: "prezentacioni",
    tehnologija: "wordpress",
    cms: "ne",
    dizajn: "standardni",
    seo: "ne",
    jezici: "ne",
    google: "ne",
    kontakt: "ne",
    hosting: "ne",
    blog:"ne",
    galerija:"ne",
    chat:"ne",
    recenzije:"ne",
    shop:"ne",
    newsletter:"ne",
    brendiranje:"ne",
  });

  const [klijent, setKlijent] = useState({
    ime: "",
    adresa: "",
    email: "",
    telefon: "",
    pib: "",
  });
  const [loadingPDF, setLoadingPDF] = useState(false);

  const [rezultat, setRezultat] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleKlijent = (e) => {
    const { id, value } = e.target;
    setKlijent((prev) => ({ ...prev, [id]: value }));
  };

  // 🔹 Glavna funkcija za izračun cijene
  const izracunaj = () => {
    let stavke = [];

    // 🔹 Osnovne fiksne cijene
    const BASE = {
      prezentacioni: 260,
      advokat: 300,
      nekretnine: 350,
      racunovodstvo: 300,
      booking: 350,
      ecommerce: 450,
      portal: 400,
      crm: 500,
      elearning: 500,
      rcar: 320,
      arh: 320,
      mrk: 320,
      grd: 320,
      aos: 320,
      med: 400,
      htl: 320,
      rst: 320,
      fts: 280,
      drugo: 300,
    };

    // 🔹 Dodatne opcije (snižene)
    const OPCIJE = {
      CMS: 40,
      seo: 60,
      jezici: 40,
      google: 30,
      kontakt: 20,
      hosting: 30,
      blog: 50,
      galerija: 40,
      chat: 30,
      recenzije: 50,
      shop: 100,
      newsletter: 30,
      brendiranje: 80,
    };

    // 🔹 Lijepa imena za PDF tabelu
    const LABELI = {
      tip: "Tip projekta",
      tehnologija: "Tehnologija",
      cms: "CMS / Admin panel",
      seo: "SEO optimizacija",
      jezici: "Jezici (Multilingual)",
      google: "Google Business profil",
      kontakt: "Kontakt forma i email integracija",
      hosting: "Hosting i domen",
      blog: "Blog / Sekcija vijesti",
      galerija: "Galerija / Portfolio",
      chat: "Live Chat (WhatsApp, Messenger...)",
      recenzije: "Sistem za recenzije i ocjene",
      shop: "Online prodavnica (Shop)",
      newsletter: "Newsletter integracija",
      brendiranje: "Brendiranje i dizajn logotipa",
    };

    // ➤ Osnovna stavka
    const osnovna = BASE[form.tip];
    stavke.push([`Tip projekta: ${form.tip}`, osnovna]);

    // ➤ Prolazimo kroz sve opcije
    for (let opcija in OPCIJE) {
      if (form[opcija] === "da") {
        stavke.push([
          LABELI[opcija] || opcija,
          OPCIJE[opcija],
        ]);
      }
    }

    // ➤ Custom tehnologija duplira ukupan rad
    if (form.tehnologija === "custom") {
      stavke = stavke.map(([naziv, cijena]) => [
        naziv + " (custom)",
        cijena * 2,
      ]);
    }

    // ➤ Ukupna cijena
    const total = stavke.reduce((sum, s) => sum + s[1], 0);

    // ➤ Čuvamo rezultat
    setRezultat({
      total,
      stavke,
    });
  };

  // 🔹 Generisanje PDF ponude
  // 🔹 Generisanje PDF ponude
const generisiPDF = async () => {

  if (!klijent.ime || !klijent.email || !klijent.telefon) {
    alert("Molimo popunite obavezna polja: Naziv firme, Email i Telefon.");
    return;
  }
  setLoadingPDF(true);

  const doc = new jsPDF("p", "mm", "a4");
  await loadRobotoFont(doc);
  if (!rezultat) return;

  const GREEN = [6, 216, 137];
  const DARK = [68, 68, 68];

  const today = new Date();
  const datum = today.toLocaleDateString("sr-ME");
  const brojPonude = Math.floor(Math.random() * 9000) + 1000;

  doc.setFont("Roboto-Regular", "normal");

  await addImageAsync(doc, "/assets/img/logo.png", 20, 15, 25, 25);

  doc.setFontSize(14);
  doc.setTextColor(DARK[0], DARK[1], DARK[2]);
  doc.text("Digital Artefakt", 50, 20);

  doc.setFontSize(10);
  doc.text("Bulevar Revolucije C - 7, 85000 Bar, Crna Gora", 50, 26);
  doc.text("PIB: 03559548", 50, 31);
  doc.text("Tel: +382 68 062 361", 50, 36);
  doc.text("https://digital-artefakt.me | info@digital-artefakt.me", 50, 41);

  doc.text("Detalji uplate:", 150, 20);
  doc.text("Tekući račun: 520 - 44171 - 64", 150, 26);
  doc.text("IBAN: ME25520042000001316787", 150, 31);
  doc.text("Hipotekarna Banka AD Podgorica", 150, 36);

  doc.setDrawColor(GREEN[0], GREEN[1], GREEN[2]);
  doc.line(20, 45, 190, 45);

  doc.setFontSize(11);
  doc.text("Predračun za:", 20, 55);
  doc.text("Broj ponude:", 150, 55);

  doc.text("Klijent: " + (klijent.ime || "N/A"), 20, 61);
  if (klijent.adresa) doc.text("Adresa: " + klijent.adresa, 20, 67);
  if (klijent.email) doc.text("Email: " + klijent.email, 20, 73);
  if (klijent.telefon) doc.text("Telefon: " + klijent.telefon, 20, 79);
  if (klijent.pib) doc.text(`PIB: ${klijent.pib}`, 20, 85);

  doc.text(`DF-${brojPonude}`, 150, 61);
  doc.text(`Datum: ${datum}`, 150, 67);

  doc.setFontSize(13);
  doc.setTextColor(DARK[0], DARK[1], DARK[2]);
  doc.text("Predračun / Ponuda", 20, 95);

  autoTable(doc, {
    startY: 100,
    head: [["Stavka", "Cijena (€)"]],
    body: [
      ...rezultat.stavke.map(([naziv, cijena]) => [
        naziv,
        `${cijena.toFixed(2)} €`,
      ]),
      [
        { content: "Medjuzbir", styles: { font: "Roboto-Regular", fontStyle: "bold", halign: "right" } },
        { content: `${rezultat.total.toFixed(2)} €`, styles: { font: "Roboto-Regular", fontStyle: "bold" } }
      ],
      [
        { content: "PDV (0%)", styles: { font: "Roboto-Regular", fontStyle: "bold", halign: "right" } },
        { content: "0.00 €", styles: { font: "Roboto-Regular", fontStyle: "bold" } }
      ],
      [
        {
          content: "UKUPNO",
          styles: {
            font: "Roboto-Regular",
            fontStyle: "bold",
            halign: "right",
            textColor: GREEN,
            fillColor: [240, 240, 240],
          }
        },
        {
          content: `${rezultat.total.toFixed(2)} €`,
          styles: {
            font: "Roboto-Regular",
            fontStyle: "bold",
            textColor: GREEN,
            fillColor: [240, 240, 240],
          }
        }
      ],
    ],
    theme: "grid",
    headStyles: {
      font: "Roboto-Regular",
      fillColor: GREEN,
      textColor: DARK,
      fontStyle: "bold",
    },
    styles: {
      font: "Roboto-Regular",
      fontSize: 10,
      cellPadding: 3,
      textColor: DARK,
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245],
      font: "Roboto-Regular",
    },
  });

  const y = doc.lastAutoTable.finalY + 20;

  await addImageAsync(doc, "/assets/img/pecat.png", 140, y, 35, 35);

  doc.setFontSize(10);
  doc.setTextColor(DARK[0], DARK[1], DARK[2]);
  doc.text(
    "Zahvaljujemo se na povjerenju. Molimo da uplatu izvršite prije isteka roka važenja ponude.",
    20,
    y + 10,
    { maxWidth: 160 }
  );

  doc.setFontSize(8);
  doc.text("Ponudu generisao sistem Digital Artefakt", 105, 285, {
    align: "center",
  });

  // --------------------------------------------------
  // ✔ GENERIŠEMO PDF BLOB
  // --------------------------------------------------
  const pdfBlob = doc.output("blob");

  // --------------------------------------------------
  // ✔ DOWNLOAD PDF FAJLA
  // --------------------------------------------------
  const downloadUrl = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "ponuda.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);

  setLoadingPDF(false);

  // --------------------------------------------------
  // ✔ SLANJE EMAILA — BEZ PDF ATTACHMENTA
  // --------------------------------------------------
  await fetch("https://digital-artefakt.me/api/send-offer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  cache: "no-store",
  body: JSON.stringify({
    ime: klijent.ime,
    adresa: klijent.adresa,
    email: klijent.email,
    telefon: klijent.telefon,
    pib: klijent.pib,
    cijena: rezultat.total,
    stavke: rezultat.stavke
  }),
});

};


  return (
    <div className={styles.kalkulatorSajta}>
      <h1>Kalkulator Cijene za izradu veb sajta</h1>
      <p>Unesite osnovne informacije i dobićete okvirnu cijenu projekta.</p>

      <form>
        <Select
          id="tip"
          label="Tip projekta / branša"
          value={form.tip}
          onChange={handleChange}
          options={[
            ["prezentacioni", "Prezentacioni sajt (osnovni)"],
            ["advokat", "Advokatska kancelarija"],
            ["nekretnine", "Agencija za nekretnine"],
            ["racunovododstvo", "Računovodstveni servis"],
            ["booking", "Turistička agencija / Booking sistem"],
            ["ecommerce", "E-commerce / Internet prodavnica"],
            ["portal", "Portal / Magazin"],
            ["crm", "Web aplikacija – CRM sistem"],
            ["elearning", "Edukativna platforma / E-learning"],
            ["rcar", "Rent a car"],
            ["arh", "Arhitektonski biro"],
            ["mrk", "Marketing agencija"],
            ["grd", "Građevinska firma"],
            ["aos", "Auto servis / Auto centar"],
            ["med", "Ordinacija / Zdravstveni centar"],
            ["htl", "Hotel / Apartmani / Smještaj"],
            ["rst", "Restoran / Kafić / Bar"],
            ["fts", "Fitnes centar / Teretana"],
            ["drugo", "Drugo (custom projekat)"],
          ]}
        />

        <Select
          id="tehnologija"
          label="Tehnologija"
          value={form.tehnologija}
          onChange={handleChange}
          options={[
            ["wordpress", "WordPress"],
            ["custom", "Custom - 'od nule'"],
          ]}
        />

        <Select
          id="cms"
          label="Da li projekat ima CMS/Admin panel?"
          value={form.cms}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="jezici"
          label="Višejezičnost"
          value={form.jezici}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="blog"
          label="Blog / Sekcija za vijesti"
          value={form.blog}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="galerija"
          label="Galerija / Portfolio"
          value={form.galerija}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="chat"
          label="Live chat (WhatsApp, Messenger...)"
          value={form.chat}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="recenzije"
          label="Sistem za recenzije i ocjene"
          value={form.recenzije}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="shop"
          label="Online prodaja (shop)"
          value={form.shop}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="newsletter"
          label="Newsletter integracija"
          value={form.newsletter}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="brendiranje"
          label="Brendiranje i dizajn logotipa"
          value={form.brendiranje}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="seo"
          label="SEO optimizacija"
          value={form.seo}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="google"
          label="Google Business profil (lokacija, mapa, verifikacija)"
          value={form.google}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="kontakt"
          label="Kontakt forma i e-mail integracija"
          value={form.kontakt}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <Select
          id="hosting"
          label="Hosting i domen (osnovni paket)"
          value={form.hosting}
          onChange={handleChange}
          options={[
            ["ne", "Ne"],
            ["da", "Da"],
          ]}
        />

        <button type="button" onClick={izracunaj}>
          Izračunaj cijenu
        </button>

        {rezultat && (
          <>
            <div className={styles.rezultat}>
              <p>Procijenjena cijena izrade:</p>
              <span>{rezultat.total} €</span>
              <small>(Okvirna cijena, zavisi od detaljnih zahtjeva)</small>
            </div>

            <div className={styles.klijentForma}>
              <h3 style={{ marginTop: 20 }}>Podaci o firmi / klijentu</h3>

              <input id="ime" type="text" placeholder="Naziv firme" value={klijent.ime} onChange={handleKlijent} />
              <input id="adresa" type="text" placeholder="Adresa" value={klijent.adresa} onChange={handleKlijent} />
              <input id="email" type="email" placeholder="Email" value={klijent.email} onChange={handleKlijent} />
              <input id="telefon" type="text" placeholder="Telefon" value={klijent.telefon} onChange={handleKlijent} />
              <input id="pib" type="text" placeholder="PIB / ID broj" value={klijent.pib} onChange={handleKlijent} />

              <button style={{ marginTop: 20 }} type="button" onClick={generisiPDF} className={styles.pdfBtn}>
                Preuzmi PDF ponudu
              </button>

              {loadingPDF && <div className={styles.loaderPDF}></div>}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

function Select({ id, label, value, onChange, options }) {
  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange}>
        {options.map(([val, text]) => (
          <option key={val} value={val}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
