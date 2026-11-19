export default function Home() {
    return (
        <>
            {/* This div and class keep the Home text and photo side-by-side, then stack them on mobile. */}
            <div className="home-intro">
                <section>
                    <h3>Welcome</h3>
                    <p>This is my ITIS 3135 course website, where I keep my coursework and projects related to front-end web development.</p>
                    <p>I’ll keep updating this site with my work as I move through ITIS 3135 and learn more about web development.</p>
                </section>
                <figure>
                    <img src="images/unc-charlotte-campus.jpg" alt="UNC Charlotte campus entrance" />
                    <figcaption>The University of North Carolina at Charlotte.</figcaption>
                </figure>
            </div>
        </>
    );
}
