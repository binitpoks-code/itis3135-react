import Footer from "./footer.jsx";
import Header from "./header.jsx";

export default function PageLayout({ routes, route, headingRef }) {
    const Page = route.page;

    return (
        <>
            <Header routes={routes} currentHref={route.href} />
            {/* The About class scopes the original compact spacing to that page. */}
            <main className={route.mainClass}>
                <h2 ref={headingRef} tabIndex={-1}>{route.heading}</h2>
                <Page />
            </main>
            <Footer />
        </>
    );
}
