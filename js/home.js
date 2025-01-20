window.onload = () => {
    setTimeout(() => {
        document.getElementById('home').classList.add('fade-in-active');
    }, 0);

    document.getElementById('projects-button').addEventListener('click', function() {
        const mainContent = document.getElementById('main-content-md');
        const projectsSection = document.getElementById('projects-section');
        const experienceSection = document.getElementById('experience-section');

        if (!projectsSection.classList.contains('hidden')) {
            projectsSection.classList.add('hidden');
            mainContent.classList.remove('header');
        } else {
            mainContent.classList.add('header');
            projectsSection.classList.remove('hidden');
            experienceSection.classList.add('hidden');
        }
    });

    document.getElementById('experience-button').addEventListener('click', function() {
        const mainContent = document.getElementById('main-content-md');
        const projectsSection = document.getElementById('projects-section');
        const experienceSection = document.getElementById('experience-section');

        if (!experienceSection.classList.contains('hidden')) {
            experienceSection.classList.add('hidden');
            mainContent.classList.remove('header');
        } else {
            mainContent.classList.add('header');
            experienceSection.classList.remove('hidden');
            projectsSection.classList.add('hidden');
        }
    });
}