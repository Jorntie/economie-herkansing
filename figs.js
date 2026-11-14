// Figuren (inline SVG of tabel). FIG(naam, quiz): bij quiz = true worden de hulplijnen
// en bijschriften weggelaten die het antwoord verklappen.
(function () {
  "use strict";
  const svg = (w, h, label, body) => `<svg class="fig" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${body}</svg>`;
  const t = (x, y, s, a = "middle", c = "") => `<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${s}</text>`;
  const lijn = (x1, y1, x2, y2, c = "s") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}"/>`;
  const stip = (x, y) => `<circle cx="${x}" cy="${y}" r="4" class="dot"/>`;
  const cap = (y, regels) => regels.map((r, i) => t(8, y + i * 16, r, "start", "k")).join("");

  // ---------- opbrengstenmatrix (2 x 2) ----------
  function matrix(m) {
    const X0 = 118, W = 108, Y0 = 46, H = 46;
    let out = t(X0 + W, 14, m.B + " →", "middle", "b pb") + t(8, 36, m.A + " ↓", "start", "b pa");
    m.sB.forEach((s, j) => { out += t(X0 + W * j + W / 2, 36, s, "middle", "k"); });
    m.sA.forEach((s, i) => {
      out += t(X0 - 8, Y0 + H * i + H / 2 + 4, s, "end", "k");
      m.sB.forEach((_, j) => {
        const [a, b] = m.p[i][j];
        out += `<rect x="${X0 + W * j}" y="${Y0 + H * i}" width="${W}" height="${H}" class="cel"/>` +
          `<text x="${X0 + W * j + W / 2}" y="${Y0 + H * i + H / 2 + 5}" text-anchor="middle" class="g"><tspan class="pa">${a}</tspan> ; <tspan class="pb">${b}</tspan></text>`;
      });
    });
    const yc = Y0 + 2 * H + 20;
    const regels = [m.eenheid, `In elke cel: eerst ${m.A}, dan ${m.B}.`];
    return svg(340, yc + 16 * regels.length - 8, `Opbrengstenmatrix van ${m.A} en ${m.B}`, out + cap(yc, regels));
  }

  // ---------- grafiek met assen, raster en schaalverdeling ----------
  // x loopt van 45 tot 325, y van 160 (nul) tot 12 (maximum); vijf stappen per as.
  function grafiek(xt, yt, xl, yl) {
    let out = "";
    for (let i = 1; i <= 5; i++) {
      const x = 45 + i * 56, y = 160 - i * 29.6;
      out += lijn(x, 160, x, 12, "raster") + lijn(45, y, 325, y, "raster") +
        t(x, 174, xl[i - 1], "middle", "k") + t(40, y + 4, yl[i - 1], "end", "k");
    }
    return out + t(40, 174, "0", "end", "k") + lijn(45, 160, 325, 160) + lijn(45, 160, 45, 12) +
      t(185, 192, xt + " →", "middle", "k") +
      `<text transform="translate(11,86) rotate(-90)" text-anchor="middle" class="k">${yt} →</text>`;
  }

  const monoBasis = () =>
    grafiek("afzet (q)", "euro's per stuk", ["20", "40", "60", "80", "100"], ["20", "40", "60", "80", "100"]) +
    lijn(45, 12, 325, 160, "curve") + lijn(45, 12, 185, 160, "curve2") + lijn(45, 130.4, 325, 130.4, "curve3") +
    t(128, 44, "GO = prijsafzetlijn", "start", "b pa") + t(110, 96, "MO", "end", "b pr") + t(322, 124, "MK", "end", "b");
  const monoHulp = () => lijn(157, 160, 157, 71.2, "stip") + lijn(45, 71.2, 157, 71.2, "stip") + stip(157, 130.4) + stip(157, 71.2);

  const F = {
    m_reclame: () => matrix({
      A: "Frisco", B: "Kola", sA: ["geen reclame", "wel reclame"], sB: ["geen reclame", "wel reclame"],
      p: [[[10, 10], [4, 13]], [[13, 4], [7, 7]]],
      eenheid: "Winst in miljoenen euro's per jaar."
    }),
    m_uitbreiden: () => matrix({
      A: "Groot", B: "Klein", sA: ["uitbreiden", "niet uitbreiden"], sB: ["uitbreiden", "niet uitbreiden"],
      p: [[[6, 2], [9, 3]], [[4, 5], [7, 4]]],
      eenheid: "Winst in miljoenen euro's per jaar."
    }),
    m_prijs: () => matrix({
      A: "Tango", B: "Vito", sA: ["hoge prijs", "lage prijs"], sB: ["hoge prijs", "lage prijs"],
      p: [[[50, 50], [20, 60]], [[60, 20], [30, 30]]],
      eenheid: "Winst in duizenden euro's per maand."
    }),

    // markt (vraag en aanbod) naast één aanbieder (horizontale prijslijn)
    vc_markt(quiz) {
      const body =
        t(90, 16, "De hele markt", "middle", "b") + t(262, 16, "Eén aanbieder", "middle", "b") +
        lijn(30, 150, 150, 150) + lijn(30, 150, 30, 30) + lijn(200, 150, 325, 150) + lijn(200, 150, 200, 30) +
        t(24, 36, "p", "end", "k") + t(150, 164, "Q", "end", "k") + t(194, 36, "p", "end", "k") + t(325, 164, "q", "end", "k") +
        lijn(40, 40, 140, 140, "curve") + lijn(40, 140, 140, 40, "curve2") +
        t(146, 144, "V", "start", "b") + t(146, 40, "A", "start", "b") +
        lijn(30, 90, 200, 90, "stip") + lijn(200, 90, 320, 90, "curve3") + stip(90, 90) +
        t(260, 82, quiz ? "?" : "p = GO = MO", "middle", "b");
      return svg(340, quiz ? 172 : 206, "Marktprijs bij volkomen concurrentie", body + (quiz ? "" : cap(184, [
        "De marktprijs volgt uit vraag (V) en aanbod (A) op de markt.",
        "Eén aanbieder kan tegen die prijs alles verkopen."
      ])));
    },

    // TO = 20q, TK = 12q + 4.000, capaciteit 1.000
    vc_totaal(quiz) {
      const body =
        grafiek("productie en afzet (q)", "euro's (× 1.000)", ["200", "400", "600", "800", "1.000"], ["4", "8", "12", "16", "20"]) +
        lijn(45, 160, 325, 12, "curve") + lijn(45, 130.4, 325, 41.6, "curve2") +
        t(292, 20, "TO", "end", "b pa") + t(322, 60, "TK", "end", "b pr") +
        (quiz ? "" : stip(185, 86) + t(178, 80, "break-even", "end", "k"));
      const regels = quiz ? ["De capaciteit is 1.000 stuks."] : ["Break-even bij q = 500: TO = TK = € 10.000.", "Links daarvan verlies, rechts winst. Capaciteit: 1.000 stuks."];
      return svg(340, 206 + 16 * regels.length, "Totale opbrengst en totale kosten", body + cap(212, regels));
    },

    // GO = 20, GTK = 12 + 4.000/q (zelfde bedrijf als vc_totaal)
    vc_gtk(quiz) {
      let d = "";
      for (let q = 110; q <= 1000; q += 10) d += `${q === 110 ? "M" : "L"}${(45 + q * 0.28).toFixed(1)} ${(160 - (12 + 4000 / q) * 2.96).toFixed(1)}`;
      const body =
        grafiek("productie en afzet (q)", "euro's per stuk", ["200", "400", "600", "800", "1.000"], ["10", "20", "30", "40", "50"]) +
        lijn(45, 100.8, 325, 100.8, "curve") + `<path d="${d}" class="curve2"/>` +
        t(322, 94, "GO = prijs", "end", "b pa") + t(112, 40, "GTK", "start", "b pr") +
        (quiz ? "" : lijn(185, 160, 185, 100.8, "stip") + stip(185, 100.8));
      const regels = quiz ? [] : ["Break-even bij q = 500: GO = GTK = € 20.", "Rechts daarvan is GO hoger dan GTK: winst op elk product."];
      return svg(340, 200 + 16 * regels.length, "Gemiddelde opbrengst en gemiddelde totale kosten", body + cap(212, regels));
    },

    // marktprijs 7; de leerling leidt MK en winst zelf af (in de samenvatting staan ze erbij)
    vc_tabel(quiz) {
      const TK = [8, 12, 15, 19, 25, 33, 43];
      const rij = TK.map((tk, q) => `<tr><td>${q}</td><td>${7 * q}</td><td>${tk}</td>` +
        (quiz ? "" : `<td>${q ? tk - TK[q - 1] : "–"}</td><td>${7 * q - tk}</td>`) + `</tr>`).join("");
      return `<table class="tabel getal"><caption>Marktprijs: € 7 per stuk. Bedragen in euro's.</caption>
        <tr><th>q</th><th>TO</th><th>TK</th>${quiz ? "" : "<th>MK</th><th>winst</th>"}</tr>${rij}</table>`;
    },

    // p = -q + 100, MO = -2q + 100, MK = 20
    mono(quiz) {
      const regels = quiz ? [] : ["Maximale winst: MO = MK bij q = 40.", "De prijs lees je af op de prijsafzetlijn: € 60."];
      return svg(340, 200 + 16 * regels.length, "Monopolie: prijsafzetlijn, MO en MK", monoBasis() + (quiz ? "" : monoHulp()) + cap(212, regels));
    },

    // zelfde monopolist met GTK = 20 + 1.000/q; de winst is een rechthoek
    mono_winst(quiz) {
      let d = "";
      for (let q = 13; q <= 100; q += 1) d += `${q === 13 ? "M" : "L"}${(45 + q * 2.8).toFixed(1)} ${(160 - (20 + 1000 / q) * 1.48).toFixed(1)}`;
      const regels = ["Bij q = 40 zijn de GTK € 45."].concat(quiz ? [] : ["Het gekleurde vlak is de winst: (60 − 45) × 40 = € 600."]);
      return svg(340, 200 + 16 * regels.length, "Monopolie: winst als vlak tussen prijs en GTK",
        `<rect x="45" y="71.2" width="112" height="22.2" class="vlak"/>` + monoBasis() + monoHulp() +
        `<path d="${d}" class="curve4"/>` + t(94, 24, "GTK", "start", "b pb") + stip(157, 93.4) + cap(212, regels));
    },

    // consumentensurplus: driehoek onder de prijsafzetlijn en boven de prijs
    mono_surplus(quiz) {
      const regels = quiz ? [] : ["Consumentensurplus = ½ × 40 × (100 − 60) = € 800."];
      return svg(340, 200 + 16 * regels.length, "Monopolie: consumentensurplus",
        `<polygon points="45,12 45,71.2 157,71.2" class="vlak"/>` + monoBasis() + monoHulp() + cap(212, regels));
    },

    marktvormen: () => `<table class="tabel">
      <tr><th>Marktvorm</th><th>Aantal</th><th>Product</th><th>Toetreden</th></tr>
      <tr><td><b>Volkomen concurrentie</b><small>aardappeltelers</small></td><td>veel</td><td>homogeen</td><td>makkelijk</td></tr>
      <tr><td><b>Monopolistische concurrentie</b><small>kappers, restaurants</small></td><td>veel</td><td>heterogeen</td><td>makkelijk</td></tr>
      <tr><td><b>Oligopolie</b><small>benzine, telecom</small></td><td>weinig</td><td>homogeen of heterogeen</td><td>moeilijk</td></tr>
      <tr><td><b>Monopolie</b><small>spoorbeheer, drinkwater</small></td><td>één</td><td>uniek</td><td>(bijna) niet</td></tr>
    </table>`
  };

  window.FIG = (naam, quiz) => (F[naam] ? F[naam](!!quiz) : "");
})();
