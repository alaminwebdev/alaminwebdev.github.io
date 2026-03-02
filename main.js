const DATA = {
    NAME: "Md. Al Amin",
    ROLE: "Software Engineer",
    AVATAR: "images/alamin.webp",
    AVATAR_INITIALS: "AA",
    TOTAL_PROJECTS: 16,

    STACK: [
        { icon: "🔴", name: "Laravel", type: "Backend", color: "#FF2D20" },
        { icon: "⚡", name: "JavaScript", type: "Scripting", color: "#f7df1e" },
        { icon: "🐘", name: "PHP", type: "Backend", color: "#8892BF" },
        { icon: "🐍", name: "Python", type: "Backend", color: "#3776ab" },
        { icon: "🗃️", name: "MySQL", type: "Database", color: "#00758f" },
        { icon: "💨", name: "Tailwind CSS", type: "Styling", color: "#38bdf8" },
        { icon: "🅱️", name: "Bootstrap", type: "Styling", color: "#7952b3" },
        { icon: "💚", name: "Vue.js", type: "Frontend", color: "#42b883" },
        { icon: "🏔️", name: "Alpine.js", type: "Frontend", color: "#77c1d2" },
        { icon: "⚙️", name: "Git", type: "DevOps", color: "#f05032" },
    ],

    SKILLS: [
        { icon: "🌐", name: "HTML5" }, { icon: "🎨", name: "CSS3" },
        { icon: "⚡", name: "JavaScript" }, { icon: "💎", name: "jQuery" },
        { icon: "🐘", name: "PHP" }, { icon: "🐍", name: "Python" }, { icon: "🔴", name: "Laravel" },
        { icon: "💚", name: "Vue.js" }, { icon: "⚛️", name: "React.js" },
        { icon: "🗃️", name: "MySQL" }, { icon: "💨", name: "Tailwind" },
        { icon: "🔗", name: "Inertia.js" }, { icon: "⚡", name: "Vite" },
        { icon: "🐙", name: "GitHub" }, { icon: "🦊", name: "GitLab" },
        { icon: "⚙️", name: "Git" }, { icon: "🪣", name: "Bitbucket" },
        { icon: "📬", name: "Postman" }, { icon: "📦", name: "JSON" },
        { icon: "🖥️", name: "VSCode" }, { icon: "🔄", name: "AJAX" },
    ],

    SERVICES: [
        { num: "01", icon: "🏭", name: "ERP Development", desc: "Customized ERP systems to streamline processes and deliver real-time operational insights." },
        { num: "02", icon: "💻", name: "Web Development", desc: "Responsive, high-performance apps with Laravel, Vue.js, Inertia.js, and Vite." },
        { num: "03", icon: "🎨", name: "Web Design", desc: "User-focused interfaces built with Tailwind CSS, aligned with business goals and UX best practices." },
        { num: "04", icon: "🚀", name: "Tech Growth", desc: "Constantly learning — AJAX, REST APIs, performance tuning — staying at the frontier of the web." },
    ],

    PROJECTS: [
        {
            icon: "📡",
            name: "Attendance Device Management System",
            category: "Infrastructure",
            status: "Live",
            year: "2025",
            featured: true,
            desc: "A middleware server built from scratch that bridges ZK biometric attendance devices with ERP systems. Acts as an iClock server — devices push data directly to it, with multi-company routing, async queue processing, automatic retry on failure, and a real-time dashboard.",
            tech: ["Laravel 12", "MySQL", "Tailwind CSS v4", "Supervisor", "Blade", "ZKTeco iClock/ADMS"],
            demo: "",
            repo: "",
        },
        {
            icon: "🏭",
            name: "ERP Application",
            category: "Enterprise Software",
            status: "Live",
            year: "2024",
            featured: true,
            desc: "A comprehensive business management solution integrating finance, HR, and operations. Features automated accounting reports, ledger management, customized HR modules, and real-time dashboards.",
            tech: ["Laravel", "Vue.js", "MySQL", "Inertia.js", "Tailwind CSS"],
            demo: "",
            repo: "",
        },
        {
            icon: "⚖️",
            name: "BRAC SELP",
            category: "Social Platform",
            status: "Completed",
            year: "2023",
            featured: true,
            desc: "A Legal Aid platform focused on court cases, Alternative Dispute Resolution, and legal assistance with a specific emphasis on preventing child marriages. Includes 'Swapnosarothi' girl's agency management, brigade organization, and data-driven protection reports.",
            tech: ["Laravel", "Vue.js", "MySQL", "AJAX", "Bootstrap"],
            demo: "",
            repo: "",
        },
        {
            icon: "🏫",
            name: "BUP Educational Website",
            category: "Web Platform",
            status: "Completed",
            year: "2023",
            featured: false,
            desc: "Contributed to the development of Bangladesh University of Professionals' educational website. Built key pages for clubs, gallery, news, events, and notices. Implemented a user-friendly CMS for streamlined content management.",
            tech: ["Laravel", "JavaScript", "MySQL", "Bootstrap"],
            demo: "",
            repo: "",
        },
        {
            icon: "🌍",
            name: "UNHCR IWMS",
            category: "Enterprise Software",
            status: "Completed",
            year: "2023",
            featured: false,
            desc: "Contributed to UNHCR's Inventory and Warehouse Management System. Developed warehouse-wise and distribution point-wise goods reports, beneficiary reports, and current stock reports tailored to UNHCR's unique operational requirements.",
            tech: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
            demo: "",
            repo: "",
        },
        {
            icon: "📦",
            name: "Special Branch Inventory System",
            category: "Business Tool",
            status: "Completed",
            year: "2023",
            featured: false,
            desc: "Inventory management system for Bangladesh Special Branch optimizing stock product management, requisition creation, and product distribution. Features role-based access control, role-wise dashboards with AmChart visualizations, and detailed reporting.",
            tech: ["Laravel", "jQuery", "MySQL", "AmChart", "Bootstrap"],
            demo: "",
            repo: "",
        },
        {
            icon: "🚚",
            name: "Fastway — Web Based Courier Service",
            category: "Web Platform",
            status: "Completed",
            year: "2021",
            featured: false,
            desc: "A comprehensive web-based courier service solution for individuals and businesses seeking efficient logistics management. Built using raw PHP with OOP principles.",
            tech: ["PHP", "JavaScript", "AJAX", "jQuery", "HTML", "CSS"],
            demo: "",
            repo: "",
        },
    ],

    SOCIAL: {
        github: "https://github.com/alaminwebdev",
        linkedin: "https://www.linkedin.com/in/mdalamin1998/",
        facebook: "https://www.facebook.com/mohammadalamin.dev",
    },

    CONTACT: {
        email: "mohammadalamin.dev@gmail.com",
        phone: "+8801718695350",
        location: "Dhaka, Bangladesh",
        dob: "1998/10/25",
    },

    BIO: {
        short_bio: "Dedicated software engineer based in Dhaka, creating dynamic and user-friendly applications that drive innovation.",
        long_bio: "I'm Md. Al Amin, a software engineer at Ambala IT. I specialize in Laravel, JavaScript, and MySQL, delivering efficient and user-focused web applications.",
    },

    EDUCATION: [
        {
            degree: "Bachelor of Science in Computer Science and Engineering",
            passing_year: 2022,
            session: "2017–2021",
            institute: "Daffodil Institute of IT (DIIT)",
            type: "Education",
            description: "BSc (Professional) affiliated with National University — focused on software engineering, databases, and web technologies.",
        },
        {
            degree: "Professional Web Design & Development",
            passing_year: 2022,
            session: "2021–2022",
            institute: "Creative IT Institute, Dhaka",
            type: "Training",
            description: "Comprehensive training in modern web design and development with hands-on projects.",
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            passing_year: 2016,
            session: "2015–2016",
            institute: "Patuakhali Government College",
            type: "Education",
            description: "Science group — Barisal Division.",
        },
    ],

    EXPERIENCE: [
        {
            designation: "Software Engineer",
            start_date: "2024-07-01",
            end_date: null,
            company: "Ambala IT",
            responsibilities: [
                "Enhanced Accounting software — report generation, ledger management, financial workflows.",
                "Automated income statements, balance sheets, and expense summaries.",
                "Customized HR & Accounting modules for specific organizational requirements.",
                "Optimized ERP workflows, improving overall system efficiency.",
            ],
        },
        {
            designation: "Full-Stack Web Developer",
            start_date: "2023-03-01",
            end_date: "2024-06-30",
            company: "Nano Information Technology (Nanosoft)",
            responsibilities: [
                "Crafted web applications with Laravel for seamless user experiences.",
                "Collaborated with teams using JavaScript, React.js, and AJAX.",
                "Managed database design and performance using MySQL.",
                "Version control with Git for efficient team collaboration.",
            ],
        },
        {
            designation: "Executive — Support Engineer",
            start_date: "2022-07-01",
            end_date: "2023-02-28",
            company: "One Sky Communications Limited",
            responsibilities: [
                "Technical support for ISP infrastructure, routers, and switches.",
                "On-call rotation for nights and weekends.",
                "Coordinated with network operations for smooth service delivery.",
            ],
        },
    ],
};


/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */

/** Shorthand: get element by id */
function $id(id) {
    return document.getElementById(id);
}

/**
 * Create a DOM element.
 * @param {string} tag  - HTML tag name
 * @param {string} [cls] - className
 * @returns {HTMLElement}
 */
function createElement(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
}

/** Format ISO date string → "Jul 2024" or "Present" */
function fmtDate(str) {
    if (!str) return "Present";
    return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/** Format DOB string → "October 25, 1998" */
function fmtDOB(str) {
    if (!str) return "";
    return new Date(str).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

/** Format phone → +880 171 869 5350 */
function fmtPhone(p) {
    return p.replace(/(\+\d{3})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

/** Calculate years of experience from earliest start_date */
function calcExpYears() {
    const earliest = DATA.EXPERIENCE.reduce((min, e) => {
        const d = new Date(e.start_date);
        return d < min ? d : min;
    }, new Date());
    return Math.round((Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365));
}


/* ══════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════ */
function showSection(id, btn) {
    // Hide all sections
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    // Deactivate all nav buttons
    document.querySelectorAll(".nb").forEach(b => b.classList.remove("active"));
    // Show target section with re-triggered animation
    const sec = $id(id);
    sec.classList.add("active");
    sec.style.animation = "none";
    sec.offsetHeight; // reflow
    sec.style.animation = "";
    // Activate clicked button
    btn.classList.add("active");
}


/* ══════════════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════════════ */
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    const thumb = $id("ttThumb");
    const lbl = $id("ttLbl");
    if (thumb) thumb.textContent = isDark ? "🌙" : "☀️";
    if (lbl) lbl.textContent = isDark ? "Light" : "Dark";
}


/* ══════════════════════════════════════════════════
   CONTACT FORM — send feedback
══════════════════════════════════════════════════ */
function handleSend(btn) {
    btn.textContent = "Sending…";
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = "✓ Message Sent!";
        btn.style.borderColor = "var(--green)";
        btn.style.color = "var(--green)";
        setTimeout(() => {
            btn.textContent = "Send Message →";
            btn.style.borderColor = "";
            btn.style.color = "";
            btn.disabled = false;
        }, 3000);
    }, 1200);
}


/* ══════════════════════════════════════════════════
   SET PAGE TITLE
══════════════════════════════════════════════════ */
function setTitle() {
    document.title = `${DATA.NAME} — ${DATA.ROLE}`;
}


/* ══════════════════════════════════════════════════
   BUILD SIDEBAR
   ⚠ FIX: use only DOM methods — never innerHTML +=
      (innerHTML += destroys existing event listeners)
══════════════════════════════════════════════════ */
function buildSidebar() {
    const sb = $id("sidebar");

    /* ── Avatar ── */
    const avWrap = createElement("div", "av-wrap");
    avWrap.innerHTML = `
    <div class="av-ring"></div>
    <div class="av-mask"></div>
    <div class="av" id="avEl">
      <img src="${DATA.AVATAR}" alt="${DATA.NAME}"
           onerror="this.remove(); document.getElementById('avEl').textContent='${DATA.AVATAR_INITIALS}'">
    </div>
    <div class="av-status"><div class="av-dot"></div></div>
  `;
    sb.appendChild(avWrap);

    /* ── Name / Role / Bio ── */
    const name = createElement("div", "sb-name"); name.textContent = DATA.NAME;
    const role = createElement("div", "sb-role"); role.textContent = DATA.ROLE;
    const bio = createElement("div", "sb-bio"); bio.textContent = DATA.BIO.short_bio;
    sb.appendChild(name);
    sb.appendChild(role);
    sb.appendChild(bio);

    /* ── Mobile top bar ── */
    const mobName = $id("mobTopName");
    if (mobName) mobName.textContent = DATA.NAME;

    const mobAv = $id("mobAv");
    if (mobAv) {
        const img = document.createElement("img");
        img.src = DATA.AVATAR;
        img.alt = DATA.NAME;
        img.onerror = function () {
            this.remove();
            mobAv.textContent = DATA.AVATAR_INITIALS;
        };
        mobAv.appendChild(img);
    }

    /* ── Contact chips ── */
    const chips = createElement("div", "chips");
    const C = DATA.CONTACT;

    // Email chip (link)
    const emailChip = createElement("a", "chip link");
    emailChip.href = `mailto:${C.email}`;
    emailChip.innerHTML = `<div class="chip-ico">✉️</div><div><div class="chip-l">Email</div><div class="chip-v">${C.email}</div></div>`;
    chips.appendChild(emailChip);

    // Phone chip (link)
    const phoneChip = createElement("a", "chip link");
    phoneChip.href = `tel:${C.phone}`;
    phoneChip.innerHTML = `<div class="chip-ico">📞</div><div><div class="chip-l">Phone</div><div class="chip-v">${fmtPhone(C.phone)}</div></div>`;
    chips.appendChild(phoneChip);

    // Birthday chip
    const dobChip = createElement("div", "chip");
    dobChip.innerHTML = `<div class="chip-ico">🎂</div><div><div class="chip-l">Birthday</div><div class="chip-v">${fmtDOB(C.dob)}</div></div>`;
    chips.appendChild(dobChip);

    // Location chip
    const locChip = createElement("div", "chip");
    locChip.innerHTML = `<div class="chip-ico">📍</div><div><div class="chip-l">Location</div><div class="chip-v">${C.location}</div></div>`;
    chips.appendChild(locChip);

    // CV chip (download)
    const cvChip = createElement("a", "chip link cv-chip");
    cvChip.href = "resume_of_md_al_amin.pdf";
    cvChip.target = "_blank";
    cvChip.download = "";
    cvChip.innerHTML = `
        <div class="chip-ico">📄</div>
        <div>
            <div class="chip-l">Resume</div>
            <div class="chip-v">Download CV</div>
        </div>
        <span class="cv-chip-arrow">↓</span>
    `;
    chips.appendChild(cvChip);

    sb.appendChild(chips);

    /* ── Social buttons ── */
    const socials = createElement("div", "socials");
    const socMeta = {
        github: { icon: "🐙", label: "GitHub" },
        linkedin: { icon: "💼", label: "LinkedIn" },
        facebook: { icon: "📘", label: "Facebook" }
    };

    Object.entries(DATA.SOCIAL).forEach(([key, url]) => {
        if (!url) return;
        const a = createElement("a", "soc");
        a.href = url;
        a.target = "_blank";
        a.title = socMeta[key]?.label || key;
        a.textContent = socMeta[key]?.icon || "🔗";
        socials.appendChild(a);
    });
    sb.appendChild(socials);

    /* ── Nav ──
       ✅ Buttons created with createElement + addEventListener
          so event listeners survive DOM mutations             */
    const nav = createElement("nav", "nav");
    const navItems = [
        { id: "about", icon: "◉", label: "About" },
        { id: "resume", icon: "📄", label: "Resume" },
        { id: "snapshot", icon: "🗂️", label: "My Work" },
        { id: "contact", icon: "✉", label: "Contact" },
    ];

    navItems.forEach(item => {
        const btn = createElement("button", "nb" + (item.id === "about" ? " active" : ""));
        const ico = createElement("span", "ni");
        ico.textContent = item.icon;
        btn.appendChild(ico);
        btn.appendChild(document.createTextNode(item.label));

        // ✅ addEventListener — not onclick attribute, not innerHTML +=
        btn.addEventListener("click", () => showSection(item.id, btn));
        nav.appendChild(btn);
    });
    sb.appendChild(nav);

    /* ── Theme toggle ──
       ✅ Built with createElement — appended AFTER nav,
          so nav's event listeners are never touched         */
    const ttWrap = createElement("div", "tt-wrap");
    const ttTrack = createElement("div", "tt-track");
    const ttThumb = createElement("div", "tt-thumb"); ttThumb.id = "ttThumb"; ttThumb.textContent = "☀️";
    const ttLbl = createElement("span", "tt-lbl"); ttLbl.id = "ttLbl"; ttLbl.textContent = "Dark";

    ttTrack.addEventListener("click", toggleTheme);
    ttTrack.appendChild(ttThumb);
    ttWrap.appendChild(ttTrack);
    ttWrap.appendChild(ttLbl);
    sb.appendChild(ttWrap);


    /* ── Mobile bottom nav ── */
    const mob = $id("mobNav");
    if (mob) {
        navItems.forEach(item => {
            const btn = createElement("button", "mob-nb" + (item.id === "about" ? " active" : ""));
            btn.innerHTML = `<span class="mob-ni">${item.icon}</span><span class="mob-nl">${item.label}</span>`;
            btn.addEventListener("click", () => {
                showSection(item.id, btn);
                // sync desktop nav active state too
                document.querySelectorAll(".nb").forEach((b, i) => {
                    b.classList.toggle("active", navItems[i].id === item.id);
                });
                // sync mobile nav
                document.querySelectorAll(".mob-nb").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
            mob.appendChild(btn);
        });

        // Theme toggle
        const themeBtn = createElement("button", "mob-nb");
        themeBtn.id = "mobThemeBtn";
        themeBtn.innerHTML = `<span class="mob-ni" id="mobThemeIco">☀️</span><span class="mob-nl">Theme</span>`;
        themeBtn.addEventListener("click", () => {
            toggleTheme();
            // sync icon
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            $id("mobThemeIco").textContent = isDark ? "☀️" : "🌙";
        });
        mob.appendChild(themeBtn);
    }
}


/* ══════════════════════════════════════════════════
   BUILD ABOUT
══════════════════════════════════════════════════ */
function buildAbout() {
    const sec = $id("about");
    const expYears = calcExpYears();
    const currentJob = DATA.EXPERIENCE.find(e => !e.end_date);
    const techTags = [...new Set([...DATA.STACK.map(s => s.name), "ERP Systems", "REST APIs", "AJAX"])];
    const locParts = DATA.CONTACT.location.split(",");

    sec.innerHTML = `
    <div class="sh">
      <div class="sh-eye">// Hello World</div>
      <h1 class="sh-title">About <em>Me</em></h1>
      <div class="sh-line"></div>
    </div>

    <div class="bento">

      <!-- Hero -->
      <div class="bc c7">
        <div class="hero-eye">// ${DATA.ROLE} · ${DATA.STACK.slice(0, 3).map(s => s.name).join(" · ")}</div>
        <div class="hero-h">Building <em>digital experiences</em><br>that actually matter.</div>
        <p class="hero-p">${DATA.BIO.long_bio}</p>
        <div class="tags">
          ${techTags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>

      <!-- Status -->
      <div class="bc c5">
        <div class="stat-inner">
          <div>
            <div class="avail"><div class="av2-dot"></div>Open to Work</div>
            <h3>Currently at<br>${currentJob ? currentJob.company : "—"}</h3>
            <p>${DATA.BIO.short_bio}</p>
          </div>
          <div class="loc-row">
            <span>📍</span>
            <span class="lm">${locParts[0]?.trim()},&nbsp;</span>
            <strong>${locParts[1]?.trim() || ""}</strong>
          </div>
        </div>
      </div>

      <!-- Stat: Experience -->
      <div class="bc c4">
        <div class="n-stat">
          <div class="n-num">${expYears}+</div>
          <div class="n-lbl">Years Experience</div>
          <div class="n-sub">Across ${DATA.EXPERIENCE.length} companies</div>
        </div>
      </div>

      <!-- Stat: Projects -->
      <div class="bc c4">
        <div class="n-stat">
          <div class="n-num">${DATA.TOTAL_PROJECTS}+</div>
          <div class="n-lbl">Projects Delivered</div>
          <div class="n-sub">Across multiple industries</div>
        </div>
      </div>

      <!-- Stat: Skills -->
      <div class="bc c4">
        <div class="n-stat">
          <div class="n-num">${DATA.SKILLS.length}+</div>
          <div class="n-lbl">Technologies</div>
          <div class="n-sub">Full-stack & DevOps tools</div>
        </div>
      </div>

      <!-- Primary Stack -->
      <div class="bc c5">
        <div class="stk-header">
          <div class="stk-title">// Primary Stack</div>
          <div class="stk-count">${DATA.STACK.length} tools</div>
        </div>
        <div class="stk-grid">
          ${DATA.STACK.map(s => `
            <div class="stk-card" style="--clr:${s.color}">
              <div class="stk-card-glow"></div>
              <div class="stk-card-inner">
                <span class="stk-card-ico">${s.icon}</span>
                <div>
                  <div class="stk-card-name">${s.name}</div>
                  <div class="stk-card-type">${s.type}</div>
                </div>
              </div>
              <div class="stk-card-bar"></div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Featured Projects (About preview) -->
      <div class="bc c7">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <div class="stk-title" style="margin-bottom:0">// Featured Projects</div>
          <button class="view-all-btn" onclick="document.querySelectorAll('.nb')[2].click()">View All →</button>
        </div>
        <div class="proj-list">
          ${DATA.PROJECTS.filter(p => p.featured).map(p => `
            <div class="proj-item">
              <div class="proj-name">${p.icon} ${p.name} <span style="font-size:10px;color:var(--muted);font-weight:400;margin-left:6px">${p.year}</span></div>
              <div class="proj-desc">${p.desc.split('.')[0]}.</div>
              <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px">
                ${p.tech.slice(0, 4).map(t => `<span class="ptag">${t}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Services -->
      <div class="bc c12" style="padding:24px">
        <div class="stk-title" style="margin-bottom:16px">// What I Do</div>
        <div class="svcs">
          ${DATA.SERVICES.map(s => `
            <div class="svc">
              <div class="svc-num">${s.num} —</div>
              <div class="svc-ic">${s.icon}</div>
              <div class="svc-nm">${s.name}</div>
              <div class="svc-ds">${s.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

    </div>
  `;
}


/* ══════════════════════════════════════════════════
   BUILD RESUME
══════════════════════════════════════════════════ */
function buildResume() {
    const sec = $id("resume");

    const expHTML = DATA.EXPERIENCE.map(e => `
    <div class="tli">
      <div class="tl-per">${fmtDate(e.start_date)} — ${fmtDate(e.end_date)}</div>
      <div class="tl-tit">${e.designation}</div>
      <div class="tl-org">${e.company}</div>
      <ul class="tl-ul">
        ${e.responsibilities.map(r => `<li>${r}</li>`).join("")}
      </ul>
    </div>
  `).join("");

    const eduHTML = DATA.EDUCATION.map(e => `
    <div class="tli">
      <div class="tl-per">${e.session} · Passed ${e.passing_year}</div>
      <div class="tl-tit">${e.degree}</div>
      <div class="tl-org">${e.institute}</div>
      <span class="tl-badge ${e.type === "Training" ? "training" : ""}">${e.type}</span>
      <ul class="tl-ul"><li>${e.description}</li></ul>
    </div>
  `).join("");

    const skillsHTML = DATA.SKILLS.map(s => `
    <div class="sp">
      <span class="sp-ic">${s.icon}</span>
      <span class="sp-nm">${s.name}</span>
    </div>
  `).join("");

    sec.innerHTML = `
    <div class="sh">
      <div class="sh-eye">// Career</div>
      <h1 class="sh-title">My <em>Resume</em></h1>
      <div class="sh-line"></div>
    </div>

    <div class="rg">
      <div>
        <div class="rc-title">Experience</div>
        <div class="tl">${expHTML}</div>
      </div>
      <div>
        <div class="rc-title">Education &amp; Training</div>
        <div class="tl">${eduHTML}</div>
      </div>
    </div>

    <div class="sk-wrap">
      <div class="rc-title" style="margin-top:0">Tech Stack</div>
      <div class="sk-grid">${skillsHTML}</div>
    </div>
  `;
}


/* ══════════════════════════════════════════════════
   BUILD PROJECTS
══════════════════════════════════════════════════ */
function buildSnapshot() {
    const sec = $id("snapshot");

    // Status badge color map
    const statusStyle = {
        "Live": { bg: "rgba(74,222,128,.1)", border: "rgba(74,222,128,.28)", color: "#4ade80" },
        "Completed": { bg: "rgba(201,168,76,.1)", border: "rgba(201,168,76,.28)", color: "var(--gold)" },
        "In Progress": { bg: "rgba(124,110,247,.1)", border: "rgba(124,110,247,.28)", color: "var(--accent)" },
    };

    const cardsHTML = DATA.PROJECTS.map((p, i) => {
        const s = statusStyle[p.status] || statusStyle["Completed"];
        const techTags = p.tech.map(t => `<span class="ptag">${t}</span>`).join("");
        const demoBtn = p.demo ? `<a class="plink plink-demo" href="${p.demo}" target="_blank">↗ Live Demo</a>` : "";
        const repoBtn = p.repo ? `<a class="plink plink-repo" href="${p.repo}" target="_blank">🐙 Source</a>` : "";

        return `
      <div class="pcard" style="--i:${i}">
        <div class="pcard-top">
          <div class="pcard-left">
            <div class="pcard-ico">${p.icon}</div>
            <div>
              <div class="pcard-category">${p.category}</div>
              <div class="pcard-name">${p.name}</div>
            </div>
          </div>
          <div class="pcard-right">
            <span class="pstatus" style="background:${s.bg};border-color:${s.border};color:${s.color}">
              <span class="pstatus-dot" style="background:${s.color}"></span>${p.status}
            </span>
            <span class="pyear">${p.year}</span>
          </div>
        </div>

        <p class="pcard-desc">${p.desc}</p>

        <div class="pcard-tech">${techTags}</div>

        ${(demoBtn || repoBtn) ? `<div class="pcard-links">${demoBtn}${repoBtn}</div>` : ""}
      </div>
    `;
    }).join("");

    sec.innerHTML = `
    <div class="sh">
      <div class="sh-eye">// Career & Personal Work</div>
      <h1 class="sh-title">My <em>Work</em></h1>
      <div class="sh-line"></div>
    </div>

    <div class="proj-filter" id="projFilter">
      <button class="pf-btn active" data-filter="all">All</button>
      ${[...new Set(DATA.PROJECTS.map(p => p.category))].map(c =>
        `<button class="pf-btn" data-filter="${c}">${c}</button>`
    ).join("")}
    </div>

    <div class="pgrid" id="pgrid">${cardsHTML}</div>
  `;

    // Filter logic
    $id("projFilter").addEventListener("click", e => {
        const btn = e.target.closest(".pf-btn");
        if (!btn) return;
        document.querySelectorAll(".pf-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        document.querySelectorAll(".pcard").forEach(card => {
            const match = filter === "all" || card.querySelector(".pcard-category")?.textContent === filter;
            card.style.display = match ? "" : "none";
        });
    });
}


/* ══════════════════════════════════════════════════
   BUILD CONTACT
══════════════════════════════════════════════════ */
function buildContact() {
    const sec = $id("contact");
    const C = DATA.CONTACT;
    const S = DATA.SOCIAL;

    const infoItems = [
        { label: "✉ Email", value: C.email },
        { label: "📞 Phone", value: fmtPhone(C.phone) },
        { label: "📍 Location", value: C.location + " · Remote OK" },
        { label: "🐙 GitHub", value: S.github?.replace("https://", "") },
        { label: "💼 LinkedIn", value: S.linkedin?.replace("https://", "") },
        { label: "📘 Facebook", value: S.facebook?.replace("https://", "") },
    ].filter(i => i.value);

    const infoHTML = infoItems.map(i => `
    <div class="cic">
      <div class="cic-l">${i.label}</div>
      <div class="cic-v">${i.value}</div>
    </div>
  `).join("") + `
    <div class="cic ok">
      <div class="cic-l">● Availability</div>
      <div class="cic-v">Open to new opportunities</div>
    </div>
  `;

    sec.innerHTML = `
    <div class="sh">
      <div class="sh-eye">// Get In Touch</div>
      <h1 class="sh-title">Contact <em>Me</em></h1>
      <div class="sh-line"></div>
    </div>

    <div class="cl">
      <div class="ci-list">${infoHTML}</div>

      <div class="fc">
        <div class="fr">
          <div class="fg" style="margin-bottom:0">
            <label class="fl">Your Name</label>
            <input class="fi" type="text" placeholder="John Doe">
          </div>
          <div class="fg" style="margin-bottom:0">
            <label class="fl">Email Address</label>
            <input class="fi" type="email" placeholder="john@example.com">
          </div>
        </div>
        <div class="fg">
          <label class="fl">Subject</label>
          <input class="fi" type="text" placeholder="Project inquiry...">
        </div>
        <div class="fg">
          <label class="fl">Message</label>
          <textarea class="fta" placeholder="Tell me about your project or idea..."></textarea>
        </div>
        <button class="btn-s" id="sendBtn">Send Message →</button>
      </div>
    </div>
  `;

    // Attach send button listener after innerHTML is set
    $id("sendBtn").addEventListener("click", function () { handleSend(this); });
}