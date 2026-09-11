// ---------------------------------------------------------------------------
// Site interactions: stat counters, gallery filter, donate tiers, contact form.
// Bootstrap's own JS bundle handles the navbar collapse/dropdown and the
// testimonial carousel — no custom code needed for those.
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  initStatCounters();
  initGalleryFilters();
  initDonateTiers();
  initContactForm();
});

/* --------------------------------------------------------- STAT COUNTERS */
function initStatCounters() {
  const counters = document.querySelectorAll("[data-animate-count]");
  if (!counters.length) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.animateCount, 10);
        const suffix = el.dataset.suffix || "";
        observer.unobserve(el);

        if (prefersReduced) {
          el.textContent = target + suffix;
          return;
        }

        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------ GALLERY -- */
function initGalleryFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const tiles = document.querySelectorAll("[data-category]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      tiles.forEach((tile) => {
        const show = filter === "All" || tile.dataset.category === filter;
        tile.closest(".gallery-tile-col").style.display = show ? "" : "none";
      });
    });
  });
}

/* ------------------------------------------------------------- DONATE -- */
function initDonateTiers() {
  const tierButtons = document.querySelectorAll("[data-tier-amount]");
  const customInput = document.getElementById("custom-amount");
  const submitBtn = document.getElementById("donate-submit");
  if (!submitBtn) return;

  function updateSubmitLabel(amount) {
    submitBtn.textContent = "Donate " + amount + " now";
  }

  tierButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tierButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (customInput) customInput.value = "";
      updateSubmitLabel(btn.dataset.tierAmount);
    });
  });

  if (customInput) {
    customInput.addEventListener("input", () => {
      if (customInput.value) {
        tierButtons.forEach((b) => b.classList.remove("active"));
        updateSubmitLabel("₹" + customInput.value);
      } else {
        const active = document.querySelector("[data-tier-amount].active");
        if (active) updateSubmitLabel(active.dataset.tierAmount);
      }
    });
  }
}

/* ------------------------------------------------------------- CONTACT - */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const message = document.getElementById("message");
  const counter = document.getElementById("message-count");
  const maxLength = 180;

  if (message && counter) {
    message.addEventListener("input", () => {
      if (message.value.length > maxLength) {
        message.value = message.value.slice(0, maxLength);
      }
      counter.textContent = message.value.length + " / " + maxLength;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // No backend is connected yet — this only simulates a submission.
    // Wire this up to your form endpoint / email service when ready.
    form.classList.add("d-none");
    document.getElementById("contact-success").classList.remove("d-none");
  });
}

/* ---------------------------------------------------------- NAVBAR SHADOW */
(function initNavbarScroll() {
  const nav = document.querySelector(".site-navbar");
  if (!nav) return;

  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

/* --------------------------------------------------------------- AOS INIT */
if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 60,
    easing: "ease-out-cubic",
  });
}
