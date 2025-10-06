import React, { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Product & category Performace Analysis",
    subtitle: "SQL / Python",
    summary: "Analyzed 1k+ Amazon products using SQL to identify top-performing categories, resulting in actionan;e insights on product rating trends",
    repo: "",
    demo: "#",
    tags: ["Data Cleaning", "SQL", "Python", "Data Analysis"],
    impact: "",
    color: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
  },
  {
    id: 2,
    title: "Amazon Pricing & Discount Strategy Analysis",
    subtitle: "SQL / Tableau / Statistical Analysis",
    summary: "Built interactive Tableau dashboard analyzing discount strategies across categories, revealing 23% higher ratings for products with 23-50% discounts.",
    repo: "",
    demo: "#",
    tags: ["MySQL", "Tableau", 'EDA'],
    impact: "",
    color: "linear-gradient(135deg, #10b981, #0d9488)"
  },
  {
    id: 3,
    title: "Amazon Customer Review & Sentiment Analysis",
    subtitle: "NLP / HiggingFace / Python",
    summary: "Implemented sentiment analysis using Hugging Face Transformers on 1k+ customer reviews, achieving 87% accuracy in predicting product satisfaction.",
    repo: "",
    demo: "#",
    tags: ["Python", "Data Visualization", "ML"],
    impact: "",
    color: "linear-gradient(135deg, #f97316, #dc2626)"
  },

  {
    id: 4,
    title: "Pizza Management System",
    subtitle: "SQL / Java",
    summary: "Database-driven application simulating pizza store operations with role-based access control. Features user authentication, menu management, order processing, and administrative functions using Java JDBC and PostgreSQL.",
    repo: "https://github.com/bteze001/PizzaManagementSystem",
    demo: "#",
    tags: ["SQL", "PostgreSQL", "Java", "JDBC"],
    impact: "5+ tables, 15+ SQL queries",
    color: "linear-gradient(135deg, #f97316, #dc2626)"
  },
  {

    id: 4,
    title: "ProjectHive",
    subtitle: "C++ / Database / UI Desgin/ Full-Stack",
    summary: "An easy to use project management platform that addresses the challegnes of existing tools which are often too complex, too simple or too expensive.",
    repo: "https://github.com/bteze001/ProjectHive",
    demo: "#",
    tags: ["SQL", "PostgreSQL", "CROW Framework", "HTML", "CSS", "JavaScript", "C++"],
    impact: "",
    color: "linear-gradient(135deg, #f97316, #dc2626)"
  },

  {
    id: 4,
    title: "CollegeCompass",
    subtitle: "React / PostgrSQL / UI Desgin / API / Database / UML",
    summary: "Web-based platform designed to help college students discover, rate, and save local food spots, housing options and campus activities",
    repo: "https://github.com/bteze001/College-Compass",
    demo: "#",
    tags: ["React", "Foursquare API", "Firebase", "JavaScript"],
    impact: "",
    color: "linear-gradient(135deg, #f97316, #dc2626)"
  },
];

const EXPERIENCE = [
  {
    id: 1,
    title: "Undergraduate Research Intern",
    subtitle: "SURE @ UCLA - Department of BioEngineering",
    summary: "Cleaned and prepared large biomedical datasets using Python libraries, applying machine learning techniques to extract meaningful insights. Developed data pipelines to streamline data processing and analysis for research publications. Created interactive dashbaords and visualizations to communicate findings effectively. Documented all methodologies, resultes and summaries to maintain transparency in research workflows.",
    repo: "https://github.com/yourusername/research-project",
    demo: "#",
    tags: ["Tableau", "Python", "Excel", "Scikit-learn", "Pandas"],
    impact: "3 publications",
    color: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
  }
];

const SKILLS = [
  { name: "SQL", level: 95, category: "Database" },
  { name: "Python", level: 90, category: "Programming" },
  { name: "Tableau", level: 88, category: "Visualization" },
  { name: "Power BI", level: 85, category: "Visualization" },
  { name: "Machine Learning", level: 82, category: "ML/AI" },
  { name: "Excel", level: 93, category: "Analysis" },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add keyframes for animations
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
        40%, 43% { transform: translate3d(0, -10px, 0); }
        70% { transform: translate3d(0, -5px, 0); }
        90% { transform: translate3d(0, -2px, 0); }
      }
    `;
    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
      // Ignore if already exists
    }
  }, []);

  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    backgroundElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },
    mouseOrb: {
      position: 'absolute',
      width: '384px',
      height: '384px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      left: mousePosition.x / 10,
      top: mousePosition.y / 10,
      transition: 'all 0.3s ease-out'
    },
    staticOrb1: {
      position: 'absolute',
      top: '25%',
      right: '25%',
      width: '288px',
      height: '288px',
      background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 2s infinite'
    },
    staticOrb2: {
      position: 'absolute',
      bottom: '25%',
      left: '33%',
      width: '256px',
      height: '256px',
      background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'bounce 3s infinite'
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '48px 24px'
    },
    header: {
      marginBottom: '80px',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
      transition: 'all 0.8s ease-out'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '48px',
      flexWrap: 'wrap'
    },
    headerInfo: {
      flex: 1,
      textAlign: 'left'
    },
    mainTitle: {
      fontSize: '4.5rem',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 50%, #a5f3fc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '25px',
      lineHeight: '1',
      marginTop: '60px'
    },
    subtitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#c084fc',
      marginBottom: '24px'
    },
    description: {
      fontSize: '1.25rem',
      color: '#cbd5e1',
      lineHeight: '1.7',
      marginBottom: '32px',
      maxWidth: '600px'
    },
    highlightText: {
      color: '#06b6d4',
      fontWeight: '600'
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    primaryButton: {
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      borderRadius: '50px',
      fontWeight: '600',
      color: 'white',
      textDecoration: 'none',
      boxShadow: '0 25px 50px rgba(139, 92, 246, 0.25)',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    },
    secondaryButton: {
      padding: '16px 32px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50px',
      fontWeight: '600',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: '16px'
    },

    navbar: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 48px',
      background: 'rgba(1, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: '20',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    },

    navLogo: {
      fontWeight: '700',
      fontSize: '1.5rem',
      color: 'white'
    },

    navLinks: {
      display: 'flex',
      gap: '24px'
    },

    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },

    profileContainer: {
      flexShrink: 0,
      marginRight: '15%'
    },
    profileWrapper: {
      position: 'relative'
    },
    profileImage: {
      width: '320px',
      height: '320px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)',
      padding: '4px',
      animation: 'pulse 2s infinite'
    },
    profileInner: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '48px',
      background: 'linear-gradient(135deg, #ffffff, #e9d5ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '32px',
      marginTop: '32px'
    },
    card: {
      background: 'transparent',
      borderRadius: '24px',
      padding: '4px',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      transform: 'translateY(0)',
      boxShadow: '0 25px 50px rgba(139, 92, 246, 0.25)'
    },
    cardInner: {
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '32px',
      height: '100%',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '8px'
    },
    cardSubtitle: {
      color: '#c084fc',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '12px'
    },
    cardTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px'
    },
    cardTag: {
      padding: '6px 12px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#06b6d4',
      border: '1px solid rgba(6, 182, 212, 0.3)'
    },
    cardDescription: {
      color: '#cbd5e1',
      fontSize: '0.875rem',
      lineHeight: '1.6',
      marginBottom: '16px'
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    impactText: {
      color: '#10b981',
      fontWeight: '700',
      fontSize: '0.875rem'
    },
    cardButtons: {
      display: 'flex',
      gap: '8px'
    },
    cardButton: {
      padding: '8px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      fontSize: '0.75rem',
      textDecoration: 'none',
      color: 'white',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    cardButtonPrimary: {
      background: '#8b5cf6'
    },
    skillsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '48px',
      marginBottom: '80px'
    },
    skillsCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '32px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    skillsTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      marginBottom: '32px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffffff, #a5f3fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    skillItem: {
      marginBottom: '24px'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    skillName: {
      color: 'white',
      fontWeight: '600'
    },
    skillCategory: {
      color: '#c084fc',
      fontSize: '0.875rem'
    },
    skillBarContainer: {
      position: 'relative',
      scrollMarginTop: '100px'
    },
    skillBar: {
      width: '100%',
      height: '12px',
      background: '#475569',
      borderRadius: '50px'
    },
    skillProgress: {
      height: '12px',
      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
      transition: 'width 0.8s ease'
    },
    skillPercentage: {
      position: 'absolute',
      right: '0',
      top: '-24px',
      color: '#06b6d4',
      fontSize: '0.875rem',
      fontWeight: '700'
    },
    educationItem: {
      position: 'relative',
      paddingLeft: '32px',
      borderLeft: '4px solid',
      borderImage: 'linear-gradient(to bottom, #8b5cf6, #06b6d4) 1',
      marginBottom: '32px'
    },
    educationDot: {
      position: 'absolute',
      left: '-12px',
      top: '0',
      width: '24px',
      height: '24px',
      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      borderRadius: '50%'
    },
    educationTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '8px'
    },
    educationSubtitle: {
      color: '#c084fc',
      fontWeight: '500',
      marginBottom: '8px'
    },
    educationDescription: {
      color: '#cbd5e1'
    },
    footer: {
      textAlign: 'center',
      padding: '48px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    footerText: {
      color: '#94a3b8',
      fontSize: '1.125rem',
      marginBottom: '16px'
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px'
    },
    footerLink: {
      color: '#8b5cf6',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(4px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    },
    modalContent: {
      background: 'transparent',
      borderRadius: '24px',
      padding: '4px',
      maxWidth: '768px',
      width: '100%'
    },
    modalInner: {
      background: '#0f172a',
      borderRadius: '20px',
      padding: '32px'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px'
    },
    modalTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: 'white'
    },
    closeButton: {
      fontSize: '1.5rem',
      color: '#94a3b8',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    modalDescription: {
      color: '#cbd5e1',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      marginBottom: '24px'
    },
    modalButtons: {
      display: 'flex',
      gap: '16px'
    },
    modalButton: {
      flex: 1,
      padding: '12px 24px',
      borderRadius: '50px',
      textAlign: 'center',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontWeight: '600'
    },
    modalButtonSecondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    },
    modalButtonPrimary: {
      background: '#8b5cf6',
      color: 'white'
    }
  };

  return (

    <div style={styles.container}>
      {/* Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={styles.mouseOrb} />
        <div style={styles.staticOrb1} />
        <div style={styles.staticOrb2} />
      </div>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}></div>
        <div style={styles.navLinks}>
          {["home", "projects", "experience", "skills", "education"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                ...styles.navLink,
                color:
                  activeLink === link
                    ? "#06b6d4"           // active color
                    : hoveredLink === link
                      ? "#06b6d4"           // hover color
                      : "white"             // default
              }}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);                       // set as active on click
                document.querySelector(`#${link}`).scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a href="mailto:Tezerabeza1@gmail.com" style={styles.navLink}>Contact</a>
        </div>
      </nav>
    

      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerInfo}>
              <h1 style={styles.mainTitle}> Beza Tezera</h1>
              <div style={styles.subtitle}>Data Analyst</div>
              <p style={styles.description}>
                I transform complex data into compelling stories that drive business decisions.
                Specializing in <span style={styles.highlightText}>SQL</span>,
                <span style={styles.highlightText}> Python</span>, and
                <span style={styles.highlightText}> Advanced Analytics</span>.
              </p>
              <div style={styles.buttonGroup}>
                <a href="/Data_Analyst_Resume.pdf" style={styles.primaryButton}>Resume</a>
                <a href="https://github.com/bteze001" style={styles.secondaryButton} target="_blank">GitHub</a>
                <a href="mailto:Tezerabeza1@gmail.com" style={styles.secondaryButton}>Contact</a>
              </div>
            </div>

            <div style={styles.profileContainer}>
              <div style={styles.profileWrapper}>
                <div style={styles.profileImage}>
                  <img src='/profile.JPG' alt="Beza Tezera" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  {/* <div style={styles.profileInner}>📊</div> */}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.grid}>
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                style={{
                  ...styles.card,
                  background: project.color
                }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={styles.cardInner}>
                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.cardTitle}>{project.title}</h3>
                      <p style={styles.cardSubtitle}>{project.subtitle}</p>
                    </div>
                    <span style={{ fontSize: '2rem' }}>📊</span>
                  </div>

                  <div style={styles.cardTags}>
                    {project.tags.map(tag => (
                      <span key={tag} style={styles.cardTag}>{tag}</span>
                    ))}
                  </div>

                  <p style={styles.cardDescription}>{project.summary}</p>

                  <div style={styles.cardFooter}>
                    <span style={styles.impactText}>{project.impact}</span>
                    <div style={styles.cardButtons}>
                      <a
                        href={project.repo}
                        style={styles.cardButton}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </a>
                      <a
                        href={project.demo}
                        style={{ ...styles.cardButton, ...styles.cardButtonPrimary }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.grid}>
            {EXPERIENCE.map((experience) => (
              <div
                key={experience.id}
                style={{
                  ...styles.card,
                  background: experience.color
                }}
                onClick={() => setSelected(experience)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={styles.cardInner}>
                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.cardTitle}>{experience.title}</h3>
                      <p style={styles.cardSubtitle}>{experience.subtitle}</p>
                    </div>
                    <span style={{ fontSize: '2rem' }}>💼</span>
                  </div>

                  <div style={styles.cardTags}>
                    {experience.tags.map(tag => (
                      <span key={tag} style={styles.cardTag}>{tag}</span>
                    ))}
                  </div>

                  <p style={styles.cardDescription}>{experience.summary}</p>

                  <div style={styles.cardFooter}>
                    <span style={styles.impactText}>{experience.impact}</span>
                    <div style={styles.cardButtons}>
                      <a
                        href={experience.repo}
                        style={styles.cardButton}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Education Section */}
        <section id="skills" style={{ ...styles.skillsContainer, scrollMarginTop: '100px' }}>
          <div style={styles.skillsCard}>
            <h3 style={styles.skillsTitle}>Technical Skills</h3>
            <div>
              {SKILLS.map((skill) => (
                <div key={skill.name} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillCategory}>{skill.category}</span>
                  </div>
                  <div style={styles.skillBarContainer}>
                    <div style={styles.skillBar}>
                      <div
                        style={{
                          ...styles.skillProgress,
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                    <span style={styles.skillPercentage}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="education" style={{ ...styles.skillsCard, scrollMarginTop: "100px" }}>
            <h3 style={styles.skillsTitle}>Education</h3>
            <div>
              <div style={styles.educationItem}>
                <div style={styles.educationDot} />
                <h4 style={styles.educationTitle}>University of California, Riverside</h4>
                <p style={styles.educationSubtitle}>B.S. Computer Science, June 2025</p>
                <p style={{ ...styles.educationDescription, color: '#10b981', fontWeight: '600', marginBottom: '10px', marginTop: '5px' }}> GPA: 3.70 </p>
                <p style={{ ...styles.educationDescription, color: '#10b981', fontWeight: '600', marginBottom: '10px' }}> Dean's List </p>
                <p style={{ ...styles.educationDescription, color: '#10b981', fontWeight: '600', marginBottom: '10px' }}> Chancellor's List</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Beza Tezera — Transforming Data into Insights
          </p>
          <div style={styles.footerLinks}>
            <a href="https://www.linkedin.com/in/beza-21bt03/" style={{ ...styles.footerLink, color: '#8b5cf6' }}>LinkedIn</a>
            <a href="https://github.com/bteze001" style={{ ...styles.footerLink, color: '#06b6d4' }}>Github</a>
            <a href="#" style={{ ...styles.footerLink, color: '#10b981' }}>Email</a>
          </div>
        </footer>
      </div>

      {/* Project Modal */}
      {selected && (
        <div style={styles.modal} onClick={() => setSelected(null)}>
          <div
            style={{
              ...styles.modalContent,
              background: selected.color
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalInner}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>{selected.title}</h3>
                <button
                  onClick={() => setSelected(null)}
                  style={styles.closeButton}
                  onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  ×
                </button>
              </div>
              <p style={{ color: '#c084fc', marginBottom: '16px' }}>{selected.subtitle}</p>
              <p style={styles.modalDescription}>{selected.summary}</p>
              <div style={{ ...styles.cardTags, marginBottom: '24px' }}>
                {selected.tags.map(tag => (
                  <span key={tag} style={styles.cardTag}>{tag}</span>
                ))}
              </div>
              <div style={styles.modalButtons}>
                <a
                  href={selected.repo}
                  style={{ ...styles.modalButton, ...styles.modalButtonSecondary }}
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href={selected.demo}
                  style={{ ...styles.modalButton, ...styles.modalButtonPrimary }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}