let clickCount = 0;
let lastClickTime = 0;

function checkClicks() {
    const currentTime = Date.now();
    
    // Reset counter if more than 2 seconds between clicks
    if (currentTime - lastClickTime > 2000) {
        clickCount = 0;
    }
    
    clickCount++;
    lastClickTime = currentTime;
    
    // After 7 clicks, show password prompt
    if (clickCount === 7) {
        const password = prompt("ENTER ACCESS CODE:");
        if (password === "BRICK1947" || password === "brick1947") {
            window.location.href = "index.html#secret";
            clickCount = 0;
        } else if (password !== null) {
            alert("ACCESS DENIED");
            clickCount = 0;
        }
    }
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        window.location.href = "index.html#secret";
        konamiCode = [];
    }
});
