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

