function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Hide the sidebar and overlay
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function toggleSidebar() {
    // Check if the screen width is 768px or less
    if (window.matchMedia('(max-width: 768px)').matches) {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const content = document.querySelector('.content');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    // Toggle the slide-up effect for content when sidebar is hidden
    if (!sidebar.classList.contains('active')) {
        content.classList.remove('slide-up');
       
    } else {
        content.classList.add('slide-up');
    }
}


async function loadProjects() {
    try {
        // Fetch the JSON file containing project metadata
        const response = await fetch('projects.json');
        const projects = await response.json();
        console.log(projects)
        // Get the container element
        const container = document.getElementById('grid-container');
        container.innerHTML = ''; // Clear any existing content

        // Generate HTML for each project
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'grid-item';
            projectDiv.innerHTML = `
                <a href="${project.site}" target="_blank">
                    <img src="${project.img}" alt="${project.name}">
                    <div class="content">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                </a>
            `;
            container.appendChild(projectDiv);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Night/Day mode toggle with browser preference and sliding button
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
let isDay;

function setMode(dayMode) {
    if (dayMode) {
        body.style.backgroundColor = '#fff';
        body.style.backgroundImage = 'none';
        modeToggle.classList.add('day');
        slider.innerHTML = '☀️';
        isDay = true;
    } else {
        body.style.backgroundColor = '#585858';
        body.style.backgroundImage = 'linear-gradient(139deg, rgba(36, 40, 50, 1) 0%, rgba(36, 40, 50, 1) 0%, rgb(39, 29, 43) 100%)';
        modeToggle.classList.remove('day');
        slider.innerHTML = '🌙';
        isDay = false;
    }
}

// Add slider and icon structure to the button
if (modeToggle && !modeToggle.querySelector('.slider')) {
    modeToggle.innerHTML = '<span class="icon"></span><span class="slider">🌙</span>';
}
const slider = modeToggle.querySelector('.slider');

// Detect browser preference on load
window.addEventListener('DOMContentLoaded', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(!prefersDark);
});

if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        setMode(!isDay);
    });
}
