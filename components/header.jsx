import Navigation from "./navigation.jsx";

export const siteName = "Binit Pokharel's Bold Panther | ITIS3135";
export const originalCourse = "https://webpages.charlotte.edu/bpokhar3/itis3135/";

export default function Header({ routes, currentHref }) {
    return (
        <header>
            <h1>{siteName}</h1>
            <Navigation label="Primary navigation" links={routes} currentHref={currentHref} />
        </header>
    );
}
