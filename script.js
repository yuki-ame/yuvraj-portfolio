document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    
    if (!cursor) return; // Safety check
    
    // Initialize cursor position
    cursor.style.left = '0px';
    cursor.style.top = '0px';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for all links and buttons
    const links = document.querySelectorAll('a, button, .cap-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
});