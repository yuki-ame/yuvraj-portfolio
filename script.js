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


// The Konami Code sequence
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    // Check if the key matches the next step in the sequence
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        // If the full code is entered
        if (konamiIndex === konamiCode.length) {
            unlockSecret();
            konamiIndex = 0; // Reset
        }
    } else {
        konamiIndex = 0; // Reset if they mess up
    }
});

function unlockSecret() {
    // Play a retro sound effect if you want, then redirect
    alert("ACCESS GRANTED. ENTERING THE VOID.");
    window.location.href = "secret.html";
}