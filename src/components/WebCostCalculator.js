"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from "@/styles/WebCostCalculator.module.css";

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
  let totalMin = 0;
  let totalMax = 0;

  const basePrices = {
    prezentacioni: [300, 500],
    advokat: [350, 550],
    nekretnine: [500, 700],
    racunovodstvo: [400, 600],
    booking: [600, 900],
    ecommerce: [800, 1200],
    portal: [700, 1000],
    crm: [900, 1300],
    elearning: [1000, 1200],
    rcar: [600, 900],
    arh: [600, 900],
    mrk: [600, 900],
    grd: [600, 900],
    aos: [600, 900],
    med: [1000, 1500],
    htl: [500, 700],
    rst: [500, 700],
    fts: [300, 500],
    drugo: [400, 700],
  };

  const [minBase, maxBase] = basePrices[form.tip] || [300, 500];
  totalMin += minBase;
  totalMax += maxBase;

  // ✅ Dodatne opcije
  if (form.cms === "da") {
    totalMin += 100;
    totalMax += 100;
  }
  if (form.seo === "da") {
    totalMin += 100;
    totalMax += 100;
  }
  if (form.jezici === "da") {
    totalMin += 50;
    totalMax += 50;
  }
  if (form.google === "da") {
    totalMin += 50;
    totalMax += 50;
  }
  if (form.kontakt === "da") {
    totalMin += 30;
    totalMax += 30;
  }
  if (form.hosting === "da") {
    totalMin += 40;
    totalMax += 40;
  }

  // 🧩 Nove funkcionalnosti
  if (form.blog === "da") {
    totalMin += 50;
    totalMax += 100;
  }
  if (form.galerija === "da") {
    totalMin += 40;
    totalMax += 80;
  }
  if (form.chat === "da") {
    totalMin += 40;
    totalMax += 60;
  }
  if (form.recenzije === "da") {
    totalMin += 50;
    totalMax += 100;
  }
  if (form.shop === "da") {
    totalMin += 100;
    totalMax += 150;
  }
  if (form.newsletter === "da") {
    totalMin += 30;
    totalMax += 50;
  }

  // 🔹 Ako je tehnologija custom → cijena x2
  if (form.tehnologija === "custom") {
    totalMin *= 2;
    totalMax *= 2;
  }

  setRezultat({ min: totalMin, max: totalMax });
};

  // 🔹 Generisanje PDF ponude
  const generisiPDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    await loadRobotoFont(doc);
    if (!rezultat) return;

    const today = new Date();
    const datum = today.toLocaleDateString("sr-ME");
    const brojPonude = Math.floor(Math.random() * 9000) + 1000;

    doc.setFont("Roboto-Regular", "normal");

    await addImageAsync(doc, "/assets/img/logo.png", 20, 15, 25, 25);

    doc.setFontSize(14);
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

    doc.line(20, 45, 190, 45);

    doc.setFontSize(11);
    doc.text("Predračun za:", 20, 55);
    doc.text("Broj ponude:", 150, 55);
    doc.text("Klijent: " + klijent.ime || "Klijent", 20, 61);
    if (klijent.adresa) doc.text("Adresa: " + klijent.adresa, 20, 67);
    if (klijent.email) doc.text("Email: " + klijent.email, 20, 73);
    if (klijent.telefon) doc.text("Telefon: " + klijent.telefon, 20, 79);
    if (klijent.pib) doc.text(`PIB: ${klijent.pib}`, 20, 85);
    doc.text(`DF-${brojPonude}`, 150, 61);
    doc.text(`Datum: ${datum}`, 150, 67);

    doc.setFontSize(13);
    doc.text("Predračun / Ponuda", 20, 95);

    const details = [
  ["Tip projekta", form.tip],
  ["Tehnologija", form.tehnologija],
  ["CMS/Admin panel", form.cms === "da" ? "Da" : "Ne"],
  ["SEO optimizacija", form.seo === "da" ? "Da" : "Ne"],
  ["Višejezičnost", form.jezici === "da" ? "Da" : "Ne"],
  ["Google Business profil", form.google === "da" ? "Da" : "Ne"],
  ["Kontakt forma i e-mail integracija", form.kontakt === "da" ? "Da" : "Ne"],
  ["Hosting i domen", form.hosting === "da" ? "Da" : "Ne"],
  ["Blog / Sekcija za vijesti", form.blog === "da" ? "Da" : "Ne"],
  ["Galerija / Portfolio", form.galerija === "da" ? "Da" : "Ne"],
  ["Live chat (WhatsApp, Messenger...)", form.chat === "da" ? "Da" : "Ne"],
  ["Sistem za recenzije i ocjene", form.recenzije === "da" ? "Da" : "Ne"],
  ["Online prodavnica (shop)", form.shop === "da" ? "Da" : "Ne"],
  ["Newsletter integracija", form.newsletter === "da" ? "Da" : "Ne"],
  ["Brendiranje i dizajn logotipa", form.brendiranje === "da" ? "Da" : "Ne"],
];


    autoTable(doc, {
      startY: 100,
      head: [["Parametar", "Vrijednost"]],
      body: details,
      theme: "grid",
      headStyles: { fillColor: [0, 255, 136], textColor: 0, fontStyle: "bold" },
      styles: { fontSize: 10 },
    });

    const y = doc.lastAutoTable.finalY + 15;
    const total = Math.round((rezultat.min + rezultat.max) / 2);
    doc.setFontSize(12);
    doc.text(`Ukupno: ${total},00 €`, 160, y, { align: "right" });

    await addImageAsync(doc, "/assets/img/pecat.png", 135, y + 30, 35, 35);

    doc.setFontSize(10);
    doc.text(
      "Zahvaljujemo se na povjerenju i saradnji. Molimo da uplatu izvršite prije isteka roka važenja ponude.",
      20,
      y + 25,
      { maxWidth: 160 }
    );

    doc.setFontSize(8);
    doc.text("Ponudu generisao sistem Digital Artefakt", 105, 285, { align: "center" });

    doc.save(`predracun-${brojPonude}.pdf`);
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
            ["racunovodstvo", "Računovodstveni servis"],
            ["booking", "Turistička agencija / Booking sistem"],
            ["ecommerce", "E-commerce / Internet prodavnica"],
            ["portal", "Portal / Magazin / Blog"],
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
  label="Online prodavnica (shop)"
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
          <button type="button" onClick={generisiPDF} className={styles.pdfBtn}>
            Preuzmi PDF ponudu
          </button>
        )}
      </form>

      {rezultat && (
        <>
          <div className={styles.rezultat} >
            <p>Procijenjena cijena izrade:</p>
            <span>
              {rezultat.min} € – {rezultat.max} €
            </span>
            <small>(Okvirna cijena, zavisi od detaljnih zahtjeva)</small>
          </div>

          <div className={styles.klijentForma}>
            <h3 style={{marginTop:20}}>Podaci o firmi / klijentu</h3>
            <input id="ime" type="text" placeholder="Naziv firme" value={klijent.ime} onChange={handleKlijent} />
            <input id="adresa" type="text" placeholder="Adresa" value={klijent.adresa} onChange={handleKlijent} />
            <input id="email" type="email" placeholder="Email" value={klijent.email} onChange={handleKlijent} />
            <input id="telefon" type="text" placeholder="Telefon" value={klijent.telefon} onChange={handleKlijent} />
            <input id="pib" type="text" placeholder="PIB / ID broj" value={klijent.pib} onChange={handleKlijent} />

            <button style={{marginTop:20}}  type="button" onClick={generisiPDF} className={styles.pdfBtn}>
              Preuzmi PDF ponudu
            </button>
          </div >
        </>
      )}
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
