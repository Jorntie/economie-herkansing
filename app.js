// Leer-app: samenvatting, begrippen-flashcards en quiz per onderdeel.
(function () {
  "use strict";
  const app = document.getElementById("app");
  const KEY = "eco-herkansing-v1";
  THEMAS.sort((a, b) => a.id - b.id);

  // ---------- opslag (alleen op dit apparaat) ----------
  let store = { q: {}, c: {} }; // q[id] = 1 (laatst goed) of 0 (laatst fout); c[id] = 1 (begrip gekend)
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.q && raw.c) store = raw;
  } catch (e) { /* geen opslag beschikbaar: app werkt gewoon door */ }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* negeren */ }
  }

  // ---------- hulpfuncties ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const thema = (id) => THEMAS.find((t) => String(t.id) === String(id));
  function vragenVan(t, bi) {
    const out = [];
    t.bs.forEach((b, i) => {
      if (bi !== undefined && i !== bi) return;
      b.vragen.forEach((v, qi) => out.push({ id: `${t.id}-${i}-${qi}`, v, t, b, bi: i }));
    });
    return out;
  }
  const alleVragen = () => THEMAS.flatMap((t) => vragenVan(t));
  const aantalGoed = (lijst) => lijst.filter((x) => store.q[x.id] === 1).length;
  const bar = (n, tot) => `<div class="bar" role="img" aria-label="${n} van ${tot} goed"><i style="width:${tot ? Math.round((n / tot) * 100) : 0}%"></i></div>`;

  // ---------- pagina's ----------
  function home() {
    const fouten = alleVragen().filter((x) => store.q[x.id] === 0).length;
    app.innerHTML = `
      <h1>Klaar voor de herkansing?</h1>
      <p class="sub">Kies een paragraaf. Per onderdeel kun je de samenvatting lezen, de begrippen oefenen en een quiz doen.</p>
      ${THEMAS.map((t) => {
        const vs = vragenVan(t);
        const g = aantalGoed(vs);
        return `<a class="card" href="#/t/${t.id}">
          <div class="thema-head"><span class="ico">${t.icoon}</span>
            <div><h3>§ ${t.id} · ${esc(t.titel)}</h3><div class="meta">${esc(t.boek)} · ${t.bs.length} onderdelen · ${g}/${vs.length} vragen goed</div></div>
          </div>${bar(g, vs.length)}</a>`;
      }).join("")}
      <h2>Alles door elkaar</h2>
      <div class="card">
        <a class="btn primary big" href="#/quiz/mix">Oefentoets · 20 vragen uit alle paragrafen</a>
        <div class="row">
          ${fouten ? `<a class="btn bad" href="#/quiz/fout">Mijn fouten herhalen (${fouten})</a>` : `<span class="meta">Nog geen fouten om te herhalen.</span>`}
        </div>
      </div>
      <p style="text-align:center"><button class="btn link" id="reset">Voortgang wissen</button></p>`;
    document.getElementById("reset").onclick = () => {
      if (confirm("Alle voortgang op dit apparaat wissen?")) { store = { q: {}, c: {} }; save(); home(); }
    };
  }

  function themaPagina(t) {
    const vs = vragenVan(t);
    app.innerHTML = `
      <a class="crumb" href="#/">← Overzicht</a>
      <h1>${t.icoon} § ${t.id} · ${esc(t.titel)}</h1>
      <p class="sub">${esc(t.boek)}</p>
      <a class="btn primary big" href="#/quiz/${t.id}">Quiz over de hele paragraaf (${vs.length} vragen)</a>
      ${t.bs.map((b, i) => {
        const bv = vragenVan(t, i);
        const g = aantalGoed(bv);
        const gek = b.begrippen.filter((_, ci) => store.c[`${t.id}-${i}-${ci}`]).length;
        return `<div class="card">
          <h3>${i + 1}. ${esc(b.titel)}</h3>
          <div class="meta">${g}/${bv.length} vragen goed · ${gek}/${b.begrippen.length} begrippen gekend</div>
          ${bar(g, bv.length)}
          <div class="row">
            <a class="btn" href="#/leer/${t.id}/${i}">📖 Samenvatting</a>
            <a class="btn" href="#/kaart/${t.id}/${i}">🃏 Begrippen</a>
            <a class="btn primary" href="#/quiz/${t.id}/${i}">✅ Quiz</a>
          </div></div>`;
      }).join("")}`;
  }

  function leer(t, bi) {
    const b = t.bs[bi];
    app.innerHTML = `
      <a class="crumb" href="#/t/${t.id}">← § ${t.id}</a>
      <h1>${bi + 1}. ${esc(b.titel)}</h1>
      <h2>Kern</h2>
      <div class="card"><ul class="kern">${b.kern.map((k) => `<li>${esc(k)}</li>`).join("")}</ul></div>
      ${(b.fig || []).length ? `<h2>In beeld</h2>${b.fig.map((f) => `<div class="card figkaart">${FIG(f)}</div>`).join("")}` : ""}
      ${b.voorbeeld ? `<h2>Rekenvoorbeeld</h2><div class="card"><p><b>${esc(b.voorbeeld.titel)}</b></p><ol class="stappen">${b.voorbeeld.stappen.map((r) => `<li>${esc(r)}</li>`).join("")}</ol></div>` : ""}
      <h2>Begrippen</h2>
      <div class="card"><dl class="begrippen">${b.begrippen.map(([term, def]) => `<dt>${esc(term)}</dt><dd>${esc(def)}</dd>`).join("")}</dl></div>
      <h2>Inzichtvraag</h2>
      <div class="card">
        <p><b>${esc(b.open.q)}</b></p>
        <p class="meta">Schrijf eerst zelf je antwoord op. Kijk daarna pas.</p>
        <details><summary>Toon modelantwoord</summary><div class="model">${esc(b.open.a)}</div></details>
      </div>
      <div class="two">
        <a class="btn" href="#/kaart/${t.id}/${bi}">🃏 Begrippen oefenen</a>
        <a class="btn primary" href="#/quiz/${t.id}/${bi}">✅ Quiz maken</a>
      </div>`;
  }

  function kaarten(t, bi) {
    const b = t.bs[bi];
    let rij = shuffle(b.begrippen.map((c, ci) => ({ c, id: `${t.id}-${bi}-${ci}` })));
    const totaal = rij.length;
    let om = false;
    function teken() {
      if (!rij.length) {
        app.innerHTML = `
          <a class="crumb" href="#/t/${t.id}">← § ${t.id}</a>
          <h1>Alle begrippen gekend 🎉</h1>
          <p class="sub">${esc(b.titel)} · ${totaal} begrippen</p>
          <div class="two">
            <a class="btn" href="#/t/${t.id}">Terug naar paragraaf</a>
            <a class="btn primary" href="#/quiz/${t.id}/${bi}">✅ Nu de quiz</a>
          </div>
          <p style="text-align:center"><button class="btn link" id="weer">Nog een keer oefenen</button></p>`;
        document.getElementById("weer").onclick = () => kaarten(t, bi);
        return;
      }
      const k = rij[0];
      app.innerHTML = `
        <a class="crumb" href="#/t/${t.id}">← § ${t.id}</a>
        <div class="progress-line"><span>${esc(b.titel)}</span><span>${totaal - rij.length}/${totaal} gekend</span></div>
        ${bar(totaal - rij.length, totaal)}
        <div class="card flash" id="flash" tabindex="0" role="button" aria-label="Kaart omdraaien">
          <div class="term">${esc(k.c[0])}</div>
          ${om ? `<div class="def">${esc(k.c[1])}</div>` : `<div class="hint">Bedenk de betekenis en tik om te draaien</div>`}
        </div>
        ${om ? `<div class="two"><button class="btn bad" id="nee">Nog niet</button><button class="btn good" id="ja">Wist ik</button></div>` : `<button class="btn primary big" id="draai">Draai om</button>`}`;
      const draai = () => { if (!om) { om = true; teken(); } };
      document.getElementById("flash").onclick = draai;
      document.getElementById("flash").onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); draai(); } };
      if (!om) document.getElementById("draai").onclick = draai;
      else {
        document.getElementById("ja").onclick = () => { store.c[k.id] = 1; save(); rij.shift(); om = false; teken(); };
        document.getElementById("nee").onclick = () => { delete store.c[k.id]; save(); rij.push(rij.shift()); om = false; teken(); };
      }
    }
    teken();
  }

  function quiz(lijst, titel, terug) {
    if (!lijst.length) {
      app.innerHTML = `<a class="crumb" href="${terug}">← Terug</a><h1>${esc(titel)}</h1><div class="card">Er zijn hier nu geen vragen. Goed bezig!</div>`;
      return;
    }
    let i = 0;
    const fouten = [];
    function vraag() {
      const x = lijst[i];
      const goed = x.v.a[0];
      const opties = shuffle(x.v.a);
      app.innerHTML = `
        <a class="crumb" href="${terug}">← Stoppen</a>
        <div class="progress-line"><span>${esc(titel)}</span><span>Vraag ${i + 1}/${lijst.length}</span></div>
        ${bar(i, lijst.length)}
        <div class="meta" style="margin-top:14px;color:var(--muted);font-size:14px">§ ${x.t.id} · ${esc(x.b.titel)}</div>
        ${x.v.fig ? `<div class="card figkaart">${FIG(x.v.fig, true)}</div>` : ""}
        <div class="vraag">${esc(x.v.q)}</div>
        <div id="opts">${opties.map((o, n) => `<button class="opt" data-n="${n}">${esc(o)}</button>`).join("")}</div>
        <div id="na"></div>`;
      const knoppen = [...app.querySelectorAll(".opt")];
      knoppen.forEach((k, n) => {
        k.onclick = () => {
          const juist = opties[n] === goed;
          knoppen.forEach((kk, m) => {
            kk.disabled = true;
            if (opties[m] === goed) kk.classList.add("goed");
          });
          if (!juist) { k.classList.add("fout"); fouten.push(x); }
          store.q[x.id] = juist ? 1 : 0;
          save();
          const laatste = i === lijst.length - 1;
          document.getElementById("na").innerHTML = `
            <div class="uitleg"><b>${juist ? "Goed! ✅" : "Niet goed ❌"}</b>${esc(x.v.u)}</div>
            <button class="btn primary big" id="verder">${laatste ? "Bekijk resultaat" : "Volgende vraag"}</button>`;
          const verder = document.getElementById("verder");
          verder.onclick = () => { i++; if (i < lijst.length) vraag(); else klaar(); window.scrollTo(0, 0); };
          verder.scrollIntoView({ block: "nearest", behavior: "smooth" });
        };
      });
    }
    function klaar() {
      const goed = lijst.length - fouten.length;
      const pct = Math.round((goed / lijst.length) * 100);
      const tekst = pct === 100 ? "Alles goed, top! 🎉" : pct >= 75 ? "Mooi resultaat! 💪" : pct >= 55 ? "Je bent er bijna. Herhaal je fouten." : "Lees de samenvatting nog eens en probeer opnieuw.";
      app.innerHTML = `
        <a class="crumb" href="${terug}">← Terug</a>
        <h1>${esc(titel)}</h1>
        <div class="card"><p class="score">${goed}/${lijst.length}</p><p class="score-sub">${pct}% goed · ${tekst}</p>${bar(goed, lijst.length)}</div>
        <div class="two">
          ${fouten.length ? `<button class="btn bad" id="herhaal">Fouten opnieuw (${fouten.length})</button>` : `<a class="btn" href="#/">Overzicht</a>`}
          <a class="btn primary" href="${terug}">Verder</a>
        </div>
        ${fouten.length ? `<h2>Dit had je fout</h2><div class="fouten-lijst">${fouten.map((x) => `<div class="card"><div class="meta">§ ${x.t.id} · ${esc(x.b.titel)}</div><p><b>${esc(x.v.q)}</b></p><p class="ans">✔ ${esc(x.v.a[0])}</p><p>${esc(x.v.u)}</p></div>`).join("")}</div>` : ""}`;
      const h = document.getElementById("herhaal");
      if (h) h.onclick = () => { quiz(shuffle(fouten), "Fouten herhalen", terug); window.scrollTo(0, 0); };
    }
    vraag();
  }

  // ---------- router ----------
  function route() {
    const p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    window.scrollTo(0, 0);
    const t = thema(p[1]);
    const bi = p[2] !== undefined ? Number(p[2]) : undefined;
    const bsOk = t && bi !== undefined && t.bs[bi];
    if (p[0] === "t" && t) return themaPagina(t);
    if (p[0] === "leer" && bsOk) return leer(t, bi);
    if (p[0] === "kaart" && bsOk) return kaarten(t, bi);
    if (p[0] === "quiz") {
      if (p[1] === "mix") return quiz(shuffle(alleVragen()).slice(0, 20), "Oefentoets", "#/");
      if (p[1] === "fout") return quiz(shuffle(alleVragen().filter((x) => store.q[x.id] === 0)), "Mijn fouten", "#/");
      if (bsOk) return quiz(shuffle(vragenVan(t, bi)), t.bs[bi].titel, `#/t/${t.id}`);
      if (t) return quiz(shuffle(vragenVan(t)), `§ ${t.id} · ${t.titel}`, `#/t/${t.id}`);
    }
    home();
  }
  window.addEventListener("hashchange", route);
  route();
})();
