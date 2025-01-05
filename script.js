document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove('active'));
            // Hide all contents
            contents.forEach(content => content.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Show corresponding content
            const activeContent = document.getElementById(tab.getAttribute('data-tab'));
            activeContent.classList.add('active');
        });
    });
});
