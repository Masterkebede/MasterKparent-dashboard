document.querySelectorAll('h2').forEach((header) => {
    header.addEventListener('click', () => {
        const section = header.nextElementSibling;
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });
});
