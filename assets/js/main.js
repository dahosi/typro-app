/**
 * Typro landing page — progressive enhancement only.
 * The page is fully usable without JavaScript; this just adds the mobile
 * navigation toggle and the current year in the footer.
 */
(() => {
  "use strict";

  /* Mobile navigation toggle ------------------------------------------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector("#nav-menu");

  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
      );
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close the menu when a link is chosen or on Escape.
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  /* Footer year -------------------------------------------------------- */
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
