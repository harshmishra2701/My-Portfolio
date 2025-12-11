export default function Contact() {
    const el = document.createElement("section");
    el.id = "contact";

    el.innerHTML = `
        <h2>Contact Me</h2>
        <p>Interested in working together or just want to say hi? Let’s connect!</p>

        <div class="contact-links">
            <a href="mailto:mishraharsh649@gmail.com" target="_blank">
                <i class="fa-solid fa-envelope"></i> Email
            </a>

            <a href="https://www.instagram.com/__mishra_jii_._/" target="_blank">
                <i class="fa-brands fa-instagram"></i> Instagram
            </a>

            <a href="https://github.com/harshmishra2701" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/harsh-mishra-163695249/"target="_blank">
                <i class="fa-brands fa-linkedin"></i> Linkedin
            </a>

    `;

    return el;
}
