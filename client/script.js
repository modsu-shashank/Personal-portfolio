document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1000);

    // 2. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 4. Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Fetch Data from Backend
    // In production, this might be your verified domain. For local development, assuming running on port 5000.
    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:5000/api' 
        : 'https://personal-portfolio-server.vercel.app/api'; // Vercel backend URL

    // Fetch Skills
    const fetchSkills = async () => {
        const skillsContainer = document.getElementById('skills-container');
        try {
            const res = await fetch(`${API_BASE}/skills`);
            if (!res.ok) throw new Error('Failed to fetch');
            const skills = await res.json();
            
            if (skills.length === 0) {
                // If empty, auto-trigger seed route then fetch again (Developer help)
                await fetch(`${API_BASE}/seed`);
                return fetchSkills();
            }

            skillsContainer.innerHTML = skills.map(skill => `
                <div class="skill-card">
                    <i class="${skill.icon || 'fas fa-code'}"></i>
                    <h4>${skill.name}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-secondary);">${skill.category}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching skills:', error);
            skillsContainer.innerHTML = '<p class="error-msg">Could not load skills at this time.</p>';
        }
    };

    // Fetch Projects
    const fetchProjects = async () => {
        const projectsContainer = document.getElementById('projects-container');
        try {
            const res = await fetch(`${API_BASE}/projects`);
            if (!res.ok) throw new Error('Failed to fetch');
            const projects = await res.json();
            
            if (projects.length === 0) {
                 // DB not seeded, handled by skills fetch normally, just wait a bit or ignore
                 projectsContainer.innerHTML = '<p>No projects found.</p>';
                 return;
            }

            projectsContainer.innerHTML = projects.map(project => `
                <div class="project-card">
                    <div class="project-img">
                        <img src="${project.imageUrl}" alt="${project.title}">
                        <div class="project-overlay">
                            <a href="${project.link}" target="_blank" class="btn btn-primary" style="margin: 0; padding: 0.5rem 1rem;">View Project</a>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-stack">
                            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching projects:', error);
            projectsContainer.innerHTML = '<p class="error-msg">Could not load projects at this time.</p>';
        }
    };

    fetchSkills().then(fetchProjects);

    // 6. Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const btnText = document.getElementById('btn-text');
        const btnLoader = document.getElementById('btn-loader');
        const formMsg = document.getElementById('form-msg');
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        formMsg.textContent = '';
        formMsg.className = 'form-msg';

        try {
            const res = await fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
            
            const data = await res.json();
            
            if (res.ok) {
                formMsg.textContent = 'Message sent successfully!';
                formMsg.classList.add('success');
                contactForm.reset();
            } else {
                throw new Error(data.errors ? data.errors[0].msg : 'Error sending message');
            }
        } catch (error) {
            formMsg.textContent = error.message.includes('fetch') ? 'Network error. Make sure backend is running.' : error.message;
            formMsg.classList.add('error');
        } finally {
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
        }
    });

    // 7. Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
