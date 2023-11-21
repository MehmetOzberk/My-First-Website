 /* dark mode*/

document.addEventListener("DOMContentLoaded", function () {
// Check if the theme preference is already saved in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    // Apply the dark theme
    applyDarkTheme();
} else {
    // Apply the light theme (default)
    applyLightTheme();
}

// Check if the toggle checkbox state is already saved in local storage
const toggleState = localStorage.getItem('toggleState');
if (toggleState === 'checked') {
    // Set the toggle checkbox to checked
    document.getElementById("theme-toggle").checked = true;
}

// Function to apply the dark theme
function applyDarkTheme() {
    document.body.style.backgroundColor = '#181a1e';
    var element = document.querySelector(".icibos");
    element.style["-webkit-text-stroke"] = "1px #fff"; 
    var elementyazi = document.getElementsByClassName("yazi");
    for (var i = 0; i < elementyazi.length; i++) {
        var element1 = elementyazi[i];
        element1.style["color"] = "#fff";
    }
    // Save the theme preference to local storage
    localStorage.setItem('theme', 'dark');
    // Save the toggle state to local storage
    localStorage.setItem('toggleState', 'checked');
    // Save the theme preference to a URL parameter
    window.history.replaceState({}, '', '?theme=dark');
}

// Function to apply the light theme
function applyLightTheme() {
    document.body.style.backgroundColor = '#fff';
    var element = document.querySelector(".icibos");
    element.style["-webkit-text-stroke"] = "1px #000000"; 
    var elementyazi = document.getElementsByClassName("yazi");
    for (var i = 0; i < elementyazi.length; i++) {
        var element1 = elementyazi[i];
        element1.style["color"] = "#000000";
    }
    // Save the theme preference to local storage
    localStorage.setItem('theme', 'light');
    // Save the toggle state to local storage
    localStorage.setItem('toggleState', 'unchecked');
    // Save the theme preference to a URL parameter
    window.history.replaceState({}, '', '?theme=light');
}

// Event listener for the theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        // Apply the dark theme
        applyDarkTheme();
    } else {
        // Apply the light theme
        applyLightTheme();
    }
});

// Parse URL parameters on page load
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    
    // Apply theme based on URL parameter (if available)
    if (theme === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});
    /*scroll animation */
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
}, 
{
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});
const targetElement = document.querySelector('.hidden');
if (targetElement) {
    observer.observe(targetElement);
}
 const menubtn = document.getElementsByClassName('menu-btn')[0]
  const navlinks = document.getElementsByClassName('nav-links')[0]

menubtn.addEventListener('click', () =>{
 navlinks.classList.toggle('aktif')
}
);
});

 
