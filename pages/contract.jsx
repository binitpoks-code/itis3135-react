export default function Contract() {
    return (
        <>
            {/* The layout keeps the agreement and photo together and stacks them on narrow screens. */}
            <div className="contract-layout">
                <section className="contract-card" aria-label="Course agreement">
                    <p>I, <a href="./introduction.html">Binit Pokharel</a>, agree to follow the expectations and responsibilities of the course contract for Fall 2026 ITIS 3135, Front-End Web App Development, with my instructor, Professor D.I. von Briesen.</p>
                    <p>I understand that the work I publish through school websites, personal websites, and other publicly available online tools may be visible to anyone. I will make sure that I do not publish information that is inappropriate for schoolwork or anything that I would prefer to keep private.</p>
                    <p>I understand that my participation in this course is demonstrated through the work I complete, not simply by logging in or attending class. Missing assignments may therefore affect my attendance record as well as my progress in the course.</p>
                    <p>I also understand that web development gives me access to many examples, tutorials, and even code written by classmates. I will use these resources only to help me learn. The work I submit will be my own, and whenever I use outside material, I will give proper credit and will not copy work from my classmates.</p>
                    <p className="contract-signature">Signed: <em>Binit Pokharel, September 10, 2026</em></p>
                </section>
                <figure>
                    <img src="images/itis3135-course.jpg" alt="ITIS 3135 course page displayed on my laptop" />
                    <figcaption>My ITIS 3135 course page.</figcaption>
                </figure>
            </div>
        </>
    );
}
