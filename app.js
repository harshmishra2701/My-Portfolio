import Header from "./components/header.js";
import Hero from "./components/hero.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

const app = document.getElementById("app");

app.append(
    Header(),
    Hero(),
    About(),
    Projects(),
    Contact(),
    Footer()
);

// SAME smooth scroll JS from your original file
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
