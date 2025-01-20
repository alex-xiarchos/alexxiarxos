window.onload = () => {
    setTimeout(() => {
        document.getElementById('home').classList.add('fade-in-active');
    }, 0);

    document.getElementById('projects-button').addEventListener('click', function() {
        const mainContent = document.getElementById('main-content-md');
        const projectsSection = document.getElementById('projects-section');
        const isHeader = mainContent.classList.contains('header');

        if (isHeader) {
            mainContent.classList.remove('header');
            projectsSection.classList.add('hidden');
        } else {
            mainContent.classList.add('header');
            projectsSection.classList.remove('hidden');
        }
    });
}