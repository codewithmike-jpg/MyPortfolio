const roles = [
    "Web Designer.",
    "Web Developer.",
    "Frontend Developer.",
    "Python Developer."
];
const speed = 100; // typing speed in milliseconds
const pause = 1500; // pause duration after each sentence
let roleIndex = 0;
let charIndex = 0;

function type() {
    if (roleIndex < roles.length) {
        if (charIndex < roles[roleIndex].length) {
            document.getElementById("typewriter").innerHTML = `I am a ${roles[roleIndex].substring(0, charIndex + 1)}`;
            charIndex++;
            setTimeout(type, speed);
        } else {
            // Pause after finishing the current role
            setTimeout(() => {
                erase();
            }, pause);
        }
    } else {
        // Restart the typing effect
        roleIndex = 0; // Reset to the first role
        setTimeout(() => {
            type(); // Start typing again
        }, pause); // Wait before restarting
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("typewriter").innerHTML = `I am a ${roles[roleIndex].substring(0, charIndex - 1)}`;
        charIndex--;
        setTimeout(erase, speed / 2); // Erase faster
    } else {
        // Move to the next role
        roleIndex++;
        type(); // Start typing the next role
    }
}

// Start the typing effect
type();
