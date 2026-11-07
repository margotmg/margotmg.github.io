/* ==========================================================================
   FIGURES — data graphics for the E2R post
   All values transcribed from Madina, Gonzalez-Dios & Siegel (LREC-COLING
   2024), Figure 1 and Tables 1–3. No value here is estimated.
   Every chart also writes its numbers into the DOM as text, so the content
   survives with JS disabled or a screen reader in use.
   ========================================================================== */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- data ---------------- */

  // PIAAC mean literacy score, adults 16–65 (values cited in the paper's text)
  const PIAAC = [
    { place: "OECD average", score: 266, mark: true },
    { place: "Spain",        score: 252 },
    { place: "Mexico",       score: 222 },
    { place: "Chile",        score: 220 },
    { place: "Ecuador",      score: 196 },
    { place: "Peru",         score: 196 },
  ];

  // Table 1 — total words per text, per version
  const WORDS = {
    original: [811, 721, 867, 263, 265, 391, 387, 1143, 547, 795],
    lf:       [425, 454, 521, 159, 251, 200, 223,  534, 297, 440],
    gpt:      [175, 179, 237, 156, 218, 201, 120,  250, 157, 155],
  };

  // Table 2 — checklist-based manual evaluation (%)
  const CHECKLIST = {
    ev1: [70.00, 66.67, 63.33, 70.00, 70.00, 66.67, 70.00, 66.67, 73.33, 70.00],
    ev2: [66.67, 63.33, 60.00, 66.67, 70.00, 50.00, 73.33, 66.67, 70.00, 63.33],
    avg: [68.33, 65.00, 61.67, 68.33, 70.00, 58.33, 71.57, 66.67, 71.67, 66.67],
  };

  // Table 3 — users' evaluation, 10 participants
  const USERS = [
    { id: 1,  retellGpt: 1, retellLf: 1, ansGpt: 1, ansLf: 1 },
    { id: 2,  retellGpt: 0, retellLf: 0, ansGpt: 1, ansLf: 1 },
    { id: 3,  retellGpt: 0, retellLf: 0, ansGpt: 0, ansLf: 0 },
    { id: 4,  retellGpt: 0, retellLf: 1, ansGpt: 0, ansLf: 0 },
    { id: 5,  retellGpt: 0, retellLf: 0, ansGpt: 0, ansLf: 0 },
    { id: 6,  retellGpt: 1, retellLf: 1, ansGpt: 1, ansLf: 1 },
    { id: 7,  retellGpt: 0, retellLf: 0, ansGpt: 0, ansLf: 0 },
    { id: 8,  retellGpt: 1, retellLf: 1, ansGpt: 1, ansLf: 1 },
    { id: 9,  retellGpt: 1, retellLf: 1, ansGpt: 1, ansLf: 1 },
    { id: 10, retellGpt: 0, retellLf: 0, ansGpt: 0, ansLf: 0 },
  ];

  const SERIES = {
    original: { label: "Original", css: "var(--series-original)" },
    lf:       { label: "Lectura Fácil", css: "var(--series-lf)" },
    gpt:      { label: "ChatGPT", css: "var(--series-gpt)" },
  };

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---------------- reveal on scroll ---------------- */
  const io = reduced || !("IntersectionObserver" in window)
    ? null
    : new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-inview");
          io.unobserve(e.target);
        });
      }, { threshold: 0.2 });

  const watch = (node) => (io ? io.observe(node) : node.classList.add("is-inview"));

  /* ---------------- Fig 1 — PIAAC literacy ---------------- */
  const piaac = document.getElementById("fig-piaac");
  if (piaac) {
    const max = 300;
    const wrap = el("div", "hbars");
    PIAAC.forEach((d) => {
      const row = el("div", "hbar" + (d.mark ? " hbar--mark" : ""));
      row.append(el("div", "hbar__label", d.place));
      const track = el("div", "hbar__track");
      const fill = el("div", "hbar__fill");
      fill.style.setProperty("--w", `${(d.score / max) * 100}%`);
      track.append(fill);
      row.append(track, el("div", "hbar__value", String(d.score)));
      wrap.append(row);
    });
    piaac.append(wrap);
    watch(piaac);
  }

  /* ---------------- Fig 2 — word counts ---------------- */
  const words = document.getElementById("fig-words");
  if (words) {
    const readout = el("div", "readout");

    const toggle = el("div", "toggle");
    const modes = [["total", "Total words"], ["cut", "% removed"]];
    let mode = "total";

    const legend = el("div", "legend");
    Object.entries(SERIES).forEach(([k, s]) => {
      const item = el("button", "legend__item");
      item.type = "button";
      item.innerHTML = `<span class="legend__swatch" style="--c:${s.css}"></span>${s.label}`;
      item.addEventListener("mouseenter", () => (chart.dataset.focus = k));
      item.addEventListener("mouseleave", () => delete chart.dataset.focus);
      item.addEventListener("focus", () => (chart.dataset.focus = k));
      item.addEventListener("blur", () => delete chart.dataset.focus);
      legend.append(item);
    });

    const chart = el("div", "cols");

    const pct = (v, base) => Math.round(((base - v) / base) * 100);

    const draw = () => {
      chart.innerHTML = "";
      const maxWords = Math.max(...WORDS.original);
      WORDS.original.forEach((_, i) => {
        const g = el("div", "colgroup");
        g.dataset.label = i + 1;

        const vals = {
          original: WORDS.original[i],
          lf: WORDS.lf[i],
          gpt: WORDS.gpt[i],
        };

        Object.entries(SERIES).forEach(([k, s]) => {
          const bar = el("div", `col col--${k}`);
          bar.style.setProperty("--c", s.css);
          const h = mode === "total"
            ? (vals[k] / maxWords) * 100
            : k === "original" ? 100 : pct(vals[k], vals.original);
          bar.style.setProperty("--h", `${Math.max(h, 1)}%`);
          g.append(bar);
        });

        const describe = () => {
          readout.innerHTML =
            `<span class="readout__text">Text ${i + 1}</span>` +
            `<span>Original ${vals.original} words</span>` +
            `<span>Lectura Fácil ${vals.lf} (&minus;${pct(vals.lf, vals.original)}%)</span>` +
            `<span>ChatGPT ${vals.gpt} (&minus;${pct(vals.gpt, vals.original)}%)</span>`;
        };
        g.addEventListener("mouseenter", describe);
        g.addEventListener("focus", describe);
        g.addEventListener("mouseleave", () => (readout.innerHTML = ""));
        g.tabIndex = 0;

        chart.append(g);
      });
      if (!io) chart.classList.add("is-inview");
      else requestAnimationFrame(() => chart.classList.add("is-inview"));
    };

    modes.forEach(([key, label], i) => {
      const b = el("button", null, label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(i === 0));
      b.addEventListener("click", () => {
        mode = key;
        [...toggle.children].forEach((c) =>
          c.setAttribute("aria-pressed", String(c === b)));
        draw();
      });
      toggle.append(b);
    });

    words.append(toggle, legend, readout, chart);
    draw();
    watch(chart);
  }

  /* ---------------- Fig 3 — checklist scores ---------------- */
  const checks = document.getElementById("fig-checklist");
  if (checks) {
    const key = el("div", "bands__key",
      "Bands &nbsp;·&nbsp; &lt;60 low &nbsp;·&nbsp; 61–80 moderate &nbsp;·&nbsp; 81–95 substantial &nbsp;·&nbsp; 96–100 perfect");
    const wrap = el("div", "bands");
    wrap.append(key);
    CHECKLIST.avg.forEach((v, i) => {
      const row = el("div", "scorerow");
      row.append(el("div", "scorerow__label", `Text ${i + 1}`));
      const track = el("div", "scorerow__track");
      const fill = el("div", "scorerow__fill");
      fill.style.setProperty("--w", `${v}%`);
      track.append(fill);
      row.append(track, el("div", "scorerow__value", v.toFixed(2)));
      row.title = `Evaluator 1: ${CHECKLIST.ev1[i].toFixed(2)}% · Evaluator 2: ${CHECKLIST.ev2[i].toFixed(2)}%`;
      wrap.append(row);
    });
    checks.append(wrap);
    watch(checks);
  }

  /* ---------------- Fig 4 — the readers ---------------- */
  const people = document.getElementById("fig-people");
  if (people) {
    const grid = el("div", "people");
    USERS.forEach((u, i) => {
      const p = el("div", "person person--lf");
      p.style.setProperty("--i", i);
      p.innerHTML = `<span>P${u.id}</span><span class="person__pref">LF</span>`;
      p.title =
        `Participant ${u.id} — retold ChatGPT: ${u.retellGpt ? "yes" : "no"}, ` +
        `retold LF: ${u.retellLf ? "yes" : "no"}, preferred: Lectura Fácil`;
      grid.append(p);
    });
    const tally = el("p", "tally",
      "All <em>10 of 10</em> readers preferred the human version.");
    people.append(grid, tally);
    watch(people);
  }

  /* ======================================================================
     POST 2 — LanguageTool / LFWriteAssist
     ====================================================================== */

  /* Fig — availability audit of Spanish text-simplification tools.
     Status as reported in the paper's related-work section. */
  const TOOLS = [
    { name: "arText",        open: false, status: "operative" },
    { name: "Simplext",      open: false, status: "operative" },
    { name: "EASIER",        open: true,  status: "operative" },
    { name: "MUSST",         open: true,  status: "not operative" },
    { name: "NavegaFácil",   open: true,  status: "not operative" },
    { name: "OpenBook",      open: false, status: "not operative" },
    { name: "CASSA plug-in", open: false, status: "not operative" },
    { name: "DysWebxia",     open: false, status: "unknown" },
    { name: "LexSiS",        open: false, status: "unknown" },
  ];

  const tools = document.getElementById("fig-tools");
  if (tools) {
    const wrap = el("div", "tools");
    TOOLS.forEach((t, i) => {
      const cls = t.status === "operative" ? "ok"
                : t.status === "unknown" ? "unk" : "no";
      const row = el("div", `toolrow toolrow--${cls}`);
      row.style.setProperty("--i", i);
      row.innerHTML =
        `<span class="toolrow__name">${t.name}</span>` +
        `<span class="toolrow__open">${t.open ? "open source" : ""}</span>` +
        `<span class="toolrow__status">${t.status}</span>`;
      wrap.append(row);
    });
    tools.append(wrap);
    watch(tools);
  }

  /* Fig — the two kinds of rule, applied live */
  const rules = document.getElementById("fig-rules");
  if (rules) {
    const CASES = [
      {
        kind: "with",
        label: "Rule with a suggestion",
        rule: "Avoid figurative expressions",
        before: ["Ella habla ", ["hasta por los codos", "fix"], "."],
        after:  ["Ella habla ", ["mucho", "done"], "."],
        gloss: "“She talks even through her elbows” → “She talks a lot.”",
        note: "The rule carries a replacement, so LFWriteAssist corrects it automatically and marks the change in green.",
      },
      {
        kind: "without",
        label: "Rule without a suggestion",
        rule: "Avoid words of indeterminate content",
        before: ["Era un ", ["asunto", "flag"], " complicado."],
        after:  ["Era un ", ["asunto", "flag"], " complicado."],
        gloss: "“It was a complicated matter.”",
        note: "No safe replacement exists without knowing what the matter was. The tool flags it in orange and leaves the decision to the writer.",
      },
    ];

    const render = (c, applied) => {
      const parts = applied ? c.after : c.before;
      return parts.map((p) =>
        typeof p === "string" ? p
          : `<mark class="mk mk--${p[1]}">${p[0]}</mark>`).join("");
    };

    const panel = el("div", "rules");
    CASES.forEach((c) => {
      const card = el("div", "rulecard");
      const body = el("p", "rulecard__text", render(c, false));
      const btn = el("button", "rulecard__btn", "Corregir");
      let applied = false;
      btn.type = "button";
      btn.addEventListener("click", () => {
        applied = !applied;
        body.innerHTML = render(c, applied);
        btn.textContent = applied ? "Reset" : "Corregir";
        card.dataset.applied = String(applied);
      });
      card.append(
        el("p", "rulecard__label", c.label),
        el("p", "rulecard__rule", c.rule),
        body,
        el("p", "rulecard__gloss", c.gloss),
        btn,
        el("p", "rulecard__note", c.note));
      panel.append(card);
    });
    rules.append(panel);
    watch(rules);
  }

  /* ======================================================================
     POST 3 — dysarthric speech recognition
     ====================================================================== */

  // Table 1 — human evaluation: WER and perceived difficulty (1 easy … 5 hard)
  const HUMAN = [
    { sp: "C1", wer: 0.635, wsd: 0.689, pd: 3.685, psd: 1.302 },
    { sp: "M1", wer: 0.749, wsd: 0.692, pd: 3.880, psd: 1.283 },
    { sp: "W1", wer: 1.095, wsd: 0.443, pd: 4.540, psd: 0.801 },
  ];

  const human = document.getElementById("fig-human");
  if (human) {
    const wrap = el("div", "paired");
    const maxWer = 1.2, maxPd = 5;
    HUMAN.forEach((d, i) => {
      const row = el("div", "paired__row");
      row.style.setProperty("--i", i);
      row.innerHTML =
        `<span class="paired__sp">${d.sp}</span>
         <span class="paired__label">Word error rate</span>
         <span class="paired__track"><span class="paired__fill paired__fill--wer" style="--w:${(d.wer / maxWer) * 100}%"></span></span>
         <span class="paired__val">${d.wer.toFixed(3)}</span>
         <span class="paired__label">Perceived difficulty</span>
         <span class="paired__track"><span class="paired__fill paired__fill--pd" style="--w:${(d.pd / maxPd) * 100}%"></span></span>
         <span class="paired__val">${d.pd.toFixed(2)} / 5</span>`;
      wrap.append(row);
    });
    human.append(wrap);
    watch(human);
  }

  /* model conditions, ordered worst → best as the paper reports them */
  const MODELS = [
    { id: "B",  name: "Base",                  desc: "Azure's stock model, untouched.",                        rank: 1 },
    { id: "BG", name: "Base + grammar",        desc: "Stock model, but recognition restricted to the command vocabulary.", rank: 2 },
    { id: "C",  name: "Custom",                desc: "Acoustically adapted on the speaker's own recordings.",   rank: 3 },
    { id: "CG", name: "Custom + grammar",      desc: "Adapted on the speaker, and vocabulary-restricted.",      rank: 4 },
  ];

  const models = document.getElementById("fig-models");
  if (models) {
    const wrap = el("div", "models");
    MODELS.forEach((m, i) => {
      const card = el("div", "modelcard");
      card.style.setProperty("--i", i);
      card.innerHTML =
        `<span class="modelcard__id">${m.id}</span>
         <h4>${m.name}</h4>
         <p>${m.desc}</p>
         <span class="modelcard__rank">${"▪".repeat(m.rank)}<span class="modelcard__rank-dim">${"▪".repeat(4 - m.rank)}</span></span>`;
      wrap.append(card);
    });
    models.append(wrap);
    watch(models);
  }
})();
