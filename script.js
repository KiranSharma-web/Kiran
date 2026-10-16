const portfolioData = {
  contact: {
    email: "sharma.kiran.tech@gmail.com",
    linkedin: "linkedin.com/in/sharmaakiran",
    linkedinUrl: "https://www.linkedin.com/in/sharmaakiran",
  },
};

const contactEmailLink = document.querySelector("[data-contact-email-link]");
contactEmailLink.href = `mailto:${portfolioData.contact.email}`;

document.querySelector("[data-contact-email]").textContent =
  portfolioData.contact.email;

const linkedinLink = document.querySelector("[data-contact-linkedin]");
linkedinLink.textContent = portfolioData.contact.linkedin;
linkedinLink.href = portfolioData.contact.linkedinUrl;
linkedinLink.target = "_blank";
linkedinLink.rel = "noopener noreferrer";

const stages = [
  {
    title: "Source candidates.",
    body: "Identify and source relevant candidates for open roles.",
    chips: ["Candidate sourcing", "Open roles"],
    icon: "◎",
    foot: "CANDIDATE SOURCING",
  },
  {
    title: "Screen profiles.",
    body: "Review resumes and candidate profiles against role requirements.",
    chips: ["Resume screening", "Profile review"],
    icon: "◌",
    foot: "PROFILE SCREENING",
  },
  {
    title: "Shortlist candidates.",
    body: "Compare candidate profiles with stated role criteria as part of a typical recruitment workflow.",
    chips: ["Candidate shortlisting", "Role requirements"],
    icon: "⌕",
    foot: "CANDIDATE SHORTLISTING",
  },
  {
    title: "Coordinate interviews.",
    body: "Coordinate interview times and share relevant details with candidates and interviewers.",
    chips: ["Interview scheduling", "Hiring manager coordination"],
    icon: "↗",
    foot: "INTERVIEW COORDINATION",
  },
  {
    title: "Support onboarding.",
    body: "Support employee onboarding activities and prepare joining documentation.",
    chips: ["Employee onboarding", "Joining documentation"],
    icon: "✳",
    foot: "ONBOARDING SUPPORT",
  },
  {
    title: "Support HR operations.",
    body: "Typical HR operations can include maintaining records and reports, supporting employee queries, assisting with payroll activities and handling documentation carefully.",
    chips: ["HR records & reporting", "Employee support", "Payroll support"],
    icon: "◎",
    foot: "PEOPLE & HR OPERATIONS",
  },
];
const topbar = document.querySelector(".topbar"),
  nav = document.querySelector("#nav"),
  menu = document.querySelector(".menu-toggle");
function updateHeader() {
  topbar.classList.toggle("scrolled", window.scrollY > 18);
  let best = "home";
  document.querySelectorAll("main section[id]").forEach((s) => {
    if (s.getBoundingClientRect().top < 150) best = s.id;
  });
  nav
    .querySelectorAll('a[href^="#"]')
    .forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + best),
    );
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
menu.addEventListener("click", () => {
  let open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
  }),
);
document.querySelectorAll(".stage").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".stage.active")?.classList.remove("active");
    btn.classList.add("active");
    document.querySelectorAll(".stage").forEach((b) => {
      b.setAttribute("aria-selected", String(b === btn));
      b.tabIndex = b === btn ? 0 : -1;
    });
    let s = stages[Number(btn.dataset.stage)],
      panel = document.querySelector(".stage-panel");
    panel.setAttribute("aria-labelledby", btn.id);
    panel.style.animation = "none";
    void panel.offsetWidth;
    panel.style.animation = "";
    panel.querySelector(".panel-index span").textContent = String(
      Number(btn.dataset.stage) + 1,
    ).padStart(2, "0");
    panel.querySelector(".panel-icon").textContent = s.icon;
    panel.querySelector("h3").textContent = s.title;
    panel.querySelector("p").textContent = s.body;
    panel.querySelector(".panel-chips").innerHTML = s.chips
      .map((c) => `<span>${c}</span>`)
      .join("");
    panel.querySelector(".panel-bottom span").textContent = s.foot;
  }),
);
document.querySelectorAll(".stage").forEach((tab, index, all) =>
  tab.addEventListener("keydown", (event) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % all.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + all.length) % all.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = all.length - 1;
    else return;
    event.preventDefault();
    all[next].focus();
    all[next].click();
  }),
);
document.querySelectorAll(".skill-tab").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".skill-tab.active")?.classList.remove("active");
    btn.classList.add("active");
    document
      .querySelectorAll(".skill-tab")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    document
      .querySelectorAll(".skill-chip")
      .forEach((chip) =>
        chip.classList.toggle(
          "hidden",
          btn.dataset.skill !== "all" &&
            chip.dataset.category !== btn.dataset.skill,
        ),
      );
  }),
);
document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    btn.classList.add("active");
    document
      .querySelectorAll(".filter")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    document.querySelectorAll(".project-card").forEach((card) => {
      let show =
        btn.dataset.filter === "all" ||
        card.dataset.category === btn.dataset.filter;
      card.classList.toggle("filtered-out", !show);
      if (show) {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
      }
    });
  }),
);
const modal = document.querySelector(".modal"),
  modalEyebrow = document.querySelector("#modal-eyebrow"),
  modalTitle = document.querySelector("#modal-title"),
  modalOverview = document.querySelector("#modal-overview"),
  modalQuestion = document.querySelector("#modal-question"),
  modalAreas = document.querySelector("#modal-areas"),
  modalApproach = document.querySelector("#modal-approach"),
  modalOutput = document.querySelector("#modal-output"),
  modalDeliverables = document.querySelector("#modal-deliverables"),
  modalTools = document.querySelector("#modal-tools"),
  modalChecklist = document.querySelector("#modal-checklist"),
  modalResources = document.querySelector("#modal-resources"),
  modalStatus = document.querySelector("#modal-status-value"),
  modalPreviewWrap = document.querySelector("#modal-preview-wrap"),
  modalPreviewImage = document.querySelector("#modal-preview-image");
let modalTrigger = null;
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalTrigger?.focus();
  modalTrigger = null;
};
document.querySelectorAll(".project-card").forEach((card) =>
  card.addEventListener("click", () => {
    modalTrigger = card;
    modalEyebrow.textContent = card.dataset.eyebrow;
    modalTitle.textContent = card.dataset.title;
    modalOverview.textContent = card.dataset.overview;
    modalQuestion.textContent = card.dataset.question;
    modalAreas.replaceChildren(
      ...card.dataset.areas.split("|").map((area) => {
        const item = document.createElement("li");
        item.textContent = area;
        return item;
      }),
    );
    modalApproach.textContent = card.dataset.approach;
    modalOutput.textContent = card.dataset.output;
    const populateList = (target, value) => {
      target.replaceChildren(
        ...(value || "").split("|").filter(Boolean).map((entry) => {
          const item = document.createElement("li");
          item.textContent = entry;
          return item;
        }),
      );
    };
    populateList(modalDeliverables, card.dataset.deliverables);
    modalTools.textContent = card.dataset.tools || "Choose tools based on demonstrated proficiency.";
    populateList(modalChecklist, card.dataset.checklist);
    modalStatus.textContent = card.dataset.status || "IN DEVELOPMENT";
    if (card.dataset.preview) {
      modalPreviewImage.src = card.dataset.preview;
      modalPreviewImage.alt = card.dataset.previewAlt || `Preview of ${card.dataset.title}`;
      modalPreviewWrap.hidden = false;
    } else {
      modalPreviewImage.removeAttribute("src");
      modalPreviewImage.alt = "";
      modalPreviewWrap.hidden = true;
    }
    modalResources.replaceChildren(
      ...(card.dataset.resources || "").split("|").filter(Boolean).map((entry) => {
        const [label, path] = entry.split("::");
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = label || "Open project file";
        link.href = path || "#";
        if (/^(view|preview|open)\b/i.test(label || "")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute("aria-label", `${label} (opens in a new tab)`);
        } else {
          link.setAttribute("download", "");
        }
        item.appendChild(link);
        return item;
      }),
    );
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.querySelector(".modal-close").focus();
  }),
);
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-done").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});
const reveal = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        reveal.unobserve(e.target);
      }
    }),
  { threshold: 0.14 },
);
document.querySelectorAll(".timeline-item").forEach((el) => reveal.observe(el));
document.querySelector("#year").textContent = new Date().getFullYear();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
    menu.focus();
  }
  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = [
      ...modal.querySelectorAll("button:not([disabled]), a[href]"),
    ];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelectorAll(".skill-tab").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.classList.contains("active")),
  );
});
document.querySelectorAll(".filter").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.classList.contains("active")),
  );
});
document
  .querySelectorAll(".education-list article")
  .forEach((item) => reveal.observe(item));
