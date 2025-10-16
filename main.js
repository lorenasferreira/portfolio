const projects = [
  {
    name: "Isekai World",
    description: "Anime-inspired travel concept. Clean UI with semantic HTML and responsive CSS (Grid/Flex).",
    tech: "HTML & CSS",
    image: "assets/img/isekai.png",
    links: {
      figma: "https://www.figma.com/proto/X8zQQnx2hN8H3CqQl9fj5o/Isekai-World--Copy-?node-id=0-1&t=r2Yo9EjRMHsakEQO-1",
      github: "https://github.com/lorenasferreira/isekai"
    }
  },
  {
    name: "Google Store",
    description: "Concept redesign of the Google Store with a calm, minimalist product grid. Focus on clean hierarchy, accessible cards, and responsive layout.",
    tech: "HTML & CSS",
    image: "assets/img/google-store-project.png",
    links: {
      figma: "https://www.figma.com/proto/wkIDZeIAT67cgjmSfL9CC1/Google-Store-%E2%80%93-Inspire-3?node-id=2-3&t=r2Yo9EjRMHsakEQO-1",
      github: "https://github.com/lorenasferreira/Google-store-1"
    }
  },
  {
    name: "Next Project",
    description: "Space reserved for next project.",
    tech: "-",
    image: "",
    links: {}
  }
];

function renderProjects() {
  const root = document.getElementById("projectsRoot");
  if (!root) return;

  root.innerHTML = projects.map(p => `
    <article class="projects-card ${p.image ? "" : "projects-card--placeholder"}">
      <div class="projects-media ${p.image ? "" : "projects-media--placeholder"}">
        ${p.image
      ? `<img src="${p.image}" alt="${p.name} preview">`
      : `<span>Preview coming soon</span>`}
      </div>

      <div class="projects-content">
        <h3 class="projects-card__title">${p.name}</h3>
        <p class="projects-card__desc">${p.description}</p>

        <div class="projects-actions">
          ${p.links?.figma
      ? `<a class="chip" href="${p.links.figma}" target="_blank" rel="noreferrer">Figma</a>`
      : `<button class="chip chip--disabled" aria-disabled="true">Figma</button>`}
          ${p.links?.github
      ? `<a class="chip" href="${p.links.github}" target="_blank" rel="noreferrer">GitHub</a>`
      : `<button class="chip chip--disabled" aria-disabled="true">GitHub</button>`}
        </div>

        <small class="projects-tech">Main tech: ${p.tech}</small>
      </div>
    </article>
  `).join("");
}

renderProjects();

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  if (!hamburger || !nav) return; //

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
});

const skills = [
  {
    title: "Coding & Logic",
    items: ["HTML", "CSS", "JavaScript", "Python"],
    wide: false
  },
  {
    title: "Design & UI",
    items: ["Figma", "Visual Hierarchy", "Color Harmony", "Typography Basics"],
    wide: false
  },
  {
    title: "Tools & Workflow",
    items: ["VS Code", "Git & GitHub", "Style Libraries (Bootstrap / Tailwind)", "Notion"],
    wide: true
  }
];

function renderSkills() {
  const root = document.getElementById("skillsRoot");
  if (!root) return;

  root.innerHTML = skills.map(s => `
    <article class="skills-card ${s.wide ? "skills-card--wide" : ""}">
      <h3 class="skills-card__title">${s.title}</h3>
      <ul class="skills-list">
        ${s.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSkills);

let modoOscuro = false;


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const iconMoon = `
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3
               a7 7 0 0 0 9.79 9.79Z"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const iconSun = `
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <circle cx="12" cy="12" r="5"
              fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12
               M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round"/>
    </svg>`;

  let isDarkMode = false; 

  btn.innerHTML = iconMoon;

  btn.addEventListener("click", () => {
    isDarkMode = !isDarkMode; 
    document.body.classList.toggle("dark", isDarkMode);

    btn.innerHTML = isDarkMode ? iconSun : iconMoon;

    console.log(isDarkMode ? "Dark mode ON" : "Light mode ON");
  });
});

