import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { siteName } from "../components/header.jsx";
import PageLayout from "../components/page-layout.jsx";
import About from "../pages/about.jsx";
import Contract from "../pages/contract.jsx";
import Home from "../pages/home.jsx";
import Introduction from "../pages/introduction.jsx";

const base = import.meta.env.BASE_URL;
const routes = [
    { href: "./", label: "Home", heading: "ITIS 3135 Home", page: Home },
    { href: "./introduction.html", label: "Introduction", heading: "Introduction", page: Introduction },
    { href: "./contract.html", label: "Contract", heading: "Contract", page: Contract },
    { href: "./about.html", label: "About", heading: "About", page: About, mainClass: "about" }
];

function routeFor(pathname) {
    if (pathname === base + "index.html") return routes[0];
    return routes.find(({ href }) => base + href.slice(2) === pathname);
}

function App() {
    const [route, setRoute] = useState(() => routeFor(window.location.pathname) ?? routes[0]);
    const headingRef = useRef(null);
    const focusHeading = useRef(false);

    useEffect(() => {
        function onPopState() {
            setRoute(routeFor(window.location.pathname) ?? routes[0]);
        }

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useLayoutEffect(() => {
        document.title = siteName + " | " + route.heading;
        if (focusHeading.current) {
            focusHeading.current = false;
            headingRef.current.focus({ preventScroll: true });
            window.scrollTo(0, 0);
        }
    }, [route]);

    function onNavigate(event) {
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const link = event.target.closest("a[href]");
        if (!link || link.origin !== window.location.origin || link.target ||
            link.hasAttribute("download") || link.search || link.hash) return;

        const next = routeFor(link.pathname);
        if (!next) return;

        event.preventDefault();
        if (next === route) return;

        window.history.pushState(null, "", next.href);
        focusHeading.current = true;
        setRoute(next);
    }

    return (
        // The React boundary handles links across the shared header, content, and footer.
        <div onClick={onNavigate}>
            <PageLayout routes={routes} route={route} headingRef={headingRef} />
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
// Render the initial page before deferred checks inspect the document.
flushSync(() => root.render(<App />));
