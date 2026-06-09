
import React, { useState } from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Hajar Hassan",
  role: "UI/UX Designer",
  email: "HajarrHassan41@gmail.com",
  phone: "01091136294",
  location: "Al-Mansoura, Egypt",
  linkedin: "https://www.linkedin.com/in/hajarrhassan24",
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

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m12 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [selectedImage, setSelectedImage] = useState(activeProject.gallery[0]);

  const selectProject = (project) => {
    setActiveProject(project);
    setSelectedImage(project.gallery[0]);
  };

  return (
    <main>
      <header className="navbar">
        <div className="brand">
          <div className="logo">HH</div>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>

        <a href={`mailto:${profile.email}`} className="navButton">
          Hire Hajar <IconArrow />
        </a>
      </header>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="heroText"
        >
          <p className="eyebrow">{activeProject.type}</p>
          <h1>{activeProject.title}</h1>
          <p>{activeProject.summary}</p>

          <div className="heroActions">
            <a href="#project" className="primaryButton">View Project</a>
            {activeProject.behanceUrl && (
              <a href={activeProject.behanceUrl} target="_blank" rel="noreferrer" className="secondaryButton">
                Behance Case Study
              </a>
            )}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondaryButton">
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="heroImage"
        >
          <img src={activeProject.coverImage} alt={`${activeProject.title} cover`} />
        </motion.div>
      </section>

      <section id="project" className="projectSection">
        <div className="projectPicker">
          <p className="eyebrow">Selected Work</p>
          <div className="projectTabs">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => selectProject(project)}
                className={activeProject.id === project.id ? "projectTab active" : "projectTab"}
              >
                <img src={project.coverImage} alt="" />
                <span>{project.type}</span>
                <strong>{project.title}</strong>
                <small>{project.gallery.length} screens</small>
              </button>
            ))}
          </div>
        </div>

        <div className="sectionTitle">
          <p className="eyebrow">Featured Project</p>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.summary}</p>
        </div>

        <div className="projectGrid">
          <article className="infoCard">
            <span>Project Goal</span>
            <p>{activeProject.goal}</p>
          </article>

          <article className="infoCard">
            <span>Challenge</span>
            <p>{activeProject.challenge}</p>
          </article>

          <article className="infoCard wide">
            <span>Solution</span>
            <p>{activeProject.solution}</p>
          </article>
        </div>

        <div className="tags">
          {activeProject.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="previewLayout">
          <motion.div
            key={selectedImage.src}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mainPreview"
          >
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.desc}</p>
            </div>
          </motion.div>

          <div className="galleryGrid">
            {activeProject.gallery.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelectedImage(item)}
                className={selectedImage.src === item.src ? "thumb active" : "thumb"}
              >
                <img src={item.src} alt={item.title} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow">Let’s collaborate</p>
        <h2>Available for UI/UX opportunities and freelance projects.</h2>
        <p>
          For hiring managers and founders: Hajar can help with healthcare apps,
          dashboards, websites, design systems, and Figma prototypes.
        </p>

        <div className="contactLinks">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
          <span>{profile.location}</span>
        </div>
      </section>
    </main>
  );
}

export default App;
