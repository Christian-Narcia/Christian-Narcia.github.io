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
