export default function Hero() {
    const el = document.createElement("section");
    el.id = "home";
    el.className = "hero";

    el.innerHTML = `
        <img src="./own.jpg" alt="Profile Picture">
        <div class="hero-text">
            <h2>
                I am 
                <span>
                    <span>Harsh</span>
                    <span>a Coder</span>
                    <span>a Programmer</span>
                    <span>a developer</span>
                </span>
            </h2>

            <h2>Welcome to My Portfolio 👋</h2>

            <p>
                Hi, I'm <strong>Harsh</strong> —a passionate developer who loves building clean, responsive, and user-friendly digital experiences. I enjoy turning ideas into functional designs and solving real-world problems with code. Explore my portfolio to learn more about my work!
            </p>

            <a href="Harsh_Mishra Resume..pdf" download class="resume-btn">
                <i class="fa-solid fa-file"></i> Download Resume
            </a>
        </div>
    `;

    return el;
}
