export default function About() {
    const el = document.createElement("section");
    el.id = "about";

    el.innerHTML = `
        <h2>About Me</h2>

            <div class="about-text">
                <p>
                   I’m a passionate developer who enjoys creating clean, responsive, and user-friendly digital experiences. I love learning new technologies, experimenting with creative UI designs, and building projects that solve real problems.
                </p>
            </div>
        </div>

        <div class="skills-section">
            <h2>Skills</h2>

            <div class="skills-category">
                <h3>💻 Programming Languages</h3>
                <div class="skills-grid">
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"><span>Python</span></div>
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"><span>HTML</span></div>
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"><span>CSS</span></div>
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"><span>Javascript</span></div>
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"><span>Java</span></div>
                    <div class="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"><span>MySQL</span></div>
                </div>
            </div>
        </div>
    `;

    return el;
}
