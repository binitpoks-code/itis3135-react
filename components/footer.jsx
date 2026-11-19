import { originalCourse } from "./header.jsx";
import Navigation from "./navigation.jsx";

const profiles = [
    { label: "CLT Web", href: "https://webpages.charlotte.edu/bpokhar3/" },
    { label: "GitHub.io", href: "https://binitpoks-code.github.io/" },
    { label: "GitHub", href: "https://github.com/binitpoks-code" },
    { label: "freeCodeCamp", href: "https://www.freecodecamp.org/binitpoks-code" },
    { label: "Codecademy", href: "https://www.codecademy.com/profiles/BinitPokharel" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/binit-pokharel-b342a7251" },
    { label: "ITIS3135.io", href: "https://binitpoks-code.github.io/itis3135/" }
];

const validators = [
    { label: "Validate HTML", href: "https://validator.w3.org/check?uri=referer" },
    { label: "Validate CSS", href: "https://jigsaw.w3.org/css-validator/check/referer" }
];

export default function Footer() {
    return (
        <footer>
            <Navigation label="Profile links" links={profiles} />
            <p>Designed by <a href={originalCourse + "binitpokhareldesigns.com/"}>Binit Designs</a> &copy;2026</p>
            <p>Certified in <a href="https://www.freecodecamp.org/certification/binitpoks-code/responsive-web-design-v9">Responsive Web Design</a></p>
            <p><em>Learning by building.</em></p>
            <Navigation label="Validation links" links={validators} />
        </footer>
    );
}
