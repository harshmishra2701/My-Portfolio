export default function Header() {
    const el = document.createElement("header");

    el.innerHTML = `
        <h1>POR<span style="color: red;">TFO</span>LIO</h1>
        <nav>
            <a href="#home"><span>Home</span></a>
            <a href="#about"><span>About</span></a>
            <a href="#projects"><span>Project</span></a>
            <a href="#contact"><span>Contact</span></a>
        </nav>
    `;

    return el;
}
