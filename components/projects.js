export default function Projects() {
    const el = document.createElement("section");
    el.id = "projects";

    el.innerHTML = `
        <h2>My Projects</h2>

        <div class="project-grid">
            <a href="#">
            <div class ="project-card">
            <h3>🌐Personal Portfolio</h3>
            <p>A clean, responsive portfolio showcasing your skills, projects, and contact form -built with HTML, CSS, and JS.</P>
            </div>
            <a href="https://github.com/harshmishra2701/URL-Shortening" target="_blank">
                <div class="project-card">
                    <h3>🔗✂️URL Shortener</h3>
                    <p>A URL shortening is the process of taking a long complex link and converting into a short, easy-to-share link.When someone clicks the short link, the URL shortening service instantly redirects them to the original, long link.</p>
                </div>
            </a>
            <a href="#">
                <div class="project-card">
                    <h3>🧾 To-Do List App</h3>
                    <p>A A simple to-do list that allows adding, deleting, and saving tasks with local storage support.</p>
                </div>
            </a>
        </div>
    `;

    return el;
}
