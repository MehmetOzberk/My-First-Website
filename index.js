/* dark mode*/
let currenttheme;
document.addEventListener("DOMContentLoaded", function () {
    let theme = document.getElementById("theme-toggle");
    theme.addEventListener("change", () => {
        if (theme.checked) {
            document.body.style.backgroundColor = '#181a1e';
           
            var element = document.querySelector(".icibos");
            element.style["-webkit-text-stroke"] = "1px #fff"; 
            var elementyazi = document.getElementsByClassName("yazi");
            for (var i = 0; i < elementyazi.length; i++) {
                var element1 = elementyazi[i];
                element1.style["color"] = " #fff"; // Doğru sözdizimi kullanımı
            }

            currenttheme ="dark";
        } else {
            document.body.style.backgroundColor = '#fff';
            
            var element = document.querySelector(".icibos");
            element.style["-webkit-text-stroke"] = "1px #000000"; 
            var elementyazi = document.getElementsByClassName("yazi");
            for (var i = 0; i < elementyazi.length; i++) {
                var element1 = elementyazi[i];
                element1.style["color"] = " #000000"; // Doğru sözdizimi kullanımı
            }
            currenttheme=light;
        }
    });
    /*scroll animation */
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
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

});

   
   


