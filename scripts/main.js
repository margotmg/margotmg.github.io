/* ==========================================================================
   MM Portfolio — interactions
   1. scroll reveal
   2. nav (pinned to the top) + mobile drawer
   3. capabilities sticky-media sync
   4. local clock + year
   ========================================================================== */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- 1. scroll reveal --------------------------------------------------- */
const revealables = document.querySelectorAll(".reveal, .reveal-img");

if (reduced || !("IntersectionObserver" in window)) {
  revealables.forEach((el) => el.classList.add("is-inview"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-inview");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );
  revealables.forEach((el) => revealObserver.observe(el));
}

/* --- 2. nav ------------------------------------------------------------- */
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

const isMenuOpen = () => nav.dataset.navStatus === "active";

const setMenu = (open) => {
  nav.dataset.navStatus = open ? "active" : "not-active";
  toggle?.setAttribute("aria-expanded", String(open));
  // lock the page behind the fullscreen panel
  document.body.style.overflow = open ? "hidden" : "";
};

// the nav stays pinned at the top (no hide-on-scroll); keep anchor jumps
// (#about, #writing…) from landing underneath it
const setNavOffset = () =>
  document.documentElement.style.setProperty("scroll-padding-top", `${nav.offsetHeight}px`);
setNavOffset();
window.addEventListener("resize", setNavOffset);

toggle?.addEventListener("click", () => setMenu(!isMenuOpen()));

// any link inside the panel closes it
menu?.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen()) setMenu(false);
});

/* highlight the section currently in view
   The section crossing the middle of the screen wins; above the first
   section (the hero) that is "Home" (#top).                               */
const menuLinks = [...document.querySelectorAll(".nav__menu-list a")];
const pageSections = [...document.querySelectorAll("main > section[id]")];
// which menu link belongs to a section: "#id", or the events page for #events
const linkFor = (id) =>
  menuLinks.find((a) => {
    const href = a.getAttribute("href");
    return href === `#${id}` || (id === "events" && href === "events.html");
  });

function updateCurrentLink() {
  const middle = window.innerHeight / 2;
  let current = "top";
  pageSections.forEach((sec) => {
    if (sec.getBoundingClientRect().top <= middle) current = sec.id;
  });
  // at the very bottom, the last section is current even if it is short
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && pageSections.length) {
    current = pageSections[pageSections.length - 1].id;
  }
  const active = linkFor(current);
  menuLinks.forEach((a) => a.setAttribute("aria-current", String(a === active)));
}

// only on the homepage (the page whose menu links point at its own sections)
if (pageSections.length && linkFor("top")) {
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateCurrentLink(); ticking = false; });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateCurrentLink();
}

/* --- 3b. about: scroll-driven word opacity --------------------------------
   Splits the paragraph into words, then maps scroll progress through the
   element onto a moving edge — words ahead of the edge stay faded.          */
const scrollTexts = [...document.querySelectorAll("[data-scroll-text]")];

const FADED = 0.18;

scrollTexts.forEach((el) => {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  words.forEach((w, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = w;
    span.style.setProperty("--word-opacity", reduced ? 1 : FADED);
    el.append(span);
    if (i < words.length - 1) el.append(document.createTextNode(" "));
  });
});

if (scrollTexts.length && !reduced) {
  let ticking = false;

  const paint = () => {
    ticking = false;
    scrollTexts.forEach((el) => {
      const words = el.querySelectorAll(".word");
      if (!words.length) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 80% of the viewport,
      // 1 by the time its bottom passes 35% — the reveal happens in that band
      const start = vh * 0.8;
      const end = vh * 0.35;
      const progress = (start - rect.top) / (start - end + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);

      // soft edge: a few words light up at a time rather than snapping
      const edge = clamped * (words.length + 6) - 3;
      words.forEach((word, i) => {
        const t = Math.min(Math.max((edge - i) / 4 + 0.5, 0), 1);
        word.style.setProperty("--word-opacity", (FADED + (1 - FADED) * t).toFixed(3));
      });
    });
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    },
    { passive: true }
  );
  window.addEventListener("resize", paint, { passive: true });
  paint();
}

/* --- 4. clock + year ---------------------------------------------------- */
const clock = document.getElementById("clock");

const tick = () => {
  if (!clock) return;
  clock.textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  }).format(new Date());
};

if (clock) {
  tick();
  setInterval(tick, 30_000);
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
