export default function About() {
    return (
        <>
            <div className="about-intro">
                <section>
                    <h3 className="about-heading">About ITIS 3135</h3>
                    <p>This page is built in part to demonstrate work for UNC Charlotte’s ITIS3135 - Front-End Web Application Development class in sections run by Mr. von Briesen. Additional information can be found on the <a href="https://divonbriesen.github.io/teaching/itis3135/">ITIS3135 course website</a>.</p>
                    <p>This course seeks to provide students relevant experience in front-end web application development by building multiple websites using a variety of tools and techniques.</p>
                </section>
                <figure>
                    <img src="images/classroom-coding.jpg" alt="Classroom used for coding instruction" />
                    <figcaption>Classroom Coding</figcaption>
                </figure>
            </div>
            <div className="about-lists">
                <section>
                    <h3 className="about-heading">Tools Used in the Course</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Emmet within VS Code</li>
                        <li>SFTP via FileZilla</li>
                        <li>Git via GitHub Desktop and GitHub.com</li>
                        <li>Various browser tools</li>
                        <li>The Accumulus Validator</li>
                        <li>The Vicunadator Validator</li>
                    </ul>
                </section>
                <section>
                    <h3 className="about-heading">Sites Built in the Course</h3>
                    <ul>
                        <li>A personal home portfolio</li>
                        <li><a href="./">This course site</a></li>
                        <li>A design firm site representing a fictitious or aspirational design/consulting firm for the student and named after them</li>
                        <li>A Crappy Page intended to demonstrate poor web design practices so they can be avoided elsewhere</li>
                        <li>A whimsical product company</li>
                        <li>A student, colleague, or peer management tool</li>
                        <li>A client project website</li>
                    </ul>
                </section>
            </div>
        </>
    );
}
