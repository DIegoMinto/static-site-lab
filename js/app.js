
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

const projectDetails = {
    crm: {
        title: "Customer Relationship Management (CRM)",
        desc: "Arquitectura robusta desarrollada para optimizar la gestión de flujos comerciales. Incluye automatización de embudos de venta y dashboards interactivos."
    },
    school: {
        title: "Plataforma de Gestión Académica",
        desc: "Sistema diseñado para el Colegio Boliviano Alemán. Controla asistencia, reportes de calificaciones y cuenta con autenticación segura delegada en Amazon Cognito."
    },
    audit: {
        title: "Auditoría de Infraestructura y Elasticidad",
        desc: "Evaluación técnica de tolerancia al estrés en servidores web durante eventos masivos. Configuración de Auto Scaling y optimización de firewalls."
    }
};

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-project');
        if(projectDetails[key]) {
            modalTitle.textContent = projectDetails[key].title;
            modalDesc.textContent = projectDetails[key].desc;
            modal.classList.remove('hidden');
        }
    });
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });