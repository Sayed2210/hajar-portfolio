import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const profile = {
  name: "Hajar Hassan",
  role: "UI/UX Designer",
  location: "Al-Mansoura, Ad Daqahliyah, Egypt",
  email: "HajarrHassan41@gmail.com",
  phone: "01091136294",
  linkedin: "LinkedIn / hajarrhassan24",
  experience: "1+ year",
  education: "Faculty of Law, Mansoura University — Class of 2024",
  workplace: "Tech Lab Company",
};

const makeGallery = (folder, files, description) =>
  files.map((file) => ({
    src: `/projects/${folder}/${file}`,
    title: file
      .replace(/\.png$/i, "")
      .replace(/ - Copy(?: \(\d+\))?/gi, "")
      .replace(/-/g, " "),
    desc: description,
  }));

const projects = [
  {
    id: "your-health-full-flow",
    title: "Your Health App — Complete Flow",
    type: "Healthcare Mobile App UI/UX Design",
    summary: "A complete collection of the Your Health mobile app screens, covering onboarding, authentication, home visits, pharmacies, labs, checkout, and medicine schedules.",
    goal: "Create one connected healthcare experience that supports users from sign-up through booking, purchasing, and daily health management.",
    challenge: "The product includes many healthcare services and detailed flows that must remain clear and consistent on mobile.",
    solution: "A reusable visual system and straightforward navigation connect every service while keeping each screen focused on one task.",
    coverImage: "/projects/App-Your Health/file_00000000a81072438571b24365cf1b67.jpg",
    gallery: makeGallery("App-Your Health", [
      "splash.png", "splash-1.png", "sing up.png", "already registered.png", "log in.png",
      "log in erorr.png", "03.1 - Forgot password  - default.png", "03.1 - Forgot password  - erorr Num.png",
      "ُEnter code.png", "Set New Password.png", "home 3.png", "home visit.png", "edit.png",
      "Medical Prescription.png", "schedule.png", "schedule-1.png", "schedule-2.png", "pharmacy.png",
      "pharmacy-1.png", "pharmacy-2.png", "Search.png", "Search-1 - Copy.png", "Add.png", "Add-1.png",
      "Cart.png", "Car.png", "Warning.png", "lab test.png", "lab details.png", "lab Location.png",
      "Select day.png", "check out - Copy.png", "check out-1.png", "check out-1 - Copy.png",
    ], "A screen from the complete Your Health mobile app flow."),
    tags: ["Mobile App", "Healthcare UX", "User Flows", "Design System", "Booking"],
  },
  {
    id: "health-dashboard",
    title: "Your Health Admin Dashboard",
    type: "Healthcare Dashboard UI/UX Design",
    summary: "An administration dashboard for managing doctors, departments, pharmacies, and appointments across the Your Health platform.",
    goal: "Help healthcare administrators understand activity and manage platform records efficiently.",
    challenge: "Dense operational data needs to remain readable while supporting frequent management tasks.",
    solution: "Clear tables, focused forms, profile views, and a consistent dashboard hierarchy make everyday administration easier.",
    coverImage: "/projects/Dashbord-App Your Health/file_0000000036ec7243a12fc041f0439eb3.png",
    gallery: makeGallery("Dashbord-App Your Health", [
      "Home.png", "Appoint - tebal.png", "Department-tebal.png", "Department-tebal-1.png",
      "Docs-tebal.png", "Docs-profile.png", "Docs-profile-1.png", "Add-Doc.png", "Add-Doc-1.png",
      "pharm-taebl.png",
    ], "A management view from the Your Health admin dashboard."),
    tags: ["Dashboard", "Healthcare Admin", "Data Tables", "Doctor Management", "Web App"],
  },
  {
    id: "watch-store",
    title: "Luxury Watches E-commerce Website",
    type: "E-commerce Website UI/UX Design",
    summary: "A polished online shopping experience for discovering, comparing, and purchasing premium watches.",
    goal: "Present luxury products with a strong visual identity while making the path to purchase simple.",
    challenge: "The website must balance rich product presentation with practical e-commerce information and actions.",
    solution: "Editorial layouts, spacious product cards, and clear shopping flows create a premium but usable store experience.",
    coverImage: "/projects/Web-Eco/file_00000000d80c71f49e5cee4e07d52f94.png",
    gallery: makeGallery("Web-Eco", [
      "Watches-website.png", "Watches-website 2.png", "Watches-website 3 - Copy.png",
      "Watches-website 4.png", "Watches-website 5.png", "Watches-website 6.png",
    ], "A page from the luxury watches e-commerce website."),
    tags: ["E-commerce", "Web Design", "Luxury Brand", "Product UX", "Responsive UI"],
  },
  {
    id: "eduhub",
    title: "EduHub Learning Dashboard",
    type: "Education Dashboard UI/UX Design",
    summary: "An Arabic learning-management dashboard for managing students, course content, and educational records.",
    goal: "Give education teams a clear workspace for managing students and courses.",
    challenge: "Course and student information includes many states, forms, and records that need to work naturally in Arabic.",
    solution: "A structured RTL dashboard organizes tables, details, and course-creation flows into an approachable system.",
    coverImage: "/projects/eduhub/file_000000009a8472438c91627eb35548b1.png",
    gallery: makeGallery("eduhub", [
      "Home.png", "tabel1-1.png", "tabel1-2.png", "تفاصيل الطالب.png", "تعديل التفاصيل - Copy.png",
      "تعديل التفاصيل-1.png", "تعديل التفاصيل-2 - Copy.png", "تعديل التفاصيل-3.png",
      "اضافة كورس - Copy (2).png", "اضافة كورس-1 - Copy.png", "اضافة كورس-2.png",
      "اضافة كورس-3.png", "اضافة كورس-4.png",
    ], "A screen from the Arabic EduHub learning-management dashboard."),
    tags: ["Education", "RTL Design", "Dashboard", "Course Management", "Arabic UI"],
  },
];

const navItems = ["Work", "Process", "Skills", "About", "Contact"];

const skills = [
  {
    group: "UX Design",
    icon: "users",
    items: ["User Journey Mapping", "Empathy Mapping", "User Flows", "Sitemaps", "Wireframing", "Usability Testing"],
  },
  {
    group: "UI Design",
    icon: "layers",
    items: ["Visual Hierarchy", "Typography", "Color Theory", "Grid Systems", "Responsive Design", "Dashboard Interfaces"],
  },
  {
    group: "Tools & Systems",
    icon: "figma",
    items: ["Figma", "Google Stitch", "Design Systems", "Components", "AI-assisted Design", "Prototype Handoff"],
  },
  {
    group: "Soft Skills",
    icon: "target",
    items: ["Analytical Thinking", "Communication", "Attention to Detail", "Logical Reasoning", "Effective Communication"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "Understand users, business goals, product scope, and key workflows before starting the visual design.",
  },
  {
    step: "02",
    title: "Structure",
    text: "Create information architecture, user flows, wireframes, and layout systems that make complex products easier to use.",
  },
  {
    step: "03",
    title: "Design",
    text: "Design polished UI screens with strong hierarchy, responsive layouts, accessible spacing, and reusable components.",
  },
  {
    step: "04",
    title: "Improve",
    text: "Review usability, refine visual details, prepare handoff, and keep the design aligned with user needs and business KPIs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

function runSmokeTests() {
  const errors = [];

  if (!profile.name || !profile.email.includes("@")) {
    errors.push("Profile data is incomplete.");
  }

  if (projects.length !== 4) {
    errors.push("Portfolio should include exactly four projects.");
  }

  if (!projects.every((project) => project.title && project.summary)) {
    errors.push("Every project needs a title and summary.");
  }

  if (!projects.every((project) => Array.isArray(project.gallery))) {
    errors.push("Every project gallery should be an array.");
  }

  if (skills.length < 4) {
    errors.push("Portfolio should include at least four skill groups.");
  }

  if (errors.length > 0) {
    console.warn("Portfolio smoke tests failed:", errors);
  }
}

runSmokeTests();

function Icon({ name, size = 20, className = "" }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  if (name === "arrow") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...commonProps}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...commonProps}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg {...commonProps}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }

  if (name === "chevron-left") {
    return (
      <svg {...commonProps}>
        <path d="m15 18-6-6 6-6" />
      </svg>
    );
  }

  if (name === "chevron-right") {
    return (
      <svg {...commonProps}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }

  if (name === "maximize") {
    return (
      <svg {...commonProps}>
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg {...commonProps}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...commonProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.8" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  if (name === "figma") {
    return (
      <svg {...commonProps}>
        <path d="M12 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
        <path d="M12 4h4a4 4 0 0 1 0 8h-4V4Z" />
        <path d="M8 4h4v8H8a4 4 0 0 1 0-8Z" />
        <path d="M8 12h4v4H8a4 4 0 0 1 0-4Z" />
      </svg>
    );
  }

  return <Icon name="spark" size={size} className={className} />;
}

function FloatingBlob({ className }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/75 px-4 py-2 text-sm font-bold text-violet-700 shadow-sm backdrop-blur">
        <Icon name="spark" size={16} />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </motion.div>
  );
}

function ImageWithFallback({ src, alt, className, label, onPreview }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 p-6 text-center text-white`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-200">Project Preview</p>
          <p className="mt-3 text-xl font-black">{label || alt}</p>
          <p className="mt-2 text-sm text-slate-300">Add project image inside public/projects when exporting locally.</p>
        </div>
      </div>
    );
  }

  if (onPreview) {
    return (
      <button
        type="button"
        onClick={onPreview}
        className={`group relative block overflow-hidden text-left ${className}`}
        aria-label={`Preview ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          onError={() => setHasError(true)}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
        <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-black text-slate-950 opacity-0 shadow-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <Icon name="maximize" size={15} />
          Preview
        </span>
      </button>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
}

function ProjectButton({ project, activeProject, onSelect, onPreview, index }) {
  const isActive = activeProject.title === project.title;

  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-[2rem] border text-left transition hover:-translate-y-1 hover:shadow-xl ${
        isActive
          ? "border-violet-300 bg-slate-950 text-white shadow-2xl shadow-violet-200"
          : "border-white bg-white/80 text-slate-900 shadow-sm"
      }`}
    >
      <ImageWithFallback
        src={project.coverImage}
        alt={`${project.title} cover`}
        label={project.title}
        className="h-44 w-full object-cover"
        onPreview={onPreview}
      />
      <button type="button" onClick={() => onSelect(project)} className="block w-full p-5 text-left">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className={`text-xs font-black uppercase tracking-wider ${isActive ? "text-violet-200" : "text-violet-700"}`}>Project 0{index + 1}</p>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${isActive ? "bg-white/10 text-white" : "bg-violet-50 text-violet-700"}`}>
            {isActive ? "Selected" : "View"}
          </span>
        </div>
        <p className={`text-sm font-bold ${isActive ? "text-violet-200" : "text-violet-700"}`}>{project.type}</p>
        <h3 className="mt-2 text-xl font-black">{project.title}</h3>
        <p className={`mt-2 line-clamp-3 text-sm leading-6 ${isActive ? "text-slate-300" : "text-slate-600"}`}>{project.summary}</p>
      </button>
    </motion.div>
  );
}

function getProjectImages(project) {
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];

  return [
    ...(project.coverImage
      ? [{
          src: project.coverImage,
          title: `${project.title} cover`,
          desc: project.summary,
        }]
      : []),
    ...gallery.map((image, index) => ({
      src: typeof image === "string" ? image : image.src,
      title: typeof image === "string" ? `${project.title} screen ${index + 1}` : image.title,
      desc: typeof image === "string" ? project.summary : image.desc,
    })),
  ];
}

function PhotoLightbox({ preview, onClose, onChange }) {
  const [zoomed, setZoomed] = useState(false);
  const { images, index, projectTitle } = preview;
  const image = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) onChange((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight" && hasMultiple) onChange((index + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultiple, images.length, index, onChange, onClose]);

  useEffect(() => {
    setZoomed(false);
  }, [index]);

  const showPrevious = () => onChange((index - 1 + images.length) % images.length);
  const showNext = () => onChange((index + 1) % images.length);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} photo preview`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 text-white backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-black">{projectTitle}</p>
          <p className="mt-1 text-xs font-semibold text-slate-400">
            {index + 1} of {images.length} · Use arrow keys to browse
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-white hover:text-slate-950"
          aria-label="Close photo preview"
        >
          <Icon name="x" size={20} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4" onClick={(event) => event.stopPropagation()}>
        {hasMultiple ? (
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white hover:text-slate-950 sm:left-6"
            aria-label="Previous photo"
          >
            <Icon name="chevron-left" size={26} />
          </button>
        ) : null}

        <AnimatePresence mode="wait">
          <motion.button
            type="button"
            key={image.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoomed((current) => !current)}
            className={`flex h-full max-h-full w-full items-center justify-center overflow-auto rounded-3xl outline-none ${
              zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            aria-label={zoomed ? "Fit photo to screen" : "Zoom photo"}
          >
            <img
              src={image.src}
              alt={image.title}
              className={`rounded-2xl object-contain shadow-2xl shadow-black/40 transition duration-300 ${
                zoomed ? "max-h-none max-w-none scale-125" : "max-h-full max-w-full"
              }`}
            />
          </motion.button>
        </AnimatePresence>

        {hasMultiple ? (
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white hover:text-slate-950 sm:right-6"
            aria-label="Next photo"
          >
            <Icon name="chevron-right" size={26} />
          </button>
        ) : null}
      </div>

      <div className="px-4 pb-4 pt-3 sm:px-6" onClick={(event) => event.stopPropagation()}>
        <div className="mx-auto mb-3 max-w-3xl text-center">
          <p className="font-black">{image.title}</p>
          {image.desc ? <p className="mt-1 line-clamp-1 text-sm text-slate-400">{image.desc}</p> : null}
        </div>
        {hasMultiple ? (
          <div className="lightbox-scrollbar mx-auto flex max-w-5xl gap-2 overflow-x-auto rounded-2xl bg-white/5 p-2">
            {images.map((thumbnail, thumbnailIndex) => (
              <button
                type="button"
                key={`${thumbnail.src}-${thumbnailIndex}`}
                onClick={() => onChange(thumbnailIndex)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-16 sm:w-24 ${
                  thumbnailIndex === index ? "border-violet-400 opacity-100" : "border-transparent opacity-45 hover:opacity-100"
                }`}
                aria-label={`View ${thumbnail.title}`}
                aria-current={thumbnailIndex === index ? "true" : undefined}
              >
                <img src={thumbnail.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

function ProjectDetails({ project, onPreview }) {
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const tags = Array.isArray(project.tags) ? project.tags : [];
  const metrics = Array.isArray(project.metrics) ? project.metrics : [];

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={project.title}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-[2.5rem] border border-white bg-white/80 shadow-2xl shadow-violet-100 backdrop-blur"
      >
        <div className="relative min-h-72 bg-slate-950 p-6 text-white">
          <FloatingBlob className="right-10 top-10 h-48 w-48 bg-violet-400/50" />
          <FloatingBlob className="bottom-0 left-10 h-36 w-36 bg-sky-300/40" />
          <div className="relative z-10 flex h-full min-h-60 flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-violet-100">{project.type}</span>
              <Icon name="external" size={20} />
            </div>
            <div>
              <h3 className="max-w-xl text-4xl font-black tracking-tight">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-slate-300">{project.summary}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="mb-2 text-sm font-black uppercase tracking-wider text-violet-700">Challenge</p>
            <p className="leading-7 text-slate-600">{project.challenge}</p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="mb-2 text-sm font-black uppercase tracking-wider text-violet-700">Solution</p>
            <p className="leading-7 text-slate-600">{project.solution}</p>
          </div>

          <div className="lg:col-span-2">
            {project.coverImage ? (
              <ImageWithFallback
                src={project.coverImage}
                alt={`${project.title} cover`}
                label={project.title}
                className="mb-6 h-72 w-full rounded-3xl object-cover shadow-lg"
                onPreview={() => onPreview(0)}
              />
            ) : null}

            {gallery.length > 0 ? (
              <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {gallery.map((image, index) => {
                  const imageSrc = typeof image === "string" ? image : image.src;
                  const imageTitle = typeof image === "string"
                    ? `${project.title} screen ${index + 1}`
                    : image.title;

                  return (
                    <ImageWithFallback
                      key={imageSrc || `${project.title}-${index}`}
                      src={imageSrc}
                      alt={imageTitle}
                      label={imageTitle}
                      className="h-48 w-full rounded-2xl object-cover shadow-sm transition hover:scale-[1.02]"
                      onPreview={() => onPreview(index + (project.coverImage ? 1 : 0))}
                    />
                  );
                })}
              </div>
            ) : null}

            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
                  {tag}
                </span>
              ))}
            </div>

            {metrics.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
                    <Icon name="check" className="mb-3 text-violet-700" size={20} />
                    <p className="text-sm font-bold text-slate-700">{metric}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {project.behanceUrl ? (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-100 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                View Full Case Study on Behance
                <Icon name="external" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [photoPreview, setPhotoPreview] = useState(null);

  const openProjectPhoto = (project, index) => {
    setPhotoPreview({
      images: getProjectImages(project),
      index,
      projectTitle: project.title,
    });
  };

  const featuredStats = useMemo(
    () => [
      { value: profile.experience, label: "UI/UX practice" },
      { value: `${projects.length}`, label: "Featured case studies" },
      { value: "Figma", label: "Main design tool" },
    ],
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ff] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-violet-200 transition group-hover:rotate-6">
              HH
            </span>
            <span>
              <span className="block text-sm font-black leading-none tracking-tight">{profile.name}</span>
              <span className="text-xs font-medium text-slate-500">{profile.role}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 lg:inline-flex"
          >
            Hire Hajar
            <Icon name="arrow" size={16} />
          </a>

          <button
            type="button"
            className="rounded-2xl border border-slate-200 bg-white p-3 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Icon name="menu" size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/40 p-4 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              className="rounded-[2rem] bg-white p-5 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <strong>Navigation</strong>
                <button
                  type="button"
                  className="rounded-full bg-slate-100 p-2"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>

              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section id="home" className="relative px-5 pb-24 pt-32 sm:pt-40 lg:px-8">
        <FloatingBlob className="left-[-10rem] top-20 h-72 w-72 bg-violet-300/50" />
        <FloatingBlob className="right-[-12rem] top-36 h-96 w-96 bg-fuchsia-300/40" />
        <FloatingBlob className="bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 bg-sky-200/40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-bold text-violet-700 shadow-sm backdrop-blur">
              <Icon name="spark" size={16} />
              Available for junior UI/UX roles and freelance projects
            </motion.p>

            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Transforming complex digital workflows into seamless, intuitive, and visually stunning experiences.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Welcome to Hajar’s creative space. As a passionate UI/UX Designer, she specializes in architectural data organization, structural layouts like Bento Grids, and cinematic visual storytelling that makes feature-rich platforms feel clean, authoritative, and effortless to navigate.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white shadow-2xl shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                View Case Studies
                <Icon name="arrow" className="transition group-hover:translate-x-1" size={18} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-violet-300"
              >
                Contact Me
                <Icon name="mail" size={18} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {featuredStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-300/50 via-fuchsia-200/40 to-sky-200/50 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-white bg-white/75 p-4 shadow-2xl shadow-violet-200/50 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-violet-200">Portfolio snapshot</p>
                    <h3 className="text-2xl font-black">UI/UX Designer</h3>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-lg font-black text-slate-950">HH</div>
                </div>

                <div className="mt-8 rounded-3xl bg-white/10 p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-violet-100">
                    <Icon name="check" size={16} />
                    Current focus
                  </div>
                  <div className="grid gap-3">
                    {[
                      "Medical mobile apps",
                      "Medical admin dashboards",
                      "Educational dashboards",
                      "Luxury e-commerce websites",
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                        <span className="font-semibold">{item}</span>
                        <Icon name="arrow" size={16} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-violet-400 p-5 text-slate-950">
                    <p className="text-3xl font-black">UX</p>
                    <p className="text-sm font-semibold opacity-80">Research, flows and testing</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <p className="text-3xl font-black">UI</p>
                    <p className="text-sm font-semibold opacity-70">Visual systems and screens</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Featured Projects Overview"
            title="Interactive case-study cards"
            text="A focused selection of product experiences across healthcare mobile apps, medical dashboards, educational dashboards, and luxury e-commerce — each designed around clarity, structure, and memorable visual storytelling."
          />

          <div className="grid gap-8">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, index) => (
                <ProjectButton
                  key={project.title}
                  project={project}
                  activeProject={activeProject}
                  onSelect={setActiveProject}
                  onPreview={() => openProjectPhoto(project, 0)}
                  index={index}
                />
              ))}
            </motion.div>

            <ProjectDetails project={activeProject} onPreview={(index) => openProjectPhoto(activeProject, index)} />
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Design Process"
            title="A simple process for better product decisions"
            text="This section helps recruiters understand how Hajar thinks, not just how the final screens look."
          />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.step}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white bg-white/75 p-6 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-black text-violet-700">{item.step}</p>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capabilities"
            title="Skills recruiters search for"
            text="Clear UX, polished UI, design systems, and strong communication — presented in a way that feels job-ready."
          />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <motion.div variants={fadeUp} key={skill.group} className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                    <Icon name={skill.icon} size={22} />
                  </div>
                  <h3 className="text-2xl font-black">{skill.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-violet-200"
          >
            <p className="mb-3 text-sm font-black uppercase tracking-wider text-violet-200">About Hajar</p>
            <h2 className="text-4xl font-black tracking-tight">A designer bridging technical precision and cinematic visual storytelling.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Hajar graduated from the Faculty of Law at Mansoura University and moved into UI/UX design, where she now focuses on apps, dashboards, and websites. Her work bridges structured thinking with expressive visual design, ensuring every digital product feels clear, modern, and memorable.
            </p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl bg-white/10 p-4 font-semibold">{profile.workplace}</div>
              <div className="rounded-2xl bg-white/10 p-4 font-semibold">Arabic and English</div>
              <div className="rounded-2xl bg-white/10 p-4 font-semibold">{profile.location}</div>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5">
            <motion.div variants={fadeUp} className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-violet-700">Education</p>
              <h3 className="mt-2 text-2xl font-black">{profile.education}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A non-traditional background that adds structured reasoning, research discipline, and communication strength to the design process.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-violet-700">Design Philosophy</p>
              <h3 className="mt-2 text-2xl font-black">Every pixel should serve function and feeling.</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Every pixel Hajar places serves a dual purpose: it must optimize functionality for the user while delivering an elite visual experience for the brand. Whether architecting complex SaaS dashboards or designing high-end e-commerce interfaces, clarity, modern aesthetics, and exceptional usability stay at the core of the product.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-violet-700">What I can help with</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["App UI/UX", "Dashboard UX", "Website UI", "Wireframes", "Design Systems", "Figma Prototypes"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">
                    <Icon name="check" size={18} className="text-violet-700" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12"
        >
          <FloatingBlob className="right-0 top-0 h-80 w-80 bg-violet-400/40" />
          <FloatingBlob className="bottom-0 left-0 h-80 w-80 bg-sky-300/30" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-violet-100">Let’s build something useful</p>
              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Available for UI/UX opportunities and freelance projects.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                For hiring managers and founders: Hajar is ready for junior UI/UX designer roles, internships, freelance screens, dashboards, and website design projects. Let’s collaborate and bring your next big vision to life.
              </p>
            </div>

            <div className="grid gap-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-950 transition hover:-translate-y-1">
                <Icon name="mail" size={19} />
                {profile.email}
              </a>

              <a href={`tel:${profile.phone}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15">
                <Icon name="phone" size={19} />
                {profile.phone}
              </a>

              <div className="rounded-2xl bg-white/10 p-4 font-bold text-white">{profile.linkedin}</div>
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {photoPreview ? (
          <PhotoLightbox
            preview={photoPreview}
            onClose={() => setPhotoPreview(null)}
            onChange={(index) => setPhotoPreview((current) => ({ ...current, index }))}
          />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

export default App;
