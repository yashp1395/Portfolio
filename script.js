// Skills Data
const skillsData = [
    {
        category: "Programming Languages",
        icon: "fas fa-code",
        skills: ["Java", "C/C++", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
        category: "Frameworks & Backend",
        icon: "fas fa-server",
        skills: [
            "Spring Boot",
            "Microservices",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Spring JDBC",
            "Spring AOP",
            "Spring AI",
            "Hibernate",
            "JSP",
            "Servlets",
            "RESTful APIs"
        ]
    },
    {
        category: "Tools & Technologies",
        icon: "fas fa-tools",
        skills: [
            "Docker",
            "Git",
            "GitHub",
            "Maven",
            "MySQL",
            "JDBC",
            "JUnit"
        ]
    },
    {
        category: "Specialized Skills",
        icon: "fas fa-brain",
        skills: [
            "Financial Analysis",
            "Incoterms Knowledge",
            "Machine Learning",
            "NLP",
            "AWS Cloud"
        ]
    }
];

// Projects Data
const projectsData = [
    {
        title: "PROPAY - Employee Payroll Management System",
        description: "Engineered an enterprise-grade payroll and HR solution using Spring Boot 3.3.4 and React 18 to automate end-to-end employee lifecycles, featuring a secure Java 22 backend with JWT-based RBAC for sensitive financial data protection. Integrated Google Gemini AI via the Vertex AI SDK to provide an intelligent assistant for natural language payroll queries and delivered real-time analytics using Chart.js for data-driven organizational insights.",
        techStack: ["Spring Boot", "React", "MySQL", "JWT", "Google Gemini AI", "Chart.js", "iText PDF"],
        github: "GitHub",
        highlights: [
            "Automated complex financial workflows including high-fidelity iText PDF payslip generation",
            "Implemented tax calculations and attendance tracking",
            "Built with HikariCP for high-performance data access"
        ]
    },
    {
        title: "AGV Fleet Optimization System",
        description: "Optimized AGV payload delivery using Python, Dijkstra's algorithm, and priority scheduling, significantly reducing delivery time by 35% and boosting fleet utilization. Successfully integrated solutions for critical constraints, including load capacity, collision avoidance, and battery management, ensuring safe and efficient operations.",
        techStack: ["Python", "Dijkstra's Algorithm", "Priority Scheduling", "Optimization"],
        github: "GitHub",
        highlights: [
            "35% reduction in delivery time",
            "95%+ task completion within SLA",
            "Enhanced system uptime through improved fleet coordination"
        ]
    },
    {
        title: "Movie Recommender System",
        description: "Engineered a content-based recommendation engine using a vector-space model and Cosine Similarity to compute semantic relationships between 4,800+ titles, optimizing user interest matching. Architected a high-performance NLP pipeline involving NLTK-based Porter Stemming and CountVectorizer to transform multi-variate metadata into 5,000-dimensional feature vectors.",
        techStack: ["Python", "Scikit-Learn", "NLP", "Streamlit", "NLTK", "TMDB API"],
        github: "GitHub",
        highlights: [
            "4,800+ movie titles analyzed",
            "5,000-dimensional feature vectors for accurate recommendations",
            "Real-time metadata rendering with TMDB API integration"
        ]
    }
];

// Experience Data
const experienceData = [
    {
        role: "AI/ML Intern",
        company: "ShadowFox",
        duration: "Jan 2026 – Feb 2026",
        type: "Virtual",
        responsibilities: [
            "Completed a one-month intensive virtual internship focused on Artificial Intelligence and Machine Learning",
            "Gained hands-on experience by working on real-time projects under a structured weekly program, progressing from beginner to advanced project levels",
            "Developed and deployed an interactive Boston House Price Prediction web application using Scikit-learn and Streamlit, allowing real-time price estimation based on urban and socio-economic factors"
        ]
    },
    {
        role: "Java Programming Intern",
        company: "CodSoft",
        duration: "Dec 2025 – Jan 2026",
        type: "Virtual",
        responsibilities: [
            "Undertook a 4-week virtual internship to develop and enhance skills in core and advanced Java programming",
            "Diligently executed all assigned tasks and projects, contributing valuable work that led to successful program completion with 'wonderful remarks'",
            "Designed and implemented a Student Management System in Java to manage student records, courses, and grades with an efficient console-based user interface"
        ]
    }
];

// Dynamic Skills Rendering
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skillsData.forEach((category, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <h3><i class="${category.icon}"></i> ${category.category}</h3>
            <div class="skill-tags">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Dynamic Projects Rendering
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
            </div>
            <div class="project-body">
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="https://github.com/yashp1395" class="project-link github">
                        <i class="fab fa-github"></i> ${project.github}
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Dynamic Experience Rendering
function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h3>${exp.role}</h3>
                        <h4>${exp.company}</h4>
                    </div>
                    <span class="timeline-badge">${exp.type}</span>
                </div>
                <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem;">
                    ${exp.duration}
                </p>
                <ul>
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Show success message (you can integrate with a real backend here)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderSkills();
    renderProjects();
    renderExperience();
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Handle profile image error (if image doesn't exist, show placeholder)
    const profileImage = document.getElementById('profileImage');
    profileImage.addEventListener('error', function() {
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '4rem';
        this.style.fontWeight = '700';
        this.style.color = 'white';
        this.innerHTML = 'YP';
        this.removeAttribute('src');
    });
});

// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
const roles = [
    'Software Engineer',
    'Java Developer',
    'AI/ML Enthusiast',
    'Full Stack Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next role
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// Add particle effect to hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
}

// Uncomment to enable particles
// createParticles();
